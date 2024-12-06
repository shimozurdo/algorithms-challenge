/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let pointStart = 0;
    let pointEnd = height.length - 1;
    let maxVolume = 0;

    while (pointStart < pointEnd) {
        const heighest = Math.min(height[pointStart], height[pointEnd])
        const volume = heighest * ((pointEnd - pointStart));
        maxVolume = Math.max(maxVolume, volume);
        if (height[pointStart] < height[pointEnd])
            pointStart++;
        else
            pointEnd--
    }
    return maxVolume;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));