class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDescription(){
        return `make: ${this.make} model:${this.model} year:${this.year}`
    }
}

class ElectricCar extends Car{
    constructor(make, model, year, range){
        super(make, model, year);
        this.range = range
    }
    getDescription(){
        return super.getDescription() + `/nrange ${this.range}`
    }
}

const myCar = new Car ("toyota", "corolla", 2007)
console.log(myCar.getDescription())

const myElectricCar = new ElectricCar("tesla", "model S", 2019, 300)
console.log("\n" + myElectricCar.getDescription())

