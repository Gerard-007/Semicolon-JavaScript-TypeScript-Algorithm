function numRanges(start, end, step=1) {
    result = [];
    if (start < end) {
        for (var i = start; i < end; i+=step) {
            result.push(i);
        }
    } else {
        for (var i = start; i > end; i-=step) {
            result.push(i);
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

