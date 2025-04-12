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


// 1.4: Rest & Spread operators

console.log("1.4: Rest & Spread operators")

// Nivell 1

// Exercici 1

const arr1 = [0, 1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];

const arr3 = [...arr1, ...arr2];

console.log("Exercici 1:");
console.log(arr3);

// Exercici 2

function suma(...num) {
    let total = 0;
    for(let i = 0; i < num.length; i++){
        total += num[i];
    }
    return total
}

console.log("Exercici 2:");
console.log(suma(1, 2, 3, 4));


// 1.5: Array transformations

console.log("1.5: Array transformations")

// Nivell 1

// Exercici 1

const arr4 = [1, 2, 3, 4];

let newArr1 = arr4.map(num => num * num);

console.log("Exercici 1:");
console.log(newArr1);

// Exercici 2

let newArr2 = arr4.filter(num => num % 2 == 0);

console.log("Exercici 2:");
console.log(newArr2);

// Exercici 3

const arr5 = [1, 10, 8, 11];

let newArr3 = arr5.find(num => num > 10);

console.log("Exercici 3:");
console.log(newArr3);

// Exercici 4

const arr6 = [13, 7, 8, 21]; // suma 49

let newArr4 = arr6.reduce((suma, num) => suma + num);

console.log("Exercici 4:");
console.log(newArr4);


// 1.6: Array loops

console.log("1.6: Array loops");

// Nivell 1

// Exercici 1

const noms = ['Anna', 'Bernat', 'Clara'];

console.log("Exercici 1:")
noms.forEach(nom => console.log(nom));

// Exercici 2

console.log("Exercici 2:")
for(let i of noms){
    console.log(i);
}

// Exercici 3

const arrNum = [1, 2, 3, 4, 5, 6]

let newArrNum = arrNum.filter(num => num % 2 == 0);

console.log("Exercici 3:")
console.log(newArrNum)


// 1.7: Promises & Async/Await

console.log("1.7: Promises & Async/Await")

// Nivell 1

console.log("Exercicis 1, 2 i 3:")

// Exercici 1

const thePromise = new Promise(resolve => {
    setTimeout(() => {
        resolve("Hola, món!");
    }, 2000);
});

// Exercici 2

thePromise.then(message => {
    console.log(message);
});

// Exercici 3

let input = "Hola"

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(input == "Hola"){
            resolve("second promise solved");
        } else {
            reject("second promise not solved");
        }        
    }, 2000);
});

secondPromise.then(message => {
    console.log(message);
}).catch(message => {
    console.log(message);
});

// Exercici 4

function myPromise(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hola, món!");
        }, 2000);
    });
}

async function isMyPromise(){
    const thePromise = await myPromise();
    console.log("Exercici 4:");
    console.log(thePromise);
}

isMyPromise();