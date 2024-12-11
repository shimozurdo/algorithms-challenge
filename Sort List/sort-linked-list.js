const mergeTwoLists = require("../Two Pointers/merge-two-sorted-lists");
const { ListNode } = require("../utils/misc");
/**
Title: Sort List

Description:
Given the head of a linked list, return the list after sorting it in ascending order. 
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * Big O complexity: O(n log n) The time complexity of the sortList function is O(n log n) because it uses merge sort algorithm which has a time complexity of O(n log n). The getMidList function has a time complexity of O(n) as it finds the middle of the list in a single pass. The mergeLists function has a time complexity of O(n) as it merges two sorted lists in linear time.
 */
var sortList = function (head) {
    // setup list
    if (!head || !head.next)
        return head;
    let left = head;
    // split in two list
    let right = getMidList(head);

    left = sortList(left);
    right = sortList(right);
    // merge lists
    return mergeTwoLists(left, right)
};

var getMidList = (head) => {
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    let mid = slow.next; // right 
    slow.next = null;
    return mid;
}

module.exports = sortList;