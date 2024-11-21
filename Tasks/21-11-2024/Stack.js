class Stack {
    constructor() {
        this.array = [];
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    push (element) {
        this.array[this.backIndex] = element;
        this.backIndex++;
    }

    pop () {
        const item = this.array[this.backIndex - 1]
        this.array.splice(this.backIndex - 1, 1);
        return this.array.length == 0 ? "Underflow" : item;
    }

    peek () {
        return this.array[this.backIndex - 1];
    }

    isEmpty () {
        return this.array.length == 0;
    }
}


module.exports = Stack;