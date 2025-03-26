"use strict";

// 1.1: Arrow functions

console.log("1.1: Arrow functions")

// Nivell 1

// Ex 1

const a = 2;
const b = 3;

const add = (a, b) => a + b;

console.log("Exercici 1:");
console.log(add(a, b));

// Ex 2

const randomize = () => Math.round(Math.random() * 100);

console.log("Exercici 2:");
console.log(randomize());

// Ex 3

class Person {
    #name;
    constructor(name) {
        this.#name = name
    }
    
    get name() { return this.#name }

    greet = () => console.log(this.name);

}

const person1 = new Person("Gerard");

console.log("Exercici 3:");
person1.greet();



