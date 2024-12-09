const rotate = require('./rotate-array');

describe("Rotate Array", () => {
    test("Rotates a small array by a small number of steps", () => {
        const nums = [1, 2, 3, 4, 5];
        const k = 2;
        rotate(nums, k);
        expect(nums).toEqual([4, 5, 1, 2, 3]);
    });

    test("Rotates an array by a number of steps equal to its length", () => {
        const nums = [1, 2, 3, 4];
        const k = 4;
        rotate(nums, k);
        expect(nums).toEqual([1, 2, 3, 4]);
    });

    test("Rotates an array by a number of steps greater than its length", () => {
        const nums = [1, 2, 3];
        const k = 5;
        rotate(nums, k);
        expect(nums).toEqual([2, 3, 1]);
    });

    test("Rotates a single-element array", () => {
        const nums = [10];
        const k = 100;
        rotate(nums, k);
        expect(nums).toEqual([10]);
    });

    test("Handles an array with duplicate elements", () => {
        const nums = [1, 1, 1, 2, 2, 2];
        const k = 3;
        rotate(nums, k);
        expect(nums).toEqual([2, 2, 2, 1, 1, 1]);
    });
});
