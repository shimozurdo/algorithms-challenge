const findMaxAverage = require("./findMaxAverage");

describe("findMaxAverage", () => {
    test("Test Case 1: Basic input with a small array", () => {
        expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
    });

    test("Test Case 2: All elements are the same", () => {
        expect(findMaxAverage([5, 5, 5, 5, 5], 3)).toBe(5);
    });

    test("Test Case 3: Array with negative numbers", () => {
        expect(findMaxAverage([-1, -2, -3, -4, -5], 2)).toBe(-1.5);
    });

    test("Test Case 4: Larger window size than the array length", () => {
        expect(findMaxAverage([1, 2], 3)).toBe(-Infinity);
    });

    test("Test Case 5: Array with only one element", () => {
        expect(findMaxAverage([10], 1)).toBe(10);
    });
});