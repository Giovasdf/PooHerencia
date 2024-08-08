//Universo
//Middle-earth
//Fellowship -> Frodo, Aragorn, Legolas, Gimli, Gandalf
//No Fellowship -> Samwise, Boromir, Gollum, Saruman

//Padre
class Universo {
    constructor(universo) {
        this.universo = universo; // Nombre del Universo
    }
}

//Hijo
class Fellowship extends Universo {
    constructor(universo, nombreGrupo) {
        super(universo);
        this.nombreGrupo = nombreGrupo; // La Comunidad del Anillo
    }
}

//Nietos
class Heroes extends Fellowship {
    constructor(universo, nombreGrupo, habilidad, nombre) {
        super(universo, nombreGrupo);
        this.habilidad = habilidad;
        this.nombre = nombre;
    }
    
    datosHeroe() {
        return `Nombre: ${this.nombre} Habilidad: ${this.habilidad}
        Universo: ${this.universo} Nombre del Grupo: ${this.nombreGrupo}`;
    }
}

class NoHeroes extends Fellowship {
    constructor(universo, nombreGrupo, profesion, nombre) {
        super(universo, nombreGrupo);
        this.profesion = profesion;
        this.nombre = nombre;
    }

    datosNoHeroe() {
        return `Nombre: ${this.nombre} Profesión: ${this.profesion}
        Universo: ${this.universo} Nombre del Grupo: ${this.nombreGrupo}`;
    }
}

let aragorn = new Heroes("Tierra Media", "La Comunidad del Anillo", "Habilidad en combate", "Aragorn");
let samwise = new NoHeroes("Tierra Media", "La Comunidad del Anillo", "Jardinero", "Samwise");

console.log(aragorn);
console.log(aragorn.datosHeroe()); 

console.log(samwise);
console.log(samwise.datosNoHeroe());
