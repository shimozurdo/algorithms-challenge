/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let min = 0;
    let index = 0, startIndex = 0;
    let sum = 0;
    while (index < nums.length) {
        const value = nums[index];
        sum += value;
        if (sum >= target) {
            min = min === 0 ? (index - startIndex) + 1 : Math.min((index - startIndex) + 1, min);
            startIndex++;
            index = startIndex;
            sum = 0;
        } else
            index++;
    }
    return min;
};

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]))