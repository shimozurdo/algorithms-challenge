/**
Title: Remove Duplicates from Sorted Array

Description:
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.

Return k.
 */

/**
 * @param {number[]} nums
 * @return {number}
 * Big O complexity: O(n), The code snippet iterates through the input array 'nums' once, so the time complexity is O(n) where n is the number of elements in the array.
 */
var removeDuplicates = function (nums) {
    let k = 1;
    let duplicate = nums[0];
    for (let i = k; i < nums.length; i++) {
        const element = nums[i];
        if (element != duplicate) {
            nums[k] = element;
            k++;
            duplicate = nums[i];
        }            
    }
    return k;
};

module.exports = removeDuplicates;