//Universo
//Springfield
//Familia Simpson -> Homer, Marge, Bart, Lisa, Maggie
//No Familia Simpson -> Moe, Ned Flanders, Krusty, Mr. Burns

//Padre
class Universo {
    constructor(universo) {
        this.universo = universo; // Nombre del Universo
    }
}

//Hijo
class Springfield extends Universo {
    constructor(universo, nombreGrupo) {
        super(universo);
        this.nombreGrupo = nombreGrupo; // Familia Simpson o Habitantes de Springfield
    }
}

//Nietos
class FamiliaSimpson extends Springfield {
    constructor(universo, nombreGrupo, rol, nombre) {
        super(universo, nombreGrupo);
        this.rol = rol; // Rol en la familia (Padre, Madre, Hijo/a)
        this.nombre = nombre;
    }
    
    datosFamiliaSimpson() {
        return `Nombre: ${this.nombre} Rol: ${this.rol}
        Universo: ${this.universo} Nombre del Grupo: ${this.nombreGrupo}`;
    }
}

class NoFamiliaSimpson extends Springfield {
    constructor(universo, nombreGrupo, ocupacion, nombre) {
        super(universo, nombreGrupo);
        this.ocupacion = ocupacion; // Ocupación en Springfield
        this.nombre = nombre;
    }

    datosNoFamiliaSimpson() {
        return `Nombre: ${this.nombre} Ocupación: ${this.ocupacion}
        Universo: ${this.universo} Nombre del Grupo: ${this.nombreGrupo}`;
    }
}

let homer = new FamiliaSimpson("Springfield", "Familia Simpson", "Padre", "Homer Simpson");
let nedFlanders = new NoFamiliaSimpson("Springfield", "Vecinos de Springfield", "Dueño de la tienda de artículos para zurdos", "Ned Flanders");

console.log(homer);
console.log(homer.datosFamiliaSimpson());

console.log(nedFlanders);
console.log(nedFlanders.datosNoFamiliaSimpson());
