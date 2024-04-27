`use strict`;

class Account {
  // private field(instances)
  #movements = [];
  #pin;
  // private fields
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    // protected property
    this.#pin = pin;
    console.log(`Thank you for opening an account, ${owner}`);
  }

  // Public Interface
  deposit(val) {
    this.#movements.push(val);
  }

  withdrawl(val) {
    this.deposit(-val);
  }

  // private Method
  // #approvedLoan(val) {
  _approvedLoan(val) {
    return true;
  }

  requestedLoan(val) {
    if (this.#approvedLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    } else {
      console.log(`Request Failed!`);
    }
  }
}

const person = new Account(`Arpit Mishra`, `Rupee`, 9991);
console.log(person);
// console.log(person.movements);
// console.log(person.#approvedLoan(5000));
