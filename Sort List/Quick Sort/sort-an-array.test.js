const sortArray = require('./sort-an-array');

describe("Sort Array Function", () => {
    test("Sorts an array with positive integers", () => {
        const nums = [5, 2, 9, 1, 5, 6];
        const result = sortArray(nums);
        expect(result).toEqual([1, 2, 5, 5, 6, 9]);
    });

    test("Sorts an array with negative integers", () => {
        const nums = [-3, -1, -7, -2, -5];
        const result = sortArray(nums);
        expect(result).toEqual([-7, -5, -3, -2, -1]);
    });

    test("Sorts an array with mixed positive and negative integers", () => {
        const nums = [3, -2, 0, 5, -1];
        const result = sortArray(nums);
        expect(result).toEqual([-2, -1, 0, 3, 5]);
    });

    test("Handles an array with duplicate elements", () => {
        const nums = [4, 2, 2, 8, 3, 3, 1];
        const result = sortArray(nums);
        expect(result).toEqual([1, 2, 2, 3, 3, 4, 8]);
    });

    test("Returns an empty array when input is empty", () => {
        const nums = [];
        const result = sortArray(nums);
        expect(result).toEqual([]);
    });
});
