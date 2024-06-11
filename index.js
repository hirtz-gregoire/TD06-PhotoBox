import photoloader from "./lib/photoloader.js"
import ui from "./lib/ui/ui.js"
import gallery from "./lib/gallery";
import gallery_ui from "./lib/ui/gallery_ui";

function getPicture( id ){
    if (typeof(id)!=="number" || id<=0)
        throw new TypeError("id must be a number and id not <= 0");

    photoloader.loadPicture(id).then((data) => {
        let photo = data.photo;
        console.log(photo.titre+" ("+photo.type+")\n"+photo.url.href)
        ui.displayPicture(data)
        getCategorie(data).then((data) => {
            ui.displayCategorie(data);
        })
        getCommentaires(data).then((data) => {
            ui.displayCommentaires(data);
        })
    })
}

//getPicture(window.location.hash ? parseInt(window.location.hash.substr(1)): 105);



function getCategorie(image){
    if (typeof(image)!=="object")
        throw new TypeError("image must be a objet");
    return photoloader.loadResource(image.links.categorie.href);
}

function getCommentaires(image){
    if (typeof(image)!=="object")
        throw new TypeError("image must be a objet");
    return photoloader.loadResource(image.links.comments.href);
}


function load(){
    let p = gallery.load();
    p.then((data) => {
        gallery_ui.display_galerie(data);
    })
}

document.getElementById("load").addEventListener("click", function(){
    load()
})

document.getElementById("next").addEventListener("click", function(){
    gallery.next();
    load();
})

document.getElementById("prev").addEventListener("click", function(){
    gallery.prev();
    load();
})

document.getElementById("first").addEventListener("click", function(){
    gallery.first();
    load();
})

document.getElementById("last").addEventListener("click", function(){
    gallery.last();
    load();
})

document.onload = load();


