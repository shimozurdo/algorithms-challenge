const maxProfit = require("./best-time-to-buy-and-sell-stock");

describe("Best Time to Buy and Sell Stock", () => {
    test("should return the maximum profit for increasing prices", () => {
        const prices = [1, 2, 3, 4, 5];
        const result = maxProfit(prices);
        expect(result).toBe(4);
    });

    test("should return 0 for decreasing prices", () => {
        const prices = [7, 6, 5, 4, 3];
        const result = maxProfit(prices);
        expect(result).toBe(0);
    });

    test("should return the maximum profit for fluctuating prices", () => {
        const prices = [7, 1, 5, 3, 6, 4];
        const result = maxProfit(prices);
        expect(result).toBe(5);
    });

    test("should handle single-day prices array", () => {
        const prices = [5];
        const result = maxProfit(prices);
        expect(result).toBe(0);
    });

    test("should handle an empty array", () => {
        const prices = [];
        const result = maxProfit(prices);
        expect(result).toBe(0);
    });
});
