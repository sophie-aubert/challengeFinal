// ON GARDE CE DOCUMENT (DONC LE MODULE D'ENTRÉE)// Importation du module de couleur (color-convert)
import convert from "color-convert"

//Exemple de comment fonctionne la librairire "color-convert"
//let color = convert.hex.hsl("#ffffff");
//console.log(color);

// On génère une palette de couleur avec une fonction
// On lui passe un hex et on veut qu'il nous retourne un H.S.L
export const generateurPalette = (hex) =>{
// On crée un tableau qui va stocker toutes les couleurs finales
const tabFinal = []
// On dit que les deux première valeure en hsl 
// seront stockée dans un tab [h,s] car elle ne changent pas :
let [h,s] = convert.hex.hsl(hex)
// Puis pour le "l" qui reste, on fait une boucle
// qui lui fait démarer à 0 et qui va de 10 en 10.
for (let l = 0; l <= 100; l+=10){
    // On stock à chaque fois le nouveau l avec les 
    // deux première (donc h et s) dans le tableau final
    tabFinal.push([h,s,l])
}
console.log(tabFinal)
return tabFinal
}

export const isHex = (hex) => {
// Il faut controler que la valeur entrée est une couleur et non pas 
// autre chose. On peut utiliser le truc ci-dessous qui fait le travail 
// pour nous : 
return /^#[0-9A-F]{6}$/i.test(hex);

}
