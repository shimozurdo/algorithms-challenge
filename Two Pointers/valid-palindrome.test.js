const isPalindrome = require('./valid-palindrome');

describe('isPalindrome', () => {
    test('Handles an empty string', () => {
        const input = "";
        const output = true;
        expect(isPalindrome(input)).toBe(output);
    });

    test('Handles a single character', () => {
        const input = "a";
        const output = true;
        expect(isPalindrome(input)).toBe(output);
    });

    test('Ignores non-alphanumeric characters', () => {
        const input = "A man, a plan, a canal: Panama";
        const output = true;
        expect(isPalindrome(input)).toBe(output);
    });

    test('Detects non-palindromic strings', () => {
        const input = "hello";
        const output = false;
        expect(isPalindrome(input)).toBe(output);
    });

    test('Handles numeric palindromes', () => {
        const input = "12321";
        const output = true;
        expect(isPalindrome(input)).toBe(output);
    });
});
