/*
Title: Best Time to Buy and Sell Stock

Description:
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/
/**
 * @param {number[]} prices
 * @return {number}
 * Big O complexity: O(n), The code snippet contains a while loop that iterates through the 'prices' array once. Therefore, the time complexity is O(n) where n is the number of elements in the 'prices' array.	
 */
var maxProfit = function (prices) {
    let bestSell = 0;
    let start = 0;
    let end = 1;
    while (end < prices.length) {
        if (prices[start] < prices[end]) {
            const newSell = prices[end] - prices[start];
            bestSell = Math.max(bestSell, newSell);
        } else
            start = end;
        end++;
    }
    return bestSell;
};

module.exports = maxProfit;