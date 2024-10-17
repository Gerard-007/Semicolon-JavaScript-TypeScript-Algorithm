const numberFactors = (number) => {
    let countDown = number;
    let result = 0;

    while (countDown >= 1) {
        countDown -= 1;
        result += (number * countDown);
        if (result === 1000) {
            break;
        }
    }
    return result
}
console.log(`Sum of factors ${numberFactors(20)}`);