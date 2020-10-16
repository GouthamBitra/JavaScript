class car{

    setName(name){
        this.name=name;
    }
    startEngine(){
        console.log('Engine started for '+this.name);
    }
    stopEngine(){
        console.log('Engine has stopped for '+this.name);
    }
}

class Toyota extends car{

    topSpeed(speed){
        console.log('Top speed of' + this.name+' is '+speed);
    }
}

let mycar=new Toyota();

mycar.setName('corolla');
mycar.startEngine();
mycar.stopEngine();
mycar.topSpeed(200);