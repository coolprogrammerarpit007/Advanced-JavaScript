`use strict`;

// challenge 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed}km/hrs `);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed}km/hrs `);
};

const car1 = new Car(`BMW`, 120);
const car2 = new Car(`Mercedes`, 95);

// car1.accelerate();
// car1.brake();
// car1.accelerate();
// car2.accelerate();
// car2.brake();

// ES6 Classes in JavaScript :-

// // Challenge solving this using class
// let a = 110;

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//   }

//   brake() {
//     this.speed -= 5;
//   }

//   // getter to get speed in US
//   get getSpeedUS() {
//     console.log(this.speed);
//     return this.speed;
//   }
//   // Setter to set speed in US
//   set speedUS(value) {
//     this.speed = value / 1.6;
//   }
// }

// const usCar = new CarCl(`Ford`, 120);
// usCar.speedUS = 120;
// usCar.getSpeedUS;
// // usCar.speedUS(120);
// console.log(usCar);

// Challege 2 ES6

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is moving at ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is moving at ${this.speed}`);
  }

  get getSppedUs() {
    console.log(this.speed);
    return this.speed / 1.6;
  }

  set speedUs(value) {
    this.speed = value * 1.6;
  }
}

const ford = new CarCl(`Ford`, 120);
// ford.speedUs = 120;
// console.log(ford.getSppedUs);
// ford.accelerate();
// console.log(ford.getSppedUs);
// ford.speedUs = 81.25;
// console.log(ford.getSppedUs);

// challenge #3

const CarCl2 = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
CarCl2.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} running at ${this.speed} km/hrs.`);
};
CarCl2.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} running at ${this.speed} km/hrs.`);
};

const EV = function (make, speed, charge) {
  CarCl2.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(CarCl2.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  return (this.charge = chargeTo);
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} running at ${this.speed} with charge of ${this.charge} %`
  );
};

const tesla = new EV(`Tesla`, 130, 89);
// console.log(tesla);
// tesla.chargeBattery(95);
// console.log(tesla);
// tesla.accelerate();
// tesla.accelerate();

// Challenge 4

class CarCl3 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    return this;
  }

  brake() {
    this.speed -= 5;
    return this;
  }
}

// Inheritance using ES6

class EVCL extends CarCl3 {
  // private fields
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.#charge -= 1;
    this.speed += 20;
    console.log(
      `${this.make} running at ${this.speed} km/hrs with ${this.charge}% charge`
    );
    console.log(this);
    return this;
  }

  // static helper() {
  //   console.log(`helper`);
  // }
}

const tesla1 = new EVCL(`Tesla`, 150, 75);
console.log(tesla1);
tesla1.accelerate();
tesla1.accelerate().accelerate().accelerate().brake();
console.log(tesla1.speed);

// tesla1.helper();
// console.log(tesla1.#charge);
// tesla1.accelerate();
// tesla1.accelerate();
// tesla1.accelerate();
// tesla1.accelerate();
// tesla1.accelerate();
// tesla1.chargeBattery(95);
// tesla1.accelerate();
// tesla1.brake();
// tesla1.brake();
// tesla1.brake();
// console.log(tesla1.speed);
