const sumTwoElementInListTS = (array: number[]) => {
    let result: number[] = [];
    for (let index = 0; index < array.length; index++) {
        result.push(array[index] + array[index + 1]);
    }
    return result;
}


let arrayTS: number[] = [2, 4, 1, 5, 6, 7];

console.info(sumTwoElementInListTS(arrayTS));