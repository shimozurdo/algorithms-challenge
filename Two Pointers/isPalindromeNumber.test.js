const isPalindrome = require("./isPalindromeNumber");

describe("isPalindrome", () => {

    test("should return true for a positive palindrome number", () => {
        expect(isPalindrome(121)).toBe(true);
    });

    test("should return false for a positive non-palindrome number", () => {
        expect(isPalindrome(123)).toBe(false);
    });

    test("should return false for a negative number", () => {
        expect(isPalindrome(-121)).toBe(false);
    });

    test("should return true for a single-digit number", () => {
        expect(isPalindrome(9)).toBe(true);
    });

    test("should return true for a large palindrome number", () => {
        expect(isPalindrome(12321)).toBe(true);
    });

});
