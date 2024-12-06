/**
 * @param {number[]} fruits
 * @return {number}
 */

var totalFruit = function (fruits) {
    let baskets = new Map();
    let maxFruits = -Infinity;
    for (let i = 0; i < fruits.length; i++) {
        const fruit = fruits[i];
        if (!baskets.has(fruit)) {
            if (baskets.size < 2)
                baskets.set(fruit, 1)
            else {
                baskets.clear();
                let prevValue = fruits[i - 1];
                let diffValue = -Infinity;
                let j = i - 1;
                let val = 1;
                while (j >= 0) {
                    diffValue = fruits[j];
                    if (diffValue !== prevValue)
                        break;
                    baskets.set(prevValue, val);
                    j--;
                    val++;
                }
                baskets.set(fruit, 1);
            }
        } else
            baskets.set(fruit, baskets.get(fruit) + 1)

        const sum = Array.from(baskets.values()).reduce((acc, value) => acc + value, 0);
        maxFruits = Math.max(sum, maxFruits);
    }

    return maxFruits;
};

console.log(totalFruit([0, 1, 6, 6, 4, 4, 6]));