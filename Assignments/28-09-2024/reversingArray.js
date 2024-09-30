function reverseArray(array) {
    let result = [];
    for (let i in array) {
        result.push(array.pop(i));
    }
    return result;
}


function reverseArrayInPlace(array) {
    let result = [];
    let reversedNumber;
    for (let i in array) {
        reversedNumber = array.pop(i)
        result.push(reversedNumber.reverse());
    }
    return result;
}