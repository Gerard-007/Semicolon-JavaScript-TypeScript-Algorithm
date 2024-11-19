const {addOneToAnArray} = require('./forLoopTask');

test("Add 1 to the last element of the array and update array", () => {
    const array = [9, 9, 9, 9];
    let result = addOneToAnArray(array);
    let answer = [1, 0, 0, 0, 0];
    expect(result).toEqual(answer);
});