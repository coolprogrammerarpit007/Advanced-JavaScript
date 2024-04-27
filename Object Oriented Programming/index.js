`use strict`;

// Using Constructor function

// const Person = function (firstName, birthYear) {
//   // console.log(this)
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(`Age Calculator`);
//   console.log(2037 - this.birthYear);
// };

// const person1 = new Person(`Arpit`, 1999);
// console.log(person1);
// person1.calcAge();

// this constructor function can be use to create many objects.

const array = [3, 9, 8, 7, 5, 6, , 4, 5, 3, 4, 5];
// console.log(array.__proto__);
// console.log(array.__proto__ == Array.prototype);
// console.log(array.__proto__.__proto__);

// ES6 CLASSES

// class Personcl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
// }

// const jessica = new Personcl(`Jessica`, 2002);
// console.log(jessica);
// jessica.calcAge();

// getters and setters in JavaScript

const account = {
  owner: `Jessica`,
  movements: [200, 300, 500, 600],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

// console.log(account.latest);
// account.latest = 950;
// console.log(account.movements);

// class Personcl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get Age() {
//     return 2024 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(` `)) {
//       this._fullName = name;
//     } else {
//       alert(`Enter full Name`);
//     }
//   }

//   static hey() {
//     console.log(`Hey There`);
//   }
// }

// const jessica = new Personcl(`Jessica chan`, 1995);
// console.log(jessica.hey());
// console.log(Personcl.hey());
// jessica.fullName = `John Cena`;
// console.log(jessica);

// static methods in JavaScript

// 3. object.create() -> Third way to create prototype Inheritane.

// const Personproto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
// };

// let steven = Object.create(Personproto);
// console.log(steven);
// steven.name = `Steven Stone`;
// steven.birthYear = 1997;
// console.log(steven);
// steven.calcAge();
// console.log(steven.__proto__);

// Inheritance b/w classes

// first using prootype function

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   return 2024 - this.birthYear;
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.introduce = function () {
//   console.log(
//     `Hi, My name is ${this.firstName} and I am student of ${this.course}`
//   );
// };

// // console.log(Student.__proto__);
// // const student1 = new Student(`Arpit`, 1999, `Engineering`);
// // console.log(student1);
// // console.log(student1.calcAge());
// // student1.introduce();

// For inheritance b/w ES6 classes we need only extends keyword and super keyword
