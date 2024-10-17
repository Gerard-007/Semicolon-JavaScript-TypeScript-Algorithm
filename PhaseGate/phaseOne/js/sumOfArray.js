const sumArray = (array) => {
    let result = 0;
    for (num of array) {
        result += num;
    }
    return result;
}

console.log(`Sum of the array: ${sumArray([1, 2, 3, 6, 2, 8, 10])}`);