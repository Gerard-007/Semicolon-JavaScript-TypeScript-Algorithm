class Human {
    #name;
    #age;

    constructor(name, age, sex) {
        this.#name = name;
        this.age = age;
        this.sex = sex;
    }

    set name(newName) {
        this.#name = newName;
    }

    set age(newAge) {
        if (newAge < 0) {
            throw new Error("Age must be greater than 0");
        }
        else {
            this.#age = newAge;
        }
    }

    set sex(newSex) {
        this.sex = newSex;
    }

    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get sex() {
        return this.sex;
    }

    // description(){}
    describe = () => {
        return `My name is ${this.name}, i am  ${this.age} years old`
    }
}

const personOne = new Human("Gerard", "20", "male")
console.log(personOne.describe());

class Man extends Human {
    #sex;

    constructor(name, age) {
        super(name, age);
        this.#sex = "male";
    }
}


module.exports = Human;