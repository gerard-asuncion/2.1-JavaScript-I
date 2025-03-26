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



// 1.2: Operador ternari

console.log("1.2: Operador ternari")

// Nivell 1

// Exercici 1

function potConduir(edat) {
    let missatge = "";
    edat >= 18 ? missatge = "Pots conduir" : missatge = "No pots conduir";
    return missatge;
}

console.log("Exercici 1:");
console.log(potConduir(5));
console.log(potConduir(18));

// Exercici 2

const num1 = 5;
const num2 = 10;

function comparar(num1, num2){
    let missatge = "";
    num1 > num2 ? missatge = "num1 és més gran" : missatge = "num2 és més gran";
    return missatge;
}

console.log("Exercici 2:");
console.log(comparar(num1, num2));


// 1.3: Callbacks

console.log("1.3: Callbacks")

// Nivell 1

// Exercici 1

const num = 2;

const processar = (num, callback) => callback(num);

function callback(num) { return num };

console.log("Exercici 1:")
console.log(processar(num, callback));

// Exercici 2

const num3 = 4;
const num4 = 6;

const calculadora = (num1, num2, callback) => callback(num1, num2);

const calcular = (num1, num2) => num1 + num2;

console.log("Exercici 2:")
console.log(calculadora(num3, num4, calcular));



