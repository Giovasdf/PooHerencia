class Producto{
    constructor(name){
        this._name = name;
    }
    getName(){
        return this._name;
    }
}

class Pastel extends Producto{
    constructor(name,shape){
        super(name);
        //forma
        this._shape = shape;
    }
    getShape(){
        return this._shape;
    }
    setShape(shape){
        this._shape = shape;
    }
}

class Galleta extends Producto{
    constructor(name,shape){
        super(name);
        //forma
        this._shape = shape;
    }
    getShape(){
        return this._shape;
    }
    setShape(shape){
        this._shape = shape;
    }
}

class Pasteleria{
    Pedido(Producto){
        const result = `El pedido de ${Producto.getName()}, tendra forma de ${Producto.getShape()}`;
        return result;
    }
}

const pastel1 = new Pastel("Torta Amor","Corazón");
const galleta1 = new Galleta("Galletas Magicas","Pastelin");

const pasteleria = new Pasteleria();

const pedido1 = pasteleria.Pedido(pastel1);
const pedido2 = pasteleria.Pedido(galleta1);

console.log(pedido1);
console.log(pedido2);
