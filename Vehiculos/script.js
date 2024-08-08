//Clase Padre
class Vehiculo {
    constructor(marca, color, matricula) {
        this.marca = marca;
        this.color = color;
        this.matricula = matricula;
    }
}

//Clases Hijas
//Bus, Auto(Coche), Moto, Tren, Camion, Aviones
class Coche extends Vehiculo {
    constructor(marca, color, matricula) {
        super(marca, color, matricula);
        // Normalmente Escribimos los atributos en todas las clases, pero con Super podemos usar el 
        // constructor del padre, reduciendo así las lineas de codigo 
        // this.marca = marca;
        // this.color = color;
        // this.matricula = matricula;
    }
}  

class Moto extends Vehiculo {
    constructor(marca, color, matricula) {
        super(marca, color, matricula);
    }
}

class Bus extends Vehiculo {
    constructor(marca, color, matricula) {
        super(marca, color, matricula);
    }
}

let coche1 = new Coche("Toyota", "Negro", "1234AB");
let moto1 = new Moto("Honda","Rojo","123AS");
let bus1 = new Bus("Fuso", "blanco", "567ASD");

console.log(coche1);
console.log(moto1);
console.log(bus1);