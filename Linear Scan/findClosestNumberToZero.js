/*
Title: Find Closest Number to Zero

Description:
Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.
*/

/**
 * @param {number[]} nums
 * @return {number}
 * Big O complexity: O(n), The code snippet contains a single for loop that iterates through the 'nums' array of length 'n'. Therefore, the time complexity is O(n) where 'n' is the number of elements in the 'nums' array.
 */
var findClosestNumber = function (nums) {
    let closest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (Math.abs(nums[i]) < Math.abs(closest)) {
            closest = nums[i]
        } else if (Math.abs(nums[i]) === Math.abs(closest) && nums[i] > closest) {
            closest = nums[i];
        }
    }
    return closest;
};

module.exports = findClosestNumber;