const sudentObjectIterator = (object) => {
    for (let prop in object) {
        console.log(`${prop}: ${object[prop]}`);
    }
}


sudentObjectIterator({math: 90, english: 85, science: 88});