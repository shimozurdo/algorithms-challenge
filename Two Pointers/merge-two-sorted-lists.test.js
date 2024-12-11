const mergeTwoLists = require('./merge-two-sorted-lists');
const { arrayToListNode } = require('../utils/misc');

function listNodeToArray(list) {
    const result = [];
    while (list) {
        result.push(list.val);
        list = list.next;
    }
    return result;
}

describe("Merge Two Sorted Lists", () => {
    test("Merges two non-empty sorted lists with no overlapping values", () => {
        const list1 = arrayToListNode([1, 2, 4]);
        const list2 = arrayToListNode([5, 6, 7]);
        const result = mergeTwoLists(list1, list2);
        expect(listNodeToArray(result)).toEqual([1, 2, 4, 5, 6, 7]);
    });

    test("Merges two non-empty sorted lists with overlapping values", () => {
        const list1 = arrayToListNode([1, 2, 4]);
        const list2 = arrayToListNode([2, 3, 5]);
        const result = mergeTwoLists(list1, list2);
        expect(listNodeToArray(result)).toEqual([1, 2, 2, 3, 4, 5]);
    });

    test("Handles merging when one list is empty", () => {
        const list1 = arrayToListNode([1, 3, 5]);
        const list2 = null;
        const result = mergeTwoLists(list1, list2);
        expect(listNodeToArray(result)).toEqual([1, 3, 5]);
    });

    test("Handles merging when both lists are empty", () => {
        const list1 = null;
        const list2 = null;
        const result = mergeTwoLists(list1, list2);
        expect(listNodeToArray(result)).toEqual([]);
    });

    test("Merges lists with negative values", () => {
        const list1 = arrayToListNode([-5, -3, 0]);
        const list2 = arrayToListNode([-4, -2, 1]);
        const result = mergeTwoLists(list1, list2);
        expect(listNodeToArray(result)).toEqual([-5, -4, -3, -2, 0, 1]);
    });
});
