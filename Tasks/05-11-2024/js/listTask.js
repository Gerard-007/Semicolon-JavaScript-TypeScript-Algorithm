const sumTwoElementInList = (array) => {
    let result = [];
    for (let num = 0; num < array.length; num += 2) {
        console.log(array[num]);
        result.push(array[num] + array[num + 1]);
    }
    return result;
}

let array = [2, 4, 1, 5, 6, 7];

console.error(sumTwoElementInList(array));
