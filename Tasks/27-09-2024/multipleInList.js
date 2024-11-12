/**
- Loop through list
- Add a varible <counter> to check for number of occurance
- Add a varible <largest> to get the largest number
- Add a varible <current> to get the current number
- 
*/


const listInput = [2, 2,  5, 5, 3, 3, 3, 4,5, 7];
const largestItem = [];

let counter;
let current;
let largest = 0;

listInput.forEach((value) => {
	current = value;
	counter = 0
	for (let i in listInput) {
		if(current === listInput[i]) {
			counter++;
		}
	}
	if (largest < counter) {
		largestItem.shift(current);
		largest = counter;
		largestItem.push(current);
	}
});
console.log(largestItem);
