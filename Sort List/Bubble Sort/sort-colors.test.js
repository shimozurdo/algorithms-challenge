const sortList = require('./sort-colors');

describe('Sort Colors', () => {
    test('Already sorted list', () => {
        expect(sortList([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('Reverse sorted list', () => {
        expect(sortList([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    test('List with duplicates', () => {
        expect(sortList([4, 2, 2, 8, 5, 1, 4])).toEqual([1, 2, 2, 4, 4, 5, 8]);
    });

    test('List with negative numbers', () => {
        expect(sortList([-3, -1, -4, -2, 0])).toEqual([-4, -3, -2, -1, 0]);
    });

    test('Mixed positive and negative numbers', () => {
        expect(sortList([3, -2, -1, 5, 0, 2, -4])).toEqual([-4, -2, -1, 0, 2, 3, 5]);
    })
})
