import constants from './constants.js';


function loadPicture( idPicture ) {
    if (typeof(idPicture)!=='number' || idPicture<=0)
        throw new TypeError("id must be a number and not 0/negatif number");

    const url = constants.apiUrl+'/photos/'+idPicture;

    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }else{
                return Promise.reject(
                    new Error(idPicture + response.statusText)
                );
            }
        })
        .catch((error) => {
            console.error("loadPicture error: "+ error);
        })
}


function loadResource( uri ) {
    if (typeof(uri)!=="string")
        throw new TypeError("uri must be a string");

    const url = constants.photoUrl+uri;

    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }else{
                return Promise.reject(
                    new Error(uri + response.statusText)
                );
            }
        })
        .catch((error) => {
            console.error("loadRessource error: "+ error);
        })
}
export default {
    loadPicture,
    loadResource,
}