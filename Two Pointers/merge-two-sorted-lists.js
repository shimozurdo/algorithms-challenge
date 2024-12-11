const { ListNode } = require("../utils/misc");
/**
Title: Merge Two Sorted Lists

Description:
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/


/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * Big O complexity: O(n), The time complexity of this code is O(n) where n is the total number of nodes in both input lists. The code iterates through both lists once and merges them in sorted order.
 */
var mergeTwoLists = function (list1, list2) {
    let placeholder = new ListNode();
    let tail = placeholder;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next
    }
    if (list1)
        tail.next = list1;
    if (list2)
        tail.next = list2;

    return placeholder.next;
};

module.exports = mergeTwoLists;