
// Task 1
let num: number = 1;
let whileNum: number = 1;
let doNum: number = 1;

for (num = 0; num <= 10; num++) {
    console.log(`for loop: ${num * 2}`);
}

console.log();

while (whileNum <= 10) {
    console.log(`for loop: ${whileNum * 2}`);
    whileNum++;
}

console.log();

do {
    console.log(`for loop: ${doNum * 2}`);
    doNum++;
}
while (doNum <= 10);


// Task 2
let balance: number = 500;
let withdraw: number = 50;

console.log();

do {
	console.error(`Balance: ${balance -= withdraw}`);
}
while (balance > 0 );


// Task 3
let countDown: number = 10

console.log();

while(countDown >= 0) {
	if (countDown === 0) {
		console.info("Lift-Off!!!...");
		break;
	} else {
		console.error(`Lifting in ${countDown}`);
		countDown--;
	}
}
