/*
Title: Majority Element

Description:
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 * Big O complexity: O(n), The code snippet has a single loop that iterates through the 'nums' array once, making the time complexity linear, O(n), where n is the number of elements in the 'nums' array.
 */
var majorityElement = function (nums) {
    let candidate = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0)
            candidate = nums[i];
        count += nums[i] === candidate ? 1 : -1;
    }
    return candidate;
};

module.exports = majorityElement;