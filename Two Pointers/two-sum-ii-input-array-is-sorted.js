/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSumii = function (numbers, target) {
    let pointStart = 0;
    let pointEnd = numbers.length - 1;
    while (pointStart < pointEnd) {
        let sum = numbers[pointStart] + numbers[pointEnd];
        if (sum === target)
            return [pointStart + 1, pointEnd + 1]
        else if (sum < target)
            pointStart++;
        else
            pointEnd--;
    }
    return [];
};

console.log(twoSumii([2,7,11,15], 9))