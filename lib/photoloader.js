import constants from './constants.js';


function Photoloader( idPicture ) {

    console.log(`Photoloader : ${idPicture}`);

    if (idPicture===undefined || typeof idPicture!=='number' || idPicture<=0) {
        throw new Error('Photoloader: id is invalid');
    }

    const url = constants.apiUrl+'/photos/'+idPicture;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
}


function loadResource( uri ){
    if (typeof(uri)!=='string'){throw new TypeError('URL must be a string');}

    const url  = constants.photoUrl+uri;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
}


export default {
    Photoloader : Photoloader,
    loadResource : loadResource
}