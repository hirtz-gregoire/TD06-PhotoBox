import Handlebars from "handlebars";
import constants from "./constants.js";

function displayPicture(json){
    if (typeof(json)!=="object")
        throw new TypeError("json must be an object");

    const photoTemplate = document.querySelector('#photoTemplate').innerHTML;
    let template = Handlebars.compile(photoTemplate);

    let image = json.photo;

    document.querySelector('main#photo').innerHTML = template({
        id: image.id,
        url: constants.photoUrl+image.url.href,
        titre: image.titre,
        descr: image.descr,
        format: image.format,
        width: image.width,
        height: image.height,
    });
}

export default {
    displayPicture,
}