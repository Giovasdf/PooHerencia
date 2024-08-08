//Entorno
//Tierra de los ThunderCats
//Personajes de los ThunderCats -> Lion-O, Cheetara, Tygra, Panthro
//Aliados y Enemigos -> Mumm-Ra, Jaga, WilyKit, WilyKat

//Padre
class Entorno {
    constructor(nombreEntorno) {
        this.nombreEntorno = nombreEntorno; // Nombre del Entorno (por ejemplo, Tierra de los ThunderCats)
    }
}

//Hijo
class Equipo extends Entorno {
    constructor(nombreEntorno, nombreEquipo) {
        super(nombreEntorno);
        this.nombreEquipo = nombreEquipo; // Equipo dentro del entorno (ThunderCats, etc.)
    }
}

//Nietos
class Personaje extends Equipo {
    constructor(nombreEntorno, nombreEquipo, rol, nombre) {
        super(nombreEntorno, nombreEquipo);
        this.rol = rol; // Rol en el equipo (Líder, Explorador, etc.)
        this.nombre = nombre;
    }
    
    datosPersonaje() {
        return `Nombre: ${this.nombre} Rol: ${this.rol}
        Entorno: ${this.nombreEntorno} Equipo: ${this.nombreEquipo}`;
    }
}

class Externo extends Entorno {
    constructor(nombreEntorno, rol, nombre) {
        super(nombreEntorno);
        this.rol = rol; // Rol en la trama (Enemigo, Sabio, etc.)
        this.nombre = nombre;
    }

    datosExterno() {
        return `Nombre: ${this.nombre} Rol: ${this.rol}
        Entorno: ${this.nombreEntorno}`;
    }
}

// Instancias de ejemplo
let lionO = new Personaje("Tierra de los ThunderCats", "ThunderCats", "Líder", "Lion-O");
let cheetara = new Personaje("Tierra de los ThunderCats", "ThunderCats", "Exploradora", "Cheetara");
let mummRa = new Externo("Tierra de los ThunderCats", "Enemigo Principal", "Mumm-Ra");
let jaga = new Externo("Tierra de los ThunderCats", "Sabio", "Jaga");

console.log(lionO);
console.log(lionO.datosPersonaje());

console.log(cheetara);
console.log(cheetara.datosPersonaje());

console.log(mummRa);
console.log(mummRa.datosExterno());

console.log(jaga);
console.log(jaga.datosExterno());
