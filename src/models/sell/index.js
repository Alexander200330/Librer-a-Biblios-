export default class SellModel{
    constructor(pId="", pUnit="", pTotal="", pDate="", pQuantity=""){
        this.setData({idBook: pId, unityPrice: pUnit, totalPrice: pTotal, sellDate: pDate, quantity: pQuantity});
    }

    setData(data){
        this.idBook = data.idBook;
        this.unityPrice = data.unityPrice;
        this.totalPrice = data.totalPrice;
        this.sellDate = data.sellDate;
        this.quantity = data.quantity;
        return this;
    }

    getJSON(){
        return {
            idBook : this.idBook,
            unityPrice: this.unityPrice,
            totalPrice: this.totalPrice,
            sellDate: this.sellDate,
            quantity: this.quantity,
        }
    }

    // Not implemented yet
    getJSONToDB(){
        return {
            id_libro_vendido : this.idBook,
            precio_unitario: this.unityPrice,
            total_venta: this.totalPrice,
            fecha_venta: this.sellDate,
            cantidad_vendida: this.quantity,
        }
    }
}