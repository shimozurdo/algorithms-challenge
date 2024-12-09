/*
Title: Rotate Array

Description:
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * Big O complexity: O(n), The code consists of three separate loops, each iterating through the entire 'nums' array once. Therefore, the overall time complexity is O(n), where n is the number of elements in the 'nums' array.
 */
var rotate = function (nums, k) {
    k = k % nums.length;
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        const startNum = nums[start];
        const endNum = nums[end];
        nums[start] = endNum;
        nums[end] = startNum;
        end--;
        start++;
    }
    start = 0;
    end = k - 1;
    while (start < end) {
        const startNum = nums[start];
        const endNum = nums[end];
        nums[start] = endNum;
        nums[end] = startNum;
        end--;
        start++;
    }
    start = k;
    end = nums.length - 1;
    while (start < end) {
        const startNum = nums[start];
        const endNum = nums[end];
        nums[start] = endNum;
        nums[end] = startNum;
        end--;
        start++;
    }
    return nums;
};

module.exports = rotate;