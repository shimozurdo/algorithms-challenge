const twoSum = require("./twoSum");

describe("twoSum", () => {

  test("should return the indices of the two numbers that add up to the target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("should return the indices of the two numbers that add up to the target when numbers appear in reverse order", () => {
    expect(twoSum([15, 11, 7, 2], 9)).toEqual([2, 3]);
  });

  test("should return undefined if no two numbers add up to the target", () => {
    expect(twoSum([1, 2, 3, 4, 5], 10)).toBeUndefined();
  });

  test("should handle negative numbers correctly", () => {
    expect(twoSum([-3, 4, 5, 1], 2)).toEqual([0, 2]);
  });

  test("should handle duplicates in the array and find the correct pair", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

});
