const { arrayToListNode, listNodeToArray } = require("../utils/misc");
const sortList = require("./sort-linked-list");

describe("Sort Linked List", () => {
    test("Single-node list should remain the same", () => {
        const head = arrayToListNode([1]);
        const sorted = sortList(head);
        expect(listNodeToArray(sorted)).toEqual([1]);
    });

    test("Already sorted list should remain unchanged", () => {
        const head = arrayToListNode([1, 2, 3, 4]);
        const sorted = sortList(head);
        expect(listNodeToArray(sorted)).toEqual([1, 2, 3, 4]);
    });

    test("Unsorted list should be sorted in ascending order", () => {
        const head = arrayToListNode([4, 2, 1, 3]);
        const sorted = sortList(head);
        expect(listNodeToArray(sorted)).toEqual([1, 2, 3, 4]);
    });

    test("List with duplicate values should handle duplicates correctly", () => {
        const head = arrayToListNode([4, 1, 4, 3, 2]);
        const sorted = sortList(head);
        expect(listNodeToArray(sorted)).toEqual([1, 2, 3, 4, 4]);
    });

    test("List with negative numbers should handle negatives correctly", () => {
        const head = arrayToListNode([-1, 5, 3, 4, 0]);
        const sorted = sortList(head);
        expect(listNodeToArray(sorted)).toEqual([-1, 0, 3, 4, 5]);
    });
});
