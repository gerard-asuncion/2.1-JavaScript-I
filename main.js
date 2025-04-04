"use strict";

// 1.1 Arrow functions

// Ex 1

function arrowFunctions1() {
    let a = parseFloat(document.getElementById("param1").value);
    let b = parseFloat(document.getElementById("param2").value);
    let result = document.getElementById("result-1-1-1");

    const add = (a, b) => a + b;

    result.innerHTML = `
    <pre>const add = (a, b) => a + b;
    El resultat és: ${add(a, b)}.</pre>`
}

// Ex 2

function arrowFunctions2() {
    let result = document.getElementById("result-1-1-2");

    const randomize = () => Math.round(Math.random() * 100);

    let randomNumber = randomize();

    result.innerHTML = `Número: ${randomNumber}.`;
}

// Ex 3

function arrowFunctions3() {

    class Person {
        #name;
        constructor(name) {
            this.#name = name
        }
        
        get name() { return this.#name }
    
        greet = () => console.log(this.name);
    
    }
    
    const person1 = new Person("Gerard");
    
    person1.greet();

}

// Ex 4

function arrowFunctions4(){
    const arr = [1, 2, 3, 4, 5];

    const printNumbers = function(arr) {
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }
    }
    
    printNumbers(arr);
}

// Ex 5

function arrowFunctions5(){

    const timeOutFunction = () => {
        setTimeout(() => {
            console.log("arrow functions ex. 5");
        }, 3000);
    }

    timeOutFunction();
}

// 1.2 Operador ternari

// Ex 1

function ternari1(){

    let edat = parseInt(document.getElementById("userAge").value);
    let result = document.getElementById("result-1-2-1")

    function potConduir(edat) {
        let missatge = "";
        edat >= 18 ? missatge = "Pot conduir" : missatge = "No pot conduir";
        return missatge;
    }

    const condueix = potConduir(edat);

    result.innerHTML = condueix;

}

// Ex 2

function ternari2(){
    
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = document.getElementById("result-1-2-2");

    function comparar(num1, num2){
        let missatge = "";
        num1 > num2 ? missatge = "Num1 és més gran." : missatge = "Num2 és més gran.";
        return missatge;
    }

    const comparacio = comparar(num1, num2);
    result.innerHTML = comparacio;
}

// Ex 3

function ternari3(){
    const num1 = parseFloat(document.getElementById("numA").value);
    const num2 = parseFloat(document.getElementById("numB").value);
    const num3 = parseFloat(document.getElementById("numC").value);
    const result = document.getElementById("result-1-2-3");

    const trobarMaxim = function(a, b, c) {
        let maxim = ((a > b) && (a > c)) ? "Num 1" :
                    ((b > a) && (b > c)) ? "Num 2" :
                    ((c > a) && (c > b)) ? "Num 3" :
                    (a == b || a == c || b == c) ? "Els tres números han de ser diferents." :
                    "Escriu tres números."
        return maxim
    }

    const missatge = trobarMaxim(num1, num2, num3);
    result.innerHTML = missatge;

}

// Ex 4

function ternari4(){

    const arr = [11, 2, 46, 1001, 77, 4, 5, 7]

    const parOImpar = function(array) {
        const result = document.getElementById("result-1-2-4");
        let missatge = ""
        for(let i = 0; i < array.length; i++){
            (array[i] % 2 == 0) ? missatge = `El número ${array[i]} és parell.` : missatge = `El número ${array[i]} és imparell.`
            result.innerHTML += missatge + "<br>"
        }
    }

    parOImpar(arr);
}

// 1.3: Callbacks

// Ex 1

function callbacks1(){

    const num = parseFloat(document.getElementById("num3").value);

    const processar = (num, callback) => callback(num);

    function igualar(num) { return num };

    console.log(processar(num, igualar));
}

// Ex 2

function callbacks2(){

    const result = document.getElementById("result-1-3-2");

    const number1 = 4;
    const number2 = 6;

    const calculadora = (num1, num2, callback) => callback(num1, num2);

    const calcular = (num1, num2) => num1 + num2;
    
    const resultat = calculadora(number1, number2, calcular);
    result.innerHTML = `El resultat és: ${resultat}.`

}

// Ex 3

function callbacks3(){

    const result = document.getElementById("result-1-3-3");

    const esperarISaludar = (nom, callback) => {

        setTimeout(() => {
            callback(nom);
        }, 2000);

    }

    const funcioCallback = (nom) => result.innerHTML = `Hola ${nom}!`

    esperarISaludar("Aristòtil", funcioCallback);

}

// Ex 4

function callbacks4(){

    const result = document.getElementById("result-1-3-4");

    const array = [1, 2, 3, 4, 5]

    const processarElements = function (arr, callback) {
        arr.forEach(item => callback(item));
    }

    const funcioCallback = (num) => {
        result.innerHTML += `Número ${num} <br>`;
    }

    processarElements(array, funcioCallback);

}

// Ex 5

function callbacks5(){

    const result = document.getElementById("result-1-3-5");
    const string = "cadena"

    const processarCadena = function (string, callback) {
        let mayus = string.toUpperCase();
        callback(mayus);
    }

    const printFunction = (text) => result.innerHTML = text;

    processarCadena(string, printFunction);

}

// 1.4: rest & spread operators

// Ex 1

function restSpread1(){

    const result = document.getElementById("result-1-4-1");

    const arr1 = [0, 1, 2, 3, 4];
    const arr2 = [5, 6, 7, 8, 9];

    const arr3 = [...arr1, ...arr2];

    result.innerHTML = arr3.join(", ") + "."

}

// Ex 2

function restSpread2(){

    const numeros = [];
    const resultat = document.getElementById("result-1-4-2");

    for(let i = 1; i <= 4; i++){
        const numero = parseFloat(prompt(`Introdueix un número (${i}/4)`));
        if(isNaN(numero)) return alert("Ha de ser un número!");
        numeros.push(numero);
    }

    function suma(...num) {
        let total = 0;
        for(let i = 0; i < num.length; i++){
            total += num[i];
        }
        return total
    }

    const resultatSuma = suma(numeros[0], numeros[1], numeros[2], numeros[3])

    resultat.innerHTML = `La suma dels quatre números és: ${resultatSuma}.`
    
}

// Ex 3

function restSpread3(){

    const originalObject = {
        music: "reggae", 
        country: "Jamaica",
        religion: "rastafari"
    }

    let copyObject = {...originalObject}

    copyObject.music = "Jungle"

    console.log("Original object:")
    console.log(originalObject)
    console.log("Copy object:")
    console.log(copyObject)

}

// Ex 4

function restSpread4(){

    let a, b, rest;
    [a, b, ...rest] = [10, 20, 30, 40, 50]

    console.log("array:")
    console.log([10, 20, 30, 40, 50])
    console.log("Element 1:")
    console.log(a)
    console.log("Element 2:")
    console.log(b)
    console.log("Resta:")
    console.log(rest)
}

// Ex 5

function restSpread5(){
    const result = document.getElementById("result-1-4-5")
    const arr = [1, 2, 3];
    const sumFunction = (a, b, c) => a + b + c;
    const execute = sumFunction(...arr);
    result.innerHTML = execute;
}

// Ex 6

function restSpread6(){
    const object1 = {
        instrument: "sintetitzador",
        nom: "Juno 106"
    }
    const object2 = {
        origen: "Japó",
        preu: 3000
    }
    const synthObject = {...object1, ...object2}
    console.log(synthObject)
}

// 1.5: Array transformations

// Ex 1 al 4

function arrayTransformations1a4(){

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

    let newArr3 = arr5.filter(num => num > 10);

    console.log("Exercici 3:");
    console.log(newArr3);

    // Exercici 4

    const arr6 = [13, 7, 8, 21]; // suma 49

    let newArr4 = arr6.reduce((suma, num) => suma + num);

    console.log("Exercici 4:");
    console.log(newArr4);

}

// Ex 5

function arrayTransformations5(){

    const divResult = document.getElementById("result-1-5-5");

    const numbers = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9]

    const superFunction = (arr) => {return arr.filter(num => num >= 10).map(num => num * 2).reduce((ac, curr) => ac + curr, 10)};

    const result = superFunction(numbers);

    divResult.innerHTML = result;

}

// Ex 6

function arrayTransformations6(){

    const result = document.getElementById("result-1-5-6")

    const numbers = [11, 12, 13, 14]

    const everyMethod = numbers.every(num => num > 10)

    const someMethod = numbers.some(num => num > 10)

    result.innerHTML = `
    Every = ${everyMethod}
    Some = ${someMethod}
    `




}

// 1.6: Array loops

// Nivell 1, ex 1 al 3

function arrayLoops1a3(){

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

}

// 1.7: Promises & Async/Await

function promises1a2(){

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

}

// Ex 3

function promises3() {

    let input = document.getElementById("inputHola").value;
    const resultat = document.getElementById("result-1-7-3");

    const secondPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(input == "Hola"){
                resolve("second promise solved.");
            } else {
                reject("second promise not solved.");
            }        
        }, 2000);
    });

    secondPromise.then(message => {
        resultat.innerHTML = message;
    }).catch(message => {
        resultat.innerHTML = message;
    });

}

// Ex 4

function promises4(){

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
    
}


