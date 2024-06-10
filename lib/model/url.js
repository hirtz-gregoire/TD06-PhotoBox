class Url {

    constructor(href) {
        if (typeof(href)!=="string"){throw new TypeError('URL must be a string');}

        this.href = href;
    }
}

export default Url;