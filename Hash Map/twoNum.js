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

console.log(twoSum([2, 7, 11, 15], 9))