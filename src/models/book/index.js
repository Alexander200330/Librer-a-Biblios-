export class BookModel{
    constructor(pTitle="", pPrice="", pStock="", pDescription="", pAuthor="", pImg=""){
        this.title = pTitle;
        this.price = pPrice;
        this.stock = pStock;
        this.description = pDescription;
        this.author = pAuthor;
        this.pImg = pImg;
    }

    setData(data){
        this.title = data.title;
        this.price = data.price;
        this.stock = data.stock;
        this.description = data.description;
        this.author = data.author;
        //this.pImg = data.img;

        return this;
    }

    getJSON(){
        return {
            title : this.title,
            price: this.price,
            stock: this.stock,
            description: this.description,
            author: this.author
            //img: this.pImg
        }
    }

    getJSONToDB(){
        return {
            titulo : this.title,
            precio_unitario: this.price,
            cantidad: this.stock,
            descripcion: this.description,
            autor: this.author
            //img: this.pImg
        }
    }
}