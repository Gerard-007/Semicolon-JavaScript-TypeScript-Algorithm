// let array: any = [1, 2, 3, 4, 5, 6, 7, 8];
// let multiDimensionalArray: any = [[], [], []];
//
// console.log(array);
// console.log(multiDimensionalArray);

let row: number = 3
let col: number = 3

let array: any[] = Array(row);

// for(let rowCounter: number = 0; rowCounter < array.length; rowCounter++) {
//     array[rowCounter]= new Array(col);
//     if (rowCounter === (array.length - 1)) {
//         console.log(array);
//     }
// }

for(let rowCounter: number = 0; rowCounter < array.length; rowCounter++) {
    array[rowCounter]= new Array(col);
    for (let colCounter = 0; colCounter < array[rowCounter].length; colCounter++) {
        array[rowCounter][colCounter] = 2;
    }
}
console.log(array);

