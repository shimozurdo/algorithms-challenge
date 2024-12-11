/**
Title: Sort Colors

Description:
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Big O complexity: O(n^2)	The code snippet uses a nested loop structure where the outer loop iterates through the array once and the inner loop iterates through the array multiple times. This results in a quadratic time complexity of O(n^2) where n is the number of elements in the input array.
 */
var sortColors = function (nums) {
    if (nums.length <= 1)
        return nums;
    let k = 0;

    for (let index = 0; index < nums.length - k;) {
        const element1 = nums[index];
        const element2 = nums[index + 1];
        if (element1 > element2) {
            nums[index] = element2
            nums[index + 1] = element1
        }
        index++
        if (index === (nums.length - 1) - k) {
            k++;
            index = 0;
        }
    }
    return nums;
};

module.exports = sortColors;
