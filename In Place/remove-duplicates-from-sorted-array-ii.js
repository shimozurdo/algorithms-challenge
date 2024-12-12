/**
Title: Remove Duplicates from Sorted Array II

Description:
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 */

/**
 * @param {number[]} nums
 * @return {number}
 * Big O complexity: O(n), The code iterates through the 'nums' array once, so the time complexity is O(n) where n is the number of elements in the 'nums' array.
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0)
        return 0;
    let k = 0;
    let duplicate = -Infinity;
    let count = 2;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];

        if (element === duplicate)
            count--;
        else {
            duplicate = element;
            count = 2;
        }
        if (count > 0) {
            nums[k] = element;
            k++;
        }
    }
    return k;
};

module.exports = removeDuplicates;