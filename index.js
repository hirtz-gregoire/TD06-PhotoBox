import photoloader from "./lib/photoloader.js"

function getPicture( id ){
    if (typeof(id)!=="number" || id<=0)
        throw new TypeError("id must be a number and id not <= 0");

    photoloader.loadPicture(id).then((data) => {
        let photo = data.photo;
        console.log(photo.titre+" ("+photo.type+")\n"+photo.url.href)
    })
}

getPicture(window.location.hash ? window.location.hash.substr(1): 105);




