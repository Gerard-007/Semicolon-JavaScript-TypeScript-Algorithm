const filterTestScores = (array) => {
    return array.filter((element) => element > 70);
}

const increaseByFivePoints = (array) => {
    return array.map(element => element + 5);
}

const squareElements = (array) => {
    return array.map(element => element * element);
}


module.exports = {filterTestScores, increaseByFivePoints, squareElements}