const {filterTestScores, increaseByFivePoints, squareElements} = require('./index');

test("Filter scores more than 70", () => {
    const array = [20, 70, 90, 80];
    let result = filterTestScores(array);
    let answer = [90, 80];
    expect(result).toEqual(answer);
});

test("Add 5 point to each score of the students", () => {
    const array = [10, 20, 30, 40];
    let result = increaseByFivePoints(array);
    let answer = [15, 25, 35, 45];
    expect(result).toEqual(answer);
});

test("Squaring elements in a list", () => {
    const array = [2, 3, 4, 5];
    let result = squareElements(array);
    let answer = [4, 9, 16, 25];
    expect(result).toEqual(answer);
});
