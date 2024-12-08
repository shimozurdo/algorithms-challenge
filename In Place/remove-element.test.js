const removeElement = require("./remove-element");

describe("Remove Element", () => {
    test("Removes all occurrences of the value and returns the correct count", () => {
        const nums = [3, 2, 2, 3];
        const val = 3;
        const k = removeElement(nums, val);
        expect(k).toBe(2);
        expect(nums.slice(0, k)).toEqual([2, 2]);
    });

    test("Handles an array with no occurrences of the value", () => {
        const nums = [1, 2, 3, 4];
        const val = 5;
        const k = removeElement(nums, val);
        expect(k).toBe(4);
        expect(nums.slice(0, k)).toEqual([1, 2, 3, 4]);
    });

    test("Handles an array where all elements are the value to be removed", () => {
        const nums = [4, 4, 4, 4];
        const val = 4;
        const k = removeElement(nums, val);
        expect(k).toBe(0);
        expect(nums.slice(0, k)).toEqual([]);
    });

    test("Handles an array with mixed values", () => {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2];
        const val = 2;
        const k = removeElement(nums, val);
        expect(k).toBe(5);
        expect(nums.slice(0, k)).toEqual([0, 1, 3, 0, 4]);
    });

    test("Handles an empty array", () => {
        const nums = [];
        const val = 1;
        const k = removeElement(nums, val);
        expect(k).toBe(0);
        expect(nums.slice(0, k)).toEqual([]);
    });
});
