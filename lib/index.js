import photoloader from "./photoloader.js";

async function getPicture( id ){
    const pr = await photoloader.Photoloader( id );
    let photo = pr.photo;
    console.log(`${photo.titre} ${photo.type} ${photo.url.href}`)
}

getPicture(window.location.hash ? parseInt(window.location.hash.substr(1)): 105);