let num = 1;
while (num <= 20) {
	console.log(`while loop: ${num * 2}`);
	num++;
}
console.log();

let num2 = 1;
do {
	console.log(`do while loop: ${num2 * 2}`);
	num2++;
}
while (num2 <= 20);


// Task 2
let balance = 500;
let withdraw = 50;

console.log();

do {
	console.log(`Balance: ${balance -= withdraw}`);
}
while (balance > 0 );


// Task 3
let countDown = 10

console.log();

while(countDown >= 0) {
	if (countDown === 0) {
		console.log("Lift-Off!!!...");
		break;
	} else {
		console.log(`Lifting in ${countDown}`);
		countDown--;
	}
}
