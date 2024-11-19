const Human = require("./class")

test("Throw exception when age is less than 0", async () => {
    let human = () => new Human("Gerard", -5, "Male");
    await expect(human).toThrowError("Age must be greater than 0");
});