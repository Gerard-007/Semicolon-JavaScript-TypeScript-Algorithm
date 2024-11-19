const filterTestScores = (array) => {
    return array.filter((element) => element > 70);
}

const increaseByFivePoints = (array) => {
    return array.map(element => element + 5);
}

const squareElements = (array) => {
    return array.map(element => element * element);
}

const bookDistribution = (array) => {
    let result = [];
    for (let member of array) {
        let obj = {
            name: member,
            status: "Delivered"
        };
        result.push(obj);
    }
    return result;
};

const studentPlanningSchedule = (array) => {
    return array.filter((element) => element.includes("PM"));
}

const studentExpenseCalculator = (object) => {
    let result = 0
    for (let item in object) {
        result += object[item];
    }
    return result;
}

const calculateStudentGrade = (array) => {
    let result = [];
    array.map(score => {
        if (score >= 90 && score <= 100) {
            result.push("A");
        } else if (score >= 80 && score <= 89) {
            result.push("B");
        } else if (score >= 70 && score <= 79) {
            result.push("C");
        } else if (score >= 60 && score <= 69) {
            result.push("D");
        } else if (score < 60) {
            result.push("F")
        }
    })
    return result
}

const shoppingList = (array) => {
    let result = [];
    array.filter((item) => {
        if(item.isHealthy === true) result.push(item.name);
    })
    return result;
}

const customerOrderAnalyzer = (array) => {
    let result = [];
    array.forEach((obj) => {
        let total = 0;
        obj.items.forEach((item) => {
            total += item.price;
        })
        if (total >= 100) result.push({
            id: obj.id,
            total: total,
        });
    })
    return result;
}

// discount_price = price - (price * 10% / 100)

module.exports = {
    customerOrderAnalyzer,
    shoppingList,
    calculateStudentGrade,
    studentExpenseCalculator,
    studentPlanningSchedule,
    filterTestScores,
    increaseByFivePoints,
    squareElements,
    bookDistribution
}