const threeSum = require("./3sum");

describe("3Sum Algorithm Test Cases", () => {
    test("Case 1: Multiple unique triplets", () => {
        const nums = [-1, 0, 1, 2, -1, -4];
        const expected = [[-1, -1, 2], [-1, 0, 1]];
        expect(threeSum(nums)).toEqual(expected);
    });

    test("Case 2: No triplets found", () => {
        const nums = [1, 2, 3, 4, 5];
        const expected = [];
        expect(threeSum(nums)).toEqual(expected);
    });

    test("Case 3: All zeros", () => {
        const nums = [0, 0, 0, 0];
        const expected = [[0, 0, 0]];
        expect(threeSum(nums)).toEqual(expected);
    });

    test("Case 4: Large input with duplicates", () => {
        const nums = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 4, 6];
        const expected = [
            [-4, -2, 6],
            [-4, 0, 4],
            [-4, 1, 3],
            [-4, 2, 2],
            [-2, -2, 4],
            [-2, 0, 2],
        ];
        expect(threeSum(nums)).toEqual(expected);
    });

    test("Case 5: Negative numbers only", () => {
        const nums = [-5, -4, -3, -2, -1];
        const expected = [];
        expect(threeSum(nums)).toEqual(expected);
    });
});
