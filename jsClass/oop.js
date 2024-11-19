let animal = {
    name: "unknown",
    color: "",
    age: 0,
    sound: () => `${this.name} makes a sound.`,
}


let cat = Object.create(animal);
cat.name = "Puss in boots"
cat.color = "black"
cat.age = 1
// console.log(cat.sound())


let newCat = Object.create(cat);
newCat.name = "blue eyed cat"
newCat.color = "blue"
newCat.age = 2
// console.log(newCat.sound())


let dog = {}
Object.setPrototypeOf(dog, animal)
dog.name = "bulldog"
dog.color = "black"
dog.age = 3;

let newDog = {};
Object.setPrototypeOf(animal, newDog);
newDog.name = "snoopDog"
newDog.color = "grey"
newDog.age = 4

let human = {
    animal,
    sex: "female",
}

function Human(name, age) {
    this.name = name
    this.age = age

    this.profile = () => `Hello i am ${this.name} and i am ${this.age} years old`
}

let personOne = new Human("Gerard", 100);
console.log(personOne);

