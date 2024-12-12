const removeDuplicates = require("./remove-duplicates-from-sorted-array-ii");

describe("Remove Duplicates from Sorted Array II", () => {
    test("Array with no duplicates should remain unchanged", () => {
        const nums = [1, 2, 3, 4];
        const k = removeDuplicates(nums);
        expect(k).toBe(4);
        expect(nums.slice(0, k)).toEqual([1, 2, 3, 4]);
    });

    test("Array with all duplicates appearing more than twice", () => {
        const nums = [1, 1, 1, 2, 2, 2, 3, 3, 3];
        const k = removeDuplicates(nums);
        expect(k).toBe(6);
        expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3, 3]);
    });

    test("Array with some duplicates appearing exactly twice", () => {
        const nums = [1, 1, 2, 2, 2, 3];
        const k = removeDuplicates(nums);
        expect(k).toBe(5);
        expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3]);
    });

    test("Array with no elements should return zero", () => {
        const nums = [];
        const k = removeDuplicates(nums);
        expect(k).toBe(0);
        expect(nums).toEqual([]);
    });

    test("Array with a mix of unique and duplicate elements", () => {
        const nums = [0, 0, 1, 1, 1, 2, 3, 3, 3, 4, 4];
        const k = removeDuplicates(nums);
        expect(k).toBe(9);
        expect(nums.slice(0, k)).toEqual([0, 0, 1, 1, 2, 3, 3, 4, 4]);
    });
});
describe("Remove Duplicates from Sorted Array II", () => {
    test("Array with no duplicates should remain unchanged", () => {
        const nums = [1, 2, 3, 4];
        const k = removeDuplicates(nums);
        expect(k).toBe(4);
        expect(nums.slice(0, k)).toEqual([1, 2, 3, 4]);
    });

    test("Array with all duplicates appearing more than twice", () => {
        const nums = [1, 1, 1, 2, 2, 2, 3, 3, 3];
        const k = removeDuplicates(nums);
        expect(k).toBe(6);
        expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3, 3]);
    });

    test("Array with some duplicates appearing exactly twice", () => {
        const nums = [1, 1, 2, 2, 2, 3];
        const k = removeDuplicates(nums);
        expect(k).toBe(5);
        expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3]);
    });

    test("Array with no elements should return zero", () => {
        const nums = [];
        const k = removeDuplicates(nums);
        expect(k).toBe(0);
        expect(nums).toEqual([]);
    });

    test("Array with a mix of unique and duplicate elements", () => {
        const nums = [0, 0, 1, 1, 1, 2, 3, 3, 3, 4, 4];
        const k = removeDuplicates(nums);
        expect(k).toBe(9);
        expect(nums.slice(0, k)).toEqual([0, 0, 1, 1, 2, 3, 3, 4, 4]);
    });
});
