const maxSubArray = require('./maximum-subarray');

describe("findClosestNumber", () => {
    test('Single positive number', () => {
        expect(maxSubArray([1])).toBe(1);
    });

    test('All negative numbers', () => {
        expect(maxSubArray([-1, -2, -3, -4])).toBe(-1);
    });

    test('Mixed positive and negative numbers', () => {
        expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    });

    test('All positive numbers', () => {
        expect(maxSubArray([2, 3, 5, 7])).toBe(17);
    });

    test('Large array with zeroes', () => {
        expect(maxSubArray([0, -3, 1, 2, -1, 0, 4, -5])).toBe(6);
    });
});