const multiply = (array) => {
    let result = [];
    array.forEach((item) => {
        result.push(item * 2);
    })
    return result;
}

const sum = (array) => {
    let total = 0;
    array.forEach((element) => {
        total += element;
    })
    return total;
}

const filterNumberGreaterThanTwo = (array) => {
    return array.filter((element) => element > 2)
}

const add = (array) => {
    return array.map((item) => item + 2);
}

module.exports = {multiply, sum, filterNumberGreaterThanTwo, add};