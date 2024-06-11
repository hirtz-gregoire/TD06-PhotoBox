import photoloader from "./photoloader.js";
import ui from "./ui.js";
import image from "./model/image.js";

async function getPicture( id ){
    const json = await photoloader.Photoloader( id );
    const json2 = await photoloader.loadResource(json.links.categorie.href)
    let photo = json.photo;
    let categorie = json2.categorie
    console.log(`${photo.titre} ${photo.type} ${photo.url.href} ${categorie.nom}`)
}


async function displayPicture( idPicture){
    let json = await photoloader.Photoloader( idPicture );
    let json2 = await photoloader.loadResource(json.links.categorie.href);
    let json3 = await photoloader.loadResource(json.links.comments.href);

    let img = image.loadImage(json, json2, json3);

    //console.log(img);

    ui.displayPicture(img);
}

//getPicture(105);

displayPicture(106)




