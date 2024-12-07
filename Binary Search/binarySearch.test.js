const search = require("./binarySearch");

describe("Binary Search - search function", () => {
  
    test("should return the index of the target in the array", () => {
      expect(search([1, 2, 3, 4, 5, 6], 4)).toBe(3);
    });
  
    test("should return -1 if the target is not in the array", () => {
      expect(search([1, 3, 5, 7, 9], 2)).toBe(-1);
    });
  
    test("should handle arrays with one element where the target is present", () => {
      expect(search([5], 5)).toBe(0);
    });
  
    test("should handle arrays with one element where the target is absent", () => {
      expect(search([8], 2)).toBe(-1);
    });
  
    test("should return the index of the target when it is the last element in the array", () => {
      expect(search([1, 2, 3, 4, 5, 6], 6)).toBe(5);
    });
  
  });
  