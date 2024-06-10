import photoloader from "./photoloader.js";
import ui from "./ui.js";
import image from "./model/image.js";

async function displayPicture( idPicture){
    let json = await photoloader.Photoloader( 105 );
    let img = image.loadImage(json.photo);
    ui.displayPicture(img);
}

displayPicture(105)




