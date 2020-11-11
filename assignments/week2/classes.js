let car1 = {
    "make" : "Honda",
    "year" : 1998,
    "model": "Civic"
};

let car2 = {
    "year" : 2010,
    "model" : "Accord"
};

let car5 = {

    "year" : 20100,
    "model" : "Mustang"
};

class Car {
    constructor(make, model, year) {

        if(year > 2021) {
            console.log(" Are you sure about the year for" + make + model + "? It seems to be awefully high!");
            this.year = NaN;
        } else {
            this.year = year;
        }
        this.make = make;
        this.year = year;
        this.model = model;
        this.registeredDate = new Date(Date.now());
    }
    
    
    checkFuel() {
        console.log(`The car ${this.make} ${this.model} has ${this.currentFuelGallons} gallons of gas left in the tank.`);

    }

    refuel(gallons) {
        if (typeof gallons === "number") {
             this.currentFuelGallons = this.currentFuelGallons + gallons;
             
    } else {console.log("Refuel successful, added" + gallons + " to the tank.");
} else {
        console.log("Refueling needs a valid number!");
       }
    }   
}





let car3 = new Car("Tesla", "X", 2016);
let car4 = new Car("Chevy", "Bolt", 2016);
let car5 = new Car("Voltswagen", "Golf", 19800);

console.log(car1, car2);
console.log(car3, car4);