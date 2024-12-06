/*
Title: Two Sum

Description: 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Big O complexity: O(n), The code snippet uses a map to store the difference between the target and the current element. The loop iterates through the input array once, so the time complexity is O(n) where n is the number of elements in the input array.
 */
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const sum = Number(target - nums[i]);
        if (map.has(nums[i]))
            return [map.get(nums[i]), i]
        if (sum !== map.has(sum))
            map.set(sum, i)
    }
    return undefined
};

module.exports = twoSum;