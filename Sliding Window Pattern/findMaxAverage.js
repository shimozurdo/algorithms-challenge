/**
Title: Maximum Average Subarray I

Description:
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Big O complexity: O(n) The code snippet iterates through the 'nums' array once, so the time complexity is O(n), where n is the number of elements in the 'nums' array.
 */
var findMaxAverage = function (nums, k) {
    let maxAverage = -Infinity;
    let sum = 0;
    let window = 1;
    let startIndex = 0;
    for (let i = startIndex; i < nums.length; i++) {
        sum += nums[i];
        if (window === k) {
            maxAverage = Math.max(maxAverage, sum / k);
            sum -= nums[startIndex];
            startIndex++;
            window = k - 1;
        }
        window++;
    }

    return maxAverage;
};

module.exports = findMaxAverage;