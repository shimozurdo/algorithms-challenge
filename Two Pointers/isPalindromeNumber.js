/*
Title: Palindrome Number

Descriptions:
Given an integer x, return true if x is a palindrome, and false otherwise.
*/ 

/**
 * @param {number} x
 * @return {boolean}
 * Big O complexity: O(n), The code snippet has a while loop that iterates through the characters of the input string 's'. The loop runs until the left pointer 'l' is less than the right pointer 'r', which means it iterates through half of the string. Therefore, the time complexity is O(n) where n is the length of the input string.
 */
var isPalindrome = function (x) {
    let s = String(x)    
    let l = 0, r = s.length - 1;
    while(l < r){
        if(s[l] !== s[r])
            return false;
        l++;
        s--;
    }
    return true;
};

module.exports = isPalindrome;