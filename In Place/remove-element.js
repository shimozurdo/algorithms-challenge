/**
Title: Remove Element

Description:
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * Big O complexity: O(n), The code snippet has a single loop that iterates through the 'nums' array once, making the time complexity linear, O(n), where n is the number of elements in the 'nums' array.
 */
var removeElement = function (nums, val) {
    let k = 0;
    
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element !== val) {
            nums[k] = element;
            k++;
        }
    }
    
    return k;
};

module.exports = removeElement;