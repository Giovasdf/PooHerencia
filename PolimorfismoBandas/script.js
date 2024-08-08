class Banda{
    constructor(name){
        this._name = name;
    }

    getName(){
        return this._name;
    }
}

class Album extends Banda{
    constructor(name,duration){
        super(name);
        this._duration = duration;
    }
    getDuration(){
        return this._duration;
    }
    setDuration(duration){
        this._duration = duration;
    }
}
class Single extends Banda{
    constructor(name,duration){
        super(name);
        this._duration = duration;
    }
    getDuration(){
        return this._duration;
    }
    setDuration(duration){
        this._duration = duration;
    }
}

class myApp{
    play(Banda){
        const result = `Esta sonando ${Banda.getName()} que dura ${Banda.getDuration()} minutos`;
        return result;
    }
}

const album1 = new Album("hit me hard and soft","43");
const single1 = new Single("mueve el ombligo","4");

const myApp1 = new myApp();
const playing1 = myApp1.play(album1);
const playing2 = myApp1.play(single1);

console.log(playing1);
console.log(playing2);
