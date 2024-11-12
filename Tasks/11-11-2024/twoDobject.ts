let obj: {
    name?: string,
    population?: number,
    temp?: number,
    currency?: string,
} = {}

let row:number = 3
let col:number = 4

let array:any[] = Array(row);

for (let rowCounter:number = 0; rowCounter < array.length; rowCounter++) {
    array[rowCounter] = new Array(col);
    for (let colCounter: number = 0; colCounter < array.length; colCounter++) {
        if (rowCounter === 0 && colCounter === 0) {
            array[rowCounter][colCounter] = null;
        } else if (rowCounter === 1 && colCounter === 2) {
            array[rowCounter][colCounter] = null;
        } else if (rowCounter === 2 && colCounter === 1) {
            array[rowCounter][colCounter] = null;
        } else {
            array[rowCounter][colCounter] = obj;
        }
    }
}
console.log(array);