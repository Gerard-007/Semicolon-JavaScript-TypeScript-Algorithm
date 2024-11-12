const {multiply, sum, filterNumberGreaterThanTwo, add} = require('./forEach');

test("Multiply each numbers by 2", () => {
    const array = [1, 2, 3];
    let result = multiply(array);
    let answer = [2, 4, 6];
    expect(result).toEqual(answer);
});

test("Sum all element in an array", () => {
    const array = [1, 2, 3];
    let result = sum(array);
    let answer = 6;
    expect(result).toBe(answer);
});

test("Filter numbers greater than 2", () => {
    const array = [1, 2, 3, 4, 5, 6];
    let result = filterNumberGreaterThanTwo(array);
    let answer = [3, 4, 5, 6];
    expect(result).toEqual(answer);
});

test("Add 2 to each number", () => {
    const array = [1, 2, 3, 4, 5];
    let result = add(array);
    let answer = [3, 4, 5, 6, 7];
    expect(result).toEqual(answer);
})
