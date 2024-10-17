const person = {fname:"John", lname:"Doe", age:25};

const objectPropCounter = (object) => {
    let counter = 0;
    for (let x in object) {
        counter++;
    }
    return counter;
}

console.log(objectPropCounter({name: "Gerard", age: 1000, city:"Gmx"}));