//Universo
//Avengers
//Superheroes -> IronMan, Thor, Spiderman, Hulk, Capitan America
//No Superheroes -> Happy, Nick Fury, Ned, Mary Jane

//Padre
class Universo{
    constructor(universo){
        this.universo = universo;//Nombre Universo 
    }
}

//Hijo
class Avengers extends Universo{
    constructor(universo,nombreGrupo){
        super(universo);
        this.nombreGrupo = nombreGrupo; //Avenger 616 
    }
}

//Nietos
class Superheroes extends Avengers{
    constructor(universo,nombreGrupo,poder,nombre){
        super(universo,nombreGrupo)
        this.poder = poder;
        this.nombre = nombre;
    }
    
    datosSuperheroe(){
        return `Nombre: ${this.nombre} Poder: ${this.poder}
         Universo: ${this.universo} Nombre Grupo: ${this.nombreGrupo}`;
    }
}

class NoSuperheroes extends Avengers{
    constructor(universo,nombreGrupo,profesion,nombre){
        super(universo,nombreGrupo);
        this.profesion = profesion;
        this.nombre = nombre;

    }
    datosNoSuperheroe(){
        return `Nombre: ${this.nombre} Profesion: ${this.profesion}
         Universo: ${this.universo} Nombre Grupo: ${this.nombreGrupo}`;
    }
}

let ironMan = new Superheroes("Linea Principal", "Avengers Original", "Armadura", "Tony Stark");
let MaryJane = new NoSuperheroes("Linea Alterna","New Generations", "Actriz","Mary Jane");

console.log(ironMan);
console.log(ironMan.datosSuperheroe()); 

console.log(MaryJane);
console.log( MaryJane.datosNoSuperheroe() ); 

