/*
Title: Binary Search

Description:
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Big O complexity: O(log n), The code snippet is performing binary search on a sorted array. The while loop runs in O(log n) time complexity as it halves the search space in each iteration.
 */
var search = function (nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (nums[m] === target)
            return m;
        else if (nums[m] < target)
            l = m + 1;
        else
            r = m - 1;
    }
    return -1;
};

module.exports = search;