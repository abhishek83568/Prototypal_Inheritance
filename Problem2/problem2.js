
Vehicle.prototype.accelerate = function (acc) {
  this.Speed += acc;
  return this.Speed;
};

Vehicle.prototype.brake = function (brake) {
  this.Speed -= brake;
  return this.Speed;
};

Vehicle.prototype.refuel = function () {
  console.log("The Vehicle is Refueling");
};

function Vehicle(brand, model, speed, fuelType) {
  this.Brand = brand;
  this.Model = model;
  this.Speed = speed;
  this.Fuel = fuelType;
}

let Vehicle1 = new Vehicle("Mahindra", "Thar", 100, "Diesel");
Vehicle1.refuel();
console.log(Vehicle1.brake(20));
console.log(Vehicle1.accelerate(50));







Car.prototype.honk=function(){
    console.log("A Honking Sound");
}


function Car(brand,model,speed,fuelType,noOfWheels){
Vehicle.call(this,brand,model,speed,fuelType);
Object.setPrototypeOf(Car.prototype,Vehicle.prototype)
this.Wheels=noOfWheels;
}

let Car1 = new Car("Tata", "Harrier", 100, "Diesel",4);
console.log(Car1);
Car1.refuel();
Car1.honk();
console.log(Car1.brake(20));




Airplane.prototype.takeOff=function(){
    console.log("The Airplane is taking off.");
}

function Airplane(brand,model,speed,fuelType,numberOfEngines,hasLandingGear)
{
  Vehicle.call(this,brand,model,speed,fuelType);
  Object.setPrototypeOf(Airplane.prototype,Vehicle.prototype);
  this.Engines=numberOfEngines;
  this.landingGear=hasLandingGear;
}
let Airplane1=new Airplane("Boeing", "737", 800, "Jet Fuel",2,"Yes")
console.log(Airplane1);
Airplane1.takeOff();
console.log(Airplane1.brake(80));
console.log(Airplane1.accelerate(100));
