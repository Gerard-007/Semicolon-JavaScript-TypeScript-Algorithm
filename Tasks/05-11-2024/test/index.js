const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}


const square = (number) => {
    return number * number;
}


const evenNumber = (array) => {
    let result = [];
    for (i in array) {
        if(i % 2 === 0) {
            result.push(i)
        }
    }
    return result;
}

module.exports = {multiply, square, evenNumber};