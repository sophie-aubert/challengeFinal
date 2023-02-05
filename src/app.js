"use strict";
// POUR DES CHOSES QUI VONT MODIFIER L'ETAT DE NOTRE APP
import { Color } from "./Color";
import { generateurPalette } from "./modules/utils";
import { isHex } from "./modules/utils";

const headerElement = document.querySelector("header")
const tousLesPanneaux = document.querySelector("main");

// On récupère le formulaire : 
const form = document.querySelector("form")

// On va créer un fonction que va être le call-back de notre eventListener
// C'est une manière plus propore de coder. 
const miseEnForme = (e) => {
// On enlève le comportement de la page qui est : d'effacer le code couleur entré dans le formulaire.

//******* ENLEVER REFRESH PAR DEFAUT ***********************************************************************
e.preventDefault();

// ******* CHERCHER LA VALEUR ENTREE ***********************************************************************
// Methode 1/2 
// const value = e.target.firstElementChild.value;

// Methode 2/2 -- LA PLUS FACILE
const laOuOnEcris = document.querySelector("input")
const valeurEntree = laOuOnEcris.value
console.log(valeurEntree)

// condition pour controler si bien valeur hexa : 
if(isHex(valeurEntree)){
// Des qu'on à ça, on va pouvoir gén érer la palette qui 
// a deja été faite dans utils.js
const tabFinal = generateurPalette(valeurEntree)

    // on appelle la fonction : 
    displayColor(tabFinal);
} else {
    throw new Error("CECI N'EST PAS UNE COULEUR !");
}

}

// ???????????????????????????
// ???????????????????????????
const displayColor = (tabFinal) => {

//*******  REFRESH LE MAIN ***********************************************************************
    tousLesPanneaux.innerHTML ="";

    tabFinal.forEach((c) => {
        new Color(c).display(tousLesPanneaux);
    })

headerElement.classList.add("minimized");


// ???????????????????????????
// ???????????????????????????
}
// submit est déclenché lorsqu'un formulaire est envoyé
// Dans ce cas, ce sera miseEnForme qui va être appelé- 
form.addEventListener("submit", miseEnForme)
