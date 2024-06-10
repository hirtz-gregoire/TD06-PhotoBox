import image from "./model/image.js";
import Handlebars from 'handlebars' ;
import constants from "./constants.js";

const p4Template = document.querySelector('#photoTemplate').innerHTML;
let template = Handlebars.compile(p4Template);

function displayPicture( img ){
    if (typeof(img)!=="object" || !(img instanceof image)){throw new TypeError("img needs to be an object Image");}

    document.querySelector("main#photo").innerHTML = template( {
        url : constants.photoUrl + img.url.href,
        titre : img.titre,
        format : img.format,
        width : img.width,
        height : img.height,
    } );
}

export default {
    displayPicture : displayPicture,
}