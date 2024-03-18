// //Create a basic Vehicle constructor function that initializes properties like brand, model, speed, and fuelType.

// Using the prototype, add common methods to the Vehicle object like accelerate(), brake(), and refuel().

// accelerate() should increase the speed of the vehicle.
// brake() should decrease the speed.
// refuel() should log a message indicating the vehicle is refueling.
// Now, create a Car constructor function. The Car function should inherit properties and methods from the Vehicle object. Additionally, Car should have an extra property numberOfWheels and a method honk() that logs a honking sound.

// Similarly, create an Airplane constructor function that inherits from Vehicle. It should have properties numberOfEngines and hasLandingGear and a method takeOff() that logs a message indicating the airplane is taking off.

// Show how you would create a new instance of Car and Airplane, and demonstrate invoking their methods, ensuring that both types of vehicles can still accelerate, brake, and refuel through their prototype chain.

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
