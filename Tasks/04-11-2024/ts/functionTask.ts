import promptSync from 'prompt-sync';
const input = promptSync({ sigint: true });


function operator(num1:number, num2:number, operand: (a: number, b: number) => number): void {
    console.log(`Result: ${operand(num1, num2)}`);
}


let left_operand = Number(input("Enter left operand: "));
let option = input("Enter '+ or - or * or /' to perform a calculation: ");
let right_operand = Number(input("Enter right operand: "));

if (isNaN(left_operand) || isNaN(right_operand)) {
    console.log("Invalid numbers entered! please enter a number");
} else {
    switch(option) {
        case "+":
            const add = (a: number, b: number) => a + b;
            operator(left_operand, right_operand, add);
            break;
        case "-":
            const subtract = (a: number, b: number) => a - b;
            operator(left_operand, right_operand, subtract);
            break;
        case "*":
            const multiply = (a: number, b: number) => a * b;
            operator(left_operand, right_operand, multiply);
            break;
        case "/":
            const divide = (a: number, b: number) => a + b;
            operator(left_operand, right_operand, divide);
            break;
        default:
            console.log("Invalid operand selected");
    }
}

