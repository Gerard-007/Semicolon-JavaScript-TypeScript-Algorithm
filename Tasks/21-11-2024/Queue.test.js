const Queue = require('./Queue');


test("Test that i can enqueue elements to the array", () => {
    const queue = new Queue();
    queue.enqueue("test");
    expect(queue.array.length).toEqual(1);
});


test("Test that i can dequeue elements to the array", () => {
    const queue = new Queue();
    queue.enqueue("test");
    queue.enqueue("test2");
    queue.dequeue();
    expect(queue.array.length).toEqual(1);
});


test("Test that i can pick the first elements in the array", () => {
    const queue = new Queue();
    queue.enqueue("test");
    queue.enqueue("test2");
    expect(queue.front()).toEqual("test");
});

test("Test that i can pick the first elements in the array", () => {
    const queue = new Queue();
    queue.enqueue("test");
    queue.enqueue("test2");
    expect(queue.front()).toEqual("test");
});
