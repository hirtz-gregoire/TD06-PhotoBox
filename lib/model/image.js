import photoloader from "../photoloader.js";
import Url from "./url";

class Image{

    constructor(id, titre, descr, file, format, size, width, height, url, categories, comments){
        if (typeof(id)!=="number"){throw new Error("id must be a number");}
        if (typeof(titre)!=="string"){throw new Error("titre must be a string");}
        if (typeof(descr)!=="string"){throw new Error("descr must be a string");}
        if (typeof(file)!=="string"){throw new Error("file must be a string");}
        if (typeof(format)!=="string"){throw new Error("format must be a string");}
        if (typeof(size)!=="number"){throw new Error("size must be a number");}
        if (typeof(width)!=="number"){throw new Error("width must be a number");}
        if (typeof(height)!=="number"){throw new Error("height must be a number");}
        if (!(url instanceof Url)){throw new Error("url must be a Url Objet");}
        if (!Array.isArray(categories)) { throw new Error("categories must be an array"); }
        if (!Array.isArray(comments)) { throw new Error("comments must be an array"); }

        this.id = id;
        this.titre = titre;
        this.descr = descr;
        this.file = file;
        this.format = format;
        this.size = size;
        this.width = width;
        this.height = height;
        this.url = url;
        this.categories = categories;
        this.comments = comments;
    };

    static loadImage(json){
        console.log(json);
        let url = new Url(json.url.href);
        let categories = [];
        let comments = [];

        return new Image(json.id, json.titre, json.descr, json.file, json.format, json.size, json.width, json.height, url, categories, comments);
    }
}

export default Image;