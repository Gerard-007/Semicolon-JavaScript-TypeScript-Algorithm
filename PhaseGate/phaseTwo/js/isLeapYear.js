const isLeapYear = (year) => {
    return year % 4 == 0 || year % 400 == 0 ? true : false
}

console.log(isLeapYear(1995));
console.log(isLeapYear(2024));