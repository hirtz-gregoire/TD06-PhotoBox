class Categorie{

    constructor(id, nom, descr){
        if (typeof(id)!=="number"){throw new TypeError("id must be a number");}
        if (typeof(nom)!=="string"){throw new TypeError("nom must be a string");}
        if (typeof(descr)!=="string"){throw new TypeError("descr must be a string");}

        this.id = id;
        this.nom = nom;
        this.descr = descr;
    }

}

export default Categorie;