const {customerOrderAnalyzer, shoppingList, calculateStudentGrade, studentExpenseCalculator, studentPlanningSchedule, bookDistribution, filterTestScores, increaseByFivePoints, squareElements} = require('./index');

test("Filter scores more than 70", () => {
    const array = [20, 70, 90, 80];
    let result = filterTestScores(array);
    let answer = [90, 80];
    expect(result).toEqual(answer);
});

test("Add 5 point to each score of the students", () => {
    const array = [10, 20, 30, 40];
    let result = increaseByFivePoints(array);
    let answer = [15, 25, 35, 45];
    expect(result).toEqual(answer);
});

test("Squaring elements in a list", () => {
    const array = [2, 3, 4, 5];
    let result = squareElements(array);
    let answer = [4, 9, 16, 25];
    expect(result).toEqual(answer);
});

test("Distribute books to users and update status of delivery", () => {
    const array = ["Emily", "Jack"];
    let result = bookDistribution(array);
    let answer = [
        {
            name: "Emily",
            status: "Delivered"
        },
        {
            name: "Jack",
            status: "Delivered"
        }
    ];
    expect(result).toEqual(answer);
});

test("Student planning schedule", () => {
    const array = ["11:00 AM", "1:00 PM", "3:00 PM"];
    let result = studentPlanningSchedule(array);
    let answer = ["1:00 PM", "3:00 PM"];
    expect(result).toEqual(answer);
});

test("Expense calculator", () => {
    const array = { "groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80 };
    let result = studentExpenseCalculator(array);
    let answer = 380;
    expect(result).toBe(answer);
})

test("Calculate Student grade", () => {
    const array = [95, 78, 85, 60, 40];
    let result = calculateStudentGrade(array);
    let answer = ['A', 'C', 'B', 'D', 'F'];
    expect(result).toEqual(answer);
});

test("Filter healthy items into the shopping list", () => {
    const array = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true }
    ];
    let result = shoppingList(array);
    let answer = ['Apples', 'Carrots'];
    expect(result).toEqual(answer);
});

test("Get items whose total price is more than 100", () => {
    const array =  [
        { id: 1, items: [{ price: 25, quantity: 2 }, { price: 15, quantity: 3 }] },
        { id: 2, items: [{ price: 100, quantity: 1 }, { price: 25, quantity: 2 }] },
        { id: 3, items: [{ price: 130, quantity: 4 }, { price: 20, quantity: 3 }] },
    ];
    let result = customerOrderAnalyzer(array);
    let answer = [
        { id: 2, total: 125 },
        { id: 3, total: 150 },
    ];
    expect(result).toEqual(answer);
});
