const vowelCounter = (userInput) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0
    for (let v of vowels) {
        for (let s of userInput.toLowerCase()) {
            if (v === s) {
                counter += 1;
            }
        }
    }
    return counter;
}
console.log(`Vowels Counted ${vowelCounter("Hello World")}`);