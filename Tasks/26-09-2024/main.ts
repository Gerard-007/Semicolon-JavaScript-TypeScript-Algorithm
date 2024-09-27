/**
const prompt = require("prompt-sync")({sigint:true});
let inputName: string = prompt("Enter the name: ");
console.log(inputName);
*/

/**
let var1: number = 1
let var2: number = 2
let var3: number = 3

var1 = var2
var2 = var3
var3 = var1

console.log(var1 )
console.log(var2)
console.log(var3)
*/

let x: number = 12
let y: number = 32
console.log(`Task 1: ${(x + y) ** 2}\n\n`)


x /= 10
y /= 10
console.log(`Task 2 x: ${x}`)
console.log(`Task 2 y: ${y}\n\n`)


let n: number = 5
x **= n
console.log(`Task 3: ${x}\n\n`)


let z: number = 42
let a: number = 36 / (x * y * z)

x = a + 10
z = a / 10
console.log(`Task 4 a: ${a}`)
console.log(`Task 4 x: ${x}`)
console.log(`Task 4 y: ${y}`)
console.log(`Task 4 z: ${z}`)