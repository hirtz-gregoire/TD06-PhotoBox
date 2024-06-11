class Comment{

    constructor(id, titre, pseudo, content, date){
        if(typeof(id)!=="number"){throw new Error("id must be a number");}
        if (typeof(titre)!=="string"){throw new Error("titre must be a string");}
        if (typeof(pseudo)!=="string"){throw new Error("pseudo must be a string");}
        if (typeof(content)!=="string"){throw new Error("content must be a string");}
        if (typeof(date)!=="string"){throw new Error("date must be a string");}

        this.id = id;
        this.titre = titre;
        this.pseudo = pseudo;
        this.content = content;
        this.date = date;
    }

}

export default Comment;