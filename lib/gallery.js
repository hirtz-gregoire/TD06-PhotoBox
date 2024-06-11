import photoloader from "./photoloader";

let page = 1
let nbPage
let size

async function load(){
    let json = await photoloader.loadResource(`/www/canals5/phox/api/photos/?page=${page}`);
    size = json.size;
    nbPage = Math.ceil(json.count/size);
    return json
}

function next(){
    if (page<nbPage){
        page++
    }
}

function prev(){
    if (page>1){
        page--
    }
}

function first(){
    page = 1
}

function last(){
    page = nbPage
}


export default {
    load,
    next,
    prev,
    first,
    last,
}