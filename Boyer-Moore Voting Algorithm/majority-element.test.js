const majorityElement = require("./majority-element")

describe('majorityElement', () => {
    test('returns the majority element when it appears consecutively', () => {
        const nums = [3, 3, 3, 2, 2];
        expect(majorityElement(nums)).toBe(3);
    });

    test('returns the majority element when elements are scattered', () => {
        const nums = [2, 1, 2, 2, 3, 2, 4];
        expect(majorityElement(nums)).toBe(2);
    });

    test('returns the correct element when the array contains only one unique element', () => {
        const nums = [5, 5, 5, 5, 5];
        expect(majorityElement(nums)).toBe(5);
    });

    test('returns the majority element when the array contains negative numbers', () => {
        const nums = [-1, -1, -1, 0, 1, -1];
        expect(majorityElement(nums)).toBe(-1);
    });

    test('handles large arrays with a clear majority element', () => {
        const nums = Array(1000).fill(7).concat(Array(499).fill(3));
        expect(majorityElement(nums)).toBe(7);
    });
});
