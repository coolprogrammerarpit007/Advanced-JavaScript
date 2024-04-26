`use strict`;

// Using Constructor function

const Person = function (firstName, birthYear) {
  // console.log(this)
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(`Age Calculator`);
  console.log(2037 - this.birthYear);
};

const person1 = new Person(`Arpit`, 1999);
// console.log(person1);
// person1.calcAge();

// this constructor function can be use to create many objects.

const array = [3, 9, 8, 7, 5, 6, , 4, 5, 3, 4, 5];
// console.log(array.__proto__);
// console.log(array.__proto__ == Array.prototype);
// console.log(array.__proto__.__proto__);

// challenge

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

car1.accelerate();
car1.brake();
car1.accelerate();
car2.accelerate();
car2.brake();
