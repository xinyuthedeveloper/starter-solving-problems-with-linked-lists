const LinkedList = require("../lib/linkedList");

/**
 * Return the third element from the end of the linked list.
 *
 * @param {LinkedList} list
 *
 * @returns {Node} the third element from the end of the list,
 * null if list length < 3
 *
 */
function thirdFromEnd(list) {
    // return null if the list is empty
    if (!list.head) return null;

    // Initialize pointer1 to head of the list and i to 0
    // If i < 2 means that the list contains less than or equal to 3 nodes
    let pointer1 = list.head;
    let i = 0;
    // pointer1 stop at excatly the third node of the list
    while (i < 2 && pointer1.next) {
        pointer1 = pointer1.next;
        i++;
    }
    if (i < 2) return null;

    /* pointer1 keep moving starting at the third place of the list
    pointer2 is always three elements away from the pointer1, wherever 
    the next node of the pointer1 is null the iteration ends and return
    pointer2 node as the third from the end.
    */
    let pointer2 = list.head;
    while (pointer1.next) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }
    return pointer2;
}

module.exports = thirdFromEnd;
