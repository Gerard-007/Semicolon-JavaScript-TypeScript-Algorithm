function numRanges(start, end, step=1) {
    result = [];
    if (start < end) {
        for (let i = start; i < end; i+=step) {
            result.push(i);
        }
    } else {
        for (let j = start; j > end; j-=step) {
            result.push(j);
        }
    }
    return result;
}


function sumArray(array) {
    let sumArray = 0;
    for(let num in array) {
        sumArray += num;
    }
    return sumArray;
}

