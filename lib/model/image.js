import photoloader from "../photoloader.js";
import Url from "./url";
import Categorie from "./categorie";
import Comment from "./comment";

class Image{

    constructor(id, titre, descr, file, format, size, width, height, url, categorie, comments){
        if (typeof(id)!=="number"){throw new Error("id must be a number");}
        if (typeof(titre)!=="string"){throw new Error("titre must be a string");}
        if (typeof(descr)!=="string"){throw new Error("descr must be a string");}
        if (typeof(file)!=="string"){throw new Error("file must be a string");}
        if (typeof(format)!=="string"){throw new Error("format must be a string");}
        if (typeof(size)!=="number"){throw new Error("size must be a number");}
        if (typeof(width)!=="number"){throw new Error("width must be a number");}
        if (typeof(height)!=="number"){throw new Error("height must be a number");}
        if (!(url instanceof Url)){throw new Error("url must be a Url Objet");}
        if (!(categorie instanceof Categorie)){throw new Error("categorie must be a Categorie Objet");}
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
        this.categorie = categorie;
        this.comments = comments;
    };

    static loadImage(json, json2, json3){

        json2 = json2.categorie;
        let categorie = new Categorie(json2.id, json2.nom, json2.descr);

        let comments = [];
        json3 = json3.comments;
        json3.forEach((elem) => {
            let comment = new Comment(elem.id, elem.titre, elem.pseudo, elem.content, elem.date);
            comments.push(comment);
        })

        let photo = json.photo;
        let url = new Url(photo.url.href);
        return new Image(photo.id, photo.titre, photo.descr, photo.file, photo.format, photo.size, photo.width, photo.height, url, categorie, comments);
    }
}

export default Image;