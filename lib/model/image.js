import photoloader from "../photoloader.js";

class Image{

    constructor(id, titre, descr, file, format, size, width, height, url){
        if (typeof(id)!=="number"){throw new Error("id must be a number");}
        if (typeof(titre)!=="string"){throw new Error("titre must be a string");}
        if (typeof(descr)!=="string"){throw new Error("descr must be a string");}
        if (typeof(file)!=="string"){throw new Error("file must be a string");}
        if (typeof(format)!=="string"){throw new Error("format must be a string");}
        if (typeof(size)!=="number"){throw new Error("size must be a number");}
        if (typeof(width)!=="number"){throw new Error("width must be a number");}
        if (typeof(height)!=="number"){throw new Error("height must be a number");}

        this.id = id;
        this.titre = titre;
        this.descr = descr;
        this.file = file;
        this.format = format;
        this.size = size;
        this.width = width;
        this.height = height;
        this.url = url;
        this.categorie = [];
        this.comments = [];
    };

    static loadImage(json){
        return new Image(json.id, json.titre, json.descr, json.file, json.format, json.size, json.width, json.height, json.url);
    }
}

export default Image;