/*
Title: Maximum Subarray

Description:
Given an integer array nums, find the subarray with the largest sum, and return its sum.
*/
/**
 * @param {number[]} nums
 * @return {number}
 * Big O complexity: O(n), The code snippet uses a single loop that iterates through the 'nums' array once, making it a linear time complexity algorithm.
 */
var maxSubArray = function (nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};

module.exports = maxSubArray;