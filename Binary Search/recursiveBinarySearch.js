/*
Title: Recurcive Binary Search

Description:
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

Use recursivity
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Big O complexity: O(log n), The code snippet implements a binary search algorithm, which has a time complexity of O(log n) as it divides the search space in half with each iteration.
 */
var search = function (nums, target, start, end) {
    if (start === undefined && end === undefined) {
        start = 0;
        end = nums.length - 1;
    }
    if (start > end) {
        return -1;
    }
    const m = Math.floor((start + end) / 2);
    if (nums[m] === target)
        return m;
    else if (nums[m] < target)
        return search(nums, target, m + 1, end);
    else
        return search(nums, target, start, m - 1);
};

module.exports = search;