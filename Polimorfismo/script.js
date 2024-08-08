class Pelicula{
    constructor(name){
        this._name = name;
    }
    
    getName(){
        return this._name;
    }
}
class Largometraje extends Pelicula{
    constructor(name,runtime){
        super(name);
        this._runtime = runtime;
    }

    getRuntime(){
        return this._runtime;
    }
    setRuntime(runtime){
        this._runtime = runtime;
    }
}

class Cortometraje extends Pelicula{
    constructor(name,runtime){
        super(name);
        this._runtime = runtime;
    }

    getRuntime(){
        return this._runtime;
    }
    setRuntime(runtime){
        this._runtime = runtime;
    }
}

class myApp{
    play(Pelicula){
        const result = `La película ${Pelicula.getName()} se está reproduciendo...tiene una duración de ${Pelicula.getRuntime()} minutos`; 
        return result;
    }
}

const largometraje = new Largometraje("Gladiador","150");
const cortometraje = new Cortometraje("historia de un oso","10");

const myApp1 = new myApp();
const playing = myApp1.play(largometraje);

console.log(playing);

const playing2 = myApp1.play(cortometraje);
console.log(playing2);
