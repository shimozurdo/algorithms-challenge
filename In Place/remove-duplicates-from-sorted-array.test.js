const removeDuplicates = require("./remove-duplicates-from-sorted-array");

describe("Remove Duplicates from Sorted Array", () => {
    test("Handles an array with no duplicates", () => {
        const nums = [1, 2, 3, 4, 5];
        const k = removeDuplicates(nums);
        expect(k).toBe(5);
        expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]); 
    });

    test("Handles an array with consecutive duplicates", () => {
        const nums = [1, 1, 2, 2, 3];
        const k = removeDuplicates(nums);
        expect(k).toBe(3);
        expect(nums.slice(0, k)).toEqual([1, 2, 3]); 
    });

    test("Handles an array where all elements are the same", () => {
        const nums = [2, 2, 2, 2];
        const k = removeDuplicates(nums);
        expect(k).toBe(1);
        expect(nums.slice(0, k)).toEqual([2]); 
    });

    test("Handles an empty array", () => {
        const nums = [];
        const k = removeDuplicates(nums);
        expect(k).toBe(0);
        expect(nums.slice(0, k)).toEqual([]); 
    });

    test("Handles a large sorted array with mixed duplicates", () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const k = removeDuplicates(nums);
        expect(k).toBe(5);
        expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]); 
    });
});