class Queue {
    constructor() {
        this.array = [];
        this.backIndex = 0;
        this.frontIndex = 0;
    }

    enqueue(value) {
        this.array[this.backIndex] = value;
        this.backIndex++;
    }

    dequeue() {
        const element = this.array[this.frontIndex];
        this.array.splice(this.frontIndex, 1);
        this.frontIndex++;
        return element;
    }

    front() {
        return this.array[this.frontIndex];
    }

    isEmpty(){
        return this.array.length == 0;
    }
}

module.exports = Queue;