const addOneToAnArray = (array) => {
    let convertedArrayString = parseInt(array.join("")) + 1;
    let result =  convertedArrayString.toString()
    for (index in result) {
        array[index] = parseInt(result[index]);
    }
    return array;
};


module.exports = {addOneToAnArray};