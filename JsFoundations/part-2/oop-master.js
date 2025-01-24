let car = {
    make: "Toyata",
    model: "Camry",
    year: 2020,

    start: function(){
        return `${this.make} car got started in ${this,this.year}`;
    },
};

// console.log(car.start());

function Person (name,age) {
    this.name = name;
    this.age = age;
}
let Rahul = new Person("Rahul Saw", 25);
// console.log(Rahul.name);

function Animals(type){
    this.type =type;
}
Animals.prototype.speak = function(){
    return `${this.type} makes a sound`;
};

Array,prototype.manish =function(){
    return `Custom method ${this}`;
};
let myArray = [1, 2, 3];
// console.log(myArray.manish());

let myNewArray =[1, 2, 3, 4, 5, 6];
// console.log(myNewArray.manish());

//  Inheritance class in Js

class Vehicle {
    constructor(make, model){
        this.make =make;
        this.model = model;
    }
    start(){
        return `${this.model} is a car from ${this.name}`;
    }
}

class Car extends Vehicle {
    drive(){
        return`${this.make} : This is an inheritance example`;
    }
}

let myCar = new Car("Toyala", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle ("Toyata", "Corolla");
// console.log(vehOne.make);

// Encapsulation

class BankAccount {
    #balance = 0;
    
    deposite(amount){
        this.#balance += amount;
        return this.#balance;

    }
    getBanlance(){
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount()
// console.log(account.getBanlance());

// Abstraction

class CoffeeMachine {
    start() {
        // call DB
        // filter value
        return `Starting the machine...`
    }
    brewCoffee(){
        // complex calculation
        return `Brewing coffee`;
    }
    pressStartButton(){
        let msgOne = this.start();
        let msgTwo = this.brewCoffee();
        return `${msgOne} + ${msgTwo}`;
    }
}
let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

// Polymorphism

class Bird {
    fly(){
        return`Flying...`
    }
}

class Penguin extends Bird {
    fly(){
        return `Penguins can't fly`
    }
}

let bird = new Bird();
let Penguin = new Penguin();
// console.log(bird.fly());
// console.log(Penguin.fly());

// static method

class calculator {
    static add(a, b) {
        return a + b ;
    }
}

// let miniCalc = new calculator();
// console.log(miniCalc.add(2,3));

// console.log(calculator.add(2,3));

// Getters and setters

class Employee {
    #salary;

    constructor(name, salary) {
        if(salary < 0){
            throw new Error("Salary can't be in negative");
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary(){
        return `You are not allowed to see salary`;
    }

    set salary(value){
        if(value < 0 ){
            console.error("Invalid Salary");
        }else{
            this._salary = value;
        }
    }
}
let emp = new Employee ("Alica", 5000);
console.log(emp._salary);
emp.salary = 60000;

// werthjhgfds

function Person(name, age) {
  if (age <= 0) {
    throw new Error('Age must be a positive number');
  }
 
  this.name = name;
  this.age = age;
 
  this.greet = function() {
    return `Hello, my name is ${this.name}`;
  };
}
 

// Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".



class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
 
  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }
}












