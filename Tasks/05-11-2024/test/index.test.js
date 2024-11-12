const {multiply, square, evenNumber} = require("./index.js");

// test("multiply two numbers", () => {
//     //expect(multiply(2, 3)).toBe(6)
//     //Arrange
//     let firstNumber = 4;
//     const secondNumber = 5;
//     //Act
//     let result = multiply(firstNumber, secondNumber)
//     //Assert
//     expect(result).toBe(20)
// })

test("multiply two numbers", () => {
    expect(multiply(4, 5)).toBe(20);
});


test("square a number", () => {
    expect(square(4)).toBe(16);
});


test("test for even number", () => {
    expect(evenNumber([1, 2, 3, 4])).toEqual([2, 4]);
});