/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let sz = 0;
  let currentNode = head;
  while (currentNode !== null) {
    sz++;
    currentNode = currentNode.next;
  }
  let targetCount = sz - n + 1;
  if (targetCount === 1) {
    return head.next;
  }
  let count = 1;
  currentNode = head;
  while (currentNode !== null) {
    if (count === targetCount - 1) {
      // next node is target node
      currentNode.next = currentNode.next.next;
      break;
    }
    currentNode = currentNode.next;
    count++;
  }
  return head;
};
