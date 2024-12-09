/*
Title: Valid Palindrome

Description:
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

/**
 * @param {string} s
 * @return {boolean}
 * Big O complexity: O(n), The code snippet iterates through the characters of the input string 's' and compares characters at the start and end of the 'validChars' string. The while loop runs until the 'start' index is less than the 'end' index, which means it iterates through at most half of the characters in the 'validChars' string. Therefore, the time complexity is O(n) where n is the length of the 'validChars' string.
 */
var isPalindrome = function (s) {
    const validChars = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let start = 0;
    let end = validChars.length - 1;
    while (start < end) {
        if (validChars[start] !== validChars[end])
            return false;
        start++;
        end--;
    }
    return true;
};

module.exports = isPalindrome;