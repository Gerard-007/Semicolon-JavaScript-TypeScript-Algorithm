/**
const prompt = require("prompt-sync")({sigint:true});
let inputName = prompt("Enter the name: ");
console.log(inputName);
*/

/**
let var1 = 1
let var2 = 2
let var3 = 3

var1 = var2
var2 = var3
var3 = var1

console.log(var1 )
console.log(var2)
console.log(var3)
*/

/**
let x = 12
let y = 32 
console.log(`Task 1: ${(x + y) ** 2}\n\n`)


x = x/10
y = y/10
console.log(`Task 2 x: ${x}`)
console.log(`Task 2 y: ${y}\n\n`)


let n = 5
x = x ** n
console.log(`Task 3: ${x}\n\n`)


let z = 42
let a = 36 / (x * y * z)
x = a + 10
z = a / 10
console.log(`Task 4 a: ${a}`)
console.log(`Task 4 x: ${x}`)
console.log(`Task 4 y: ${y}`)
console.log(`Task 4 z: ${z}`)
*/

/**
let age = "18."
sum = age + 10
minus = age - 10
multiply = age * 10
divide = age / 9

console.log(sum)
console.log(minus)
console.log(multiply)
console.log(divide)
*/

// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Display the person
console.log(person.name);
console.log(person.age);
console.log(person.city);

// Loop through the person
for (let x in person) {
    console.log(person[x]);
}

// Create an Array
const myArray = Object.values(person);
console.log(myArray);

for (let [prop, value] of Object.entries(person)) {
    console.log(`Property ${prop} is ${value}`);
}

// Stringify Object
let myString = JSON.stringify(person);
console.log(myString);