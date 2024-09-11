
function Car(year, make, model, price){
    this.year = year;
    this.make = make;
    this.model = model;
    this.price = price;
}
 // Function
Car.prototype.drive = function() {
    console.log(`${this.year} ${this.make} ${this.model} drives!`)
  }; 
  
Car.prototype.stop = function() {
    console.log(`${this.year} ${this.make} ${this.model} stops!`)
  };
  
  
// Object
  const car1 = new Car(2023, 'Tesla', 'X', 80000)
  const car2 = new Car(2022, 'BMW', 'X7', 60000)
  const car3 = new Car(2020, 'Tesla', 'Y', 27000)
  
  
 const cars = [car1, car2, car3];

  cars.forEach((car) => {
    console.log(car);
    car.drive();
    car.stop();
    console.log(`${car.year} ${car.make} ${car.model} is ${price}`)
  })

// ES6 

class Car{
    constructor(year, make, model, price){
    this.year = year;
    this.make = make;
    this.model = model;
    this.price = price;
}
drive() {
    console.log(`${this.year} ${this.make} ${this.model} drives!`)
  }; 
  
stop() {
    console.log(`${this.year} ${this.make} ${this.model} stops!`)
  };
}
  
// Object
  const car4 = new Car(2023, 'Tesla', 'X', 80000)
  const car5 = new Car(2022, 'BMW', 'X7', 60000)
  const car6 = new Car(2020, 'Tesla', 'Y', 27000)
  
  
 const cars1 = [car1, car2, car3];

  cars1.forEach((car) => {
    console.log(car);
    car.drive();
    car.stop();
    console.log(`${car.year} ${car.make} ${car.model} is ${car.price}`)
  });
 


