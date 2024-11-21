const Stack = require("./Stack");

test("Test that array is empty", () => {
    const stack = new Stack();
    expect(stack.array.length).toEqual(0)
});

test("Test that array contains an element", () => {
    const stack = new Stack();
    stack.push("element");
    expect(stack.array.length).toEqual(1)
});

test("Test that array contains an element", () => {
    const stack = new Stack();
    stack.push("element");
    expect(stack.array.length).toEqual(1)
});

test("Test we can remove an element from the array", () => {
    const stack = new Stack();
    stack.array.push("element1");
    stack.pop();
    expect(stack.array.length).toEqual(0);
});

test("Test we can peek on latest element in the array", () => {
    const stack = new Stack();
    stack.push("element1");
    stack.push("element2");
    stack.peek();
    expect(stack.peek()).toEqual('element2');
});


