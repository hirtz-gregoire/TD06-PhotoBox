import Handlebars from "handlebars";
import constants from "./constants.js";

function displayPicture(json){
    if (typeof(json)!=="object")
        throw new TypeError("json must be an object");

    const photoTemplate = document.querySelector('#photoTemplate').innerHTML;
    let template = Handlebars.compile(photoTemplate);

    let image = json.photo;

    document.querySelector('#la_photo').innerHTML = template({
        id: image.id,
        url: constants.photoUrl+image.url.href,
        titre: image.titre,
        descr: image.descr,
        format: image.format,
        width: image.width,
        height: image.height,
    });
}


function displayCategorie(json){
    if (typeof(json)!=="object")
        throw new TypeError("json must be an object");

    const categorieTemplate = document.querySelector('#categorieTemplate').innerHTML;
    let template = Handlebars.compile(categorieTemplate);

    let categorie = json.categorie;

    document.querySelector('#la_categorie').innerHTML = template({
        nom: categorie.nom
    })
}

function displayCommentaires(json){
    if (typeof(json)!=="object")
        throw new TypeError("json must be an object");

    const commentairesTemplate = document.querySelector('#commentairesTemplate').innerHTML;
    let template = Handlebars.compile(commentairesTemplate);

    let commentaires = json.comments;
    console.log(commentaires)
    document.querySelector('#les_commentaires').innerHTML = template({
        commentaires : commentaires,
    })
}

export default {
    displayPicture,
    displayCategorie,
    displayCommentaires
}