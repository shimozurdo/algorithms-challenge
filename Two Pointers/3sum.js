/**
Title: 3Sum

Description:
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 *  Big O complexity: O(n^2), The code contains nested loops, one iterating over the length of the 'nums' array and the other iterating over the remaining elements in the array. The sorting operation also contributes to the time complexity, making it O(n^2).
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let triplets = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1])
            continue;
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];

            if (sum === 0) {
                triplets.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r - 1]) r--;
                l++;
                r--;
            } else if (sum < 0) {
                l++;
            } else {
                r--;
            }
        }
    }
    return triplets;
};

module.exports = threeSum;