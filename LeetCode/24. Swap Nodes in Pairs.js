/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const dummy = new ListNode();
  dummy.next = head;
  let currentNode = dummy.next;
  let prevNode = dummy;
  while (currentNode !== null) {
    // currentNode starts at 1
    if (currentNode.next === null) {
      // when node number is odd
      break;
    }
    const nextPairNode = currentNode.next.next;
    // currentNode will be nextPairNode in next loop
    const nextNode = currentNode.next;
    nextNode.next = currentNode;
    currentNode.next = nextPairNode;
    prevNode.next = nextNode;
    // one cycle end
    prevNode = currentNode;
    currentNode = nextPairNode;
  }
  return dummy.next;
};
