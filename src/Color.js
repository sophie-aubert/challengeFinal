import {generateurPalette} from "./modules/utils.js"
import convert from "color-convert"

    // TOUTES LES CLASSE DOIVENT ÊTRE EXPORTÉE
export class Color {
    // ICI LES PROPRITETES PRIVÉES 
    // Il y'a 3 propriété privée : 
    #hsl;
    #hex;
    #element;
    // ICI LE CONSTRUCTEUR
    // il n'a que besoin de HSL
    constructor(hsl){
        this.#hsl = hsl;
        this.#hex = `#${convert.hsl.hex(this.#hsl)}`;
        this.#element = this.#generateurElementPalette();

    }
#generateurElementPalette(){ 
    // ************************************************************************
    // ************************ MODIFICATION DOM ******************************
    // ************************************************************************

    // Crée un élément <div>
    // ************************* CRER UN ELEMENT DIV DANS LE DOM : *******************
    const colorElement = document.createElement("div");
    // ************************* AJOUTER CLASS DANS LE DOM : *************************
    // Lui ajoute une class "color"
    colorElement.classList.add("color");
    // ************************* AJOUTER ATTRIBUT DANS LE DOM: **********************
    // Ajoute l'attribut de donnée "data-color"
    colorElement.dataset.color = this.#hex;
    // ************************* CHANGER COULEURS DANS LE DOM: **********************
    // Change la couleur de fond de l'élément
    colorElement.style.backgroundColor = this.#hex;

    // ************************* CREER / MODIFIER UN ELEMENT DANS LE DOM: ***********
    //Crée un élément <p>
    const textElement = document.createElement("p");

    // Lui ajoute comme texte la valeur hexadécimale
    textElement.textContent = this.#hex;
    // Change la couleur du texte selon la luminosité de la couleur de fond
    textElement.style.color = this.#hsl[2] < 60 ? "#ffffff" : "#000000";
    // Ajoute l'élément <p> comme enfant du <div>
    colorElement.appendChild(textElement);

    // SI ON VEU ENLEVER QUELQUE CHOSE, ON FAIT :
    // voir exercice BANQUE ! 

    // Retourne le <div>
    return colorElement;
  }   
  // Il prend l'element et l'insère dans le DOM, à la suite du premier 
  display(panneauDeCouleur) {
    // Ajoute this.#element comme enfant d'un élément parent passé en argument.
    panneauDeCouleur.appendChild(this.#element);
    // le .appendChild va mettre à la suite un element à la suite d'un autre. 
  }
}



