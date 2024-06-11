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

export default {
    loadPicture,
}