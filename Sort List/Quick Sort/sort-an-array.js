/**
Title: Sort an Array

Description:
Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 * Big O complexity: O(n log n), The code uses a recursive quicksort algorithm to sort the array. The partitioning step divides the array into two subarrays, and each recursive call works on one of the subarrays. The partitioning step takes O(n) time, and the recursion depth is O(log n) in the average case, resulting in a time complexity of O(n log n).
 */
const sortArray = function (nums, start = 0, end = nums.length - 1) {
    if (start >= end) return nums;
    let pivot = nums[end];

    let i = start;
    for (let j = i; j < end; j++) {
        const element = nums[j];
        if (element < pivot) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }

    [nums[i], nums[end]] = [nums[end], nums[i]];

    sortArray(nums, start, i - 1);
    sortArray(nums, i + 1, end);
    return nums;
};

module.exports = sortArray;