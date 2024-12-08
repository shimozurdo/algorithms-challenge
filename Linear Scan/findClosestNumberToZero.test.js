const findClosestNumber = require("./findClosestNumberToZero");

describe("findClosestNumber", () => {
  
    test("should return the number closest to zero when there is a single element", () => {
      expect(findClosestNumber([5])).toBe(5);
    });
  
    test("should return the closest positive number when there are both positive and negative numbers", () => {
      expect(findClosestNumber([3, -1, -2, 2, 4])).toBe(-1);
    });
  
    test("should return the closest negative number when there are both positive and negative numbers", () => {
      expect(findClosestNumber([-3, -1, -2, 2, 4])).toBe(-1);
    });
  
    test("should return 0 when zero is included in the array", () => {
      expect(findClosestNumber([5, -5, 0, 7, 1])).toBe(0);
    });
  
    test("should return the largest number if multiple numbers have the same distance from zero", () => {
      expect(findClosestNumber([-2, 2, -1, 1])).toBe(1);
    });
  
  });
  