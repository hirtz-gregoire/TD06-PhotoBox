import Handlebars from "handlebars";
import constants from "../constants";

function display_galerie(galerie){
    if (typeof(galerie)!=="object")
        throw new TypeError("Galerie doesn't exist");

    console.log(galerie);

    const galerieTemplate = document.querySelector('#galerieTemplate').innerHTML;
    let template = Handlebars.compile(galerieTemplate);

    document.querySelector('main').innerHTML = template({
        a: "aazezezaezaeza",
        galerie : galerie.photos,
    });
}


export default {
    display_galerie,
}