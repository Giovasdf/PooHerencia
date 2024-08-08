//Escuela
//Hogwarts
//Casas -> Gryffindor, Slytherin, Hufflepuff, Ravenclaw
//No Casas -> Dumbledore, Hagrid, Snape, Voldemort

//Beauxbatons
//Casas -> No se especifican casas en la serie, así que la usaremos para indicar su afiliación a la escuela

//Padre
class Escuela {
    constructor(nombreEscuela) {
        this.nombreEscuela = nombreEscuela; // Nombre de la Escuela
    }
}

//Hijo
class Casa extends Escuela {
    constructor(nombreEscuela, nombreCasa) {
        super(nombreEscuela);
        this.nombreCasa = nombreCasa; // Casa en Hogwarts o nombre general para otras escuelas
    }
}

//Nietos
class Estudiante extends Casa {
    constructor(nombreEscuela, nombreCasa, habilidad, nombre) {
        super(nombreEscuela, nombreCasa);
        this.habilidad = habilidad; // Habilidad mágica o rasgo
        this.nombre = nombre;
    }
    
    datosEstudiante() {
        return `Nombre: ${this.nombre} Habilidad: ${this.habilidad}
        Escuela: ${this.nombreEscuela} Nombre de la Casa: ${this.nombreCasa}`;
    }
}

class Profesor extends Casa {
    constructor(nombreEscuela, nombreCasa, rol, nombre) {
        super(nombreEscuela, nombreCasa);
        this.rol = rol; // Rol en Hogwarts (Director, Profesor, etc.)
        this.nombre = nombre;
    }

    datosProfesor() {
        return `Nombre: ${this.nombre} Rol: ${this.rol}
        Escuela: ${this.nombreEscuela} Nombre de la Casa: ${this.nombreCasa}`;
    }
}

// Instancias de ejemplo
let harryPotter = new Estudiante("Hogwarts", "Gryffindor", "Hechicero talentoso", "Harry Potter");
let dumbledore = new Profesor("Hogwarts", "No Casa", "Director de Hogwarts", "Albus Dumbledore");
let fleurDelacour = new Estudiante("Beauxbatons", "No Casa", "Hada con habilidades mágicas", "Fleur Delacour");

console.log(harryPotter);
console.log(harryPotter.datosEstudiante());

console.log(dumbledore);
console.log(dumbledore.datosProfesor());

console.log(fleurDelacour);
console.log(fleurDelacour.datosEstudiante());
