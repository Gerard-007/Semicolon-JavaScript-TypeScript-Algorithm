let parameterOneTS : number = 20;
let parameterTwoTS : number = 40;

function calculateTS (param1:number, param2:number) {
    return param1 + param2;
}

const calculateTS2 = (param1:number, param2:number) => {
    return param1 + param2;
}

//Function expression
const calculateTS3 = function(param1: number, param2: number) {
    return param1 + param2;
}

//Functions in function
function calc(param1:number, param2:number){
    function add(param1: number) {
        return param1 + param2;
    }
    function multiply(param2: number) {
        return add(param1) * param2
    }
    return multiply(param2);
}

console.log(calc(20, 40));