let array = [4, 5, 3, 2, "Gerard", "Ibrahim", "Alhja Lobaloba", "Dami"];

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

for (let element of array) {
    console.log(element);
}

for (let index in array) {
    console.log(index);
}


let newArray = [1, 3, 4, 2, 5];


newArray.forEach(element => console.log(element + element));
