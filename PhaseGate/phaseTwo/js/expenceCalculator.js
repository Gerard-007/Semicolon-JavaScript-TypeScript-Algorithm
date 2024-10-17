const expenceCalculator = (object) => {
    let result = 0;
    for (let value in object) {
        result += object[value];
    }
    return result;
}

console.log(`Total expences: N${expenceCalculator({"groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80})}`);