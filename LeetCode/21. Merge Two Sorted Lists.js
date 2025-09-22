/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const head = new ListNode();
  let currentNode = head;
  let node1 = list1;
  let node2 = list2;
  while (node1 !== null || node2 !== null) {
    if (node1 === null) {
      currentNode.next = new ListNode(node2.val);
      node2 = node2.next;
    } else if (node2 === null) {
      currentNode.next = new ListNode(node1.val);
      node1 = node1.next;
    } else if (node1.val <= node2.val) {
      currentNode.next = new ListNode(node1.val);
      node1 = node1.next;
    } else {
      currentNode.next = new ListNode(node2.val);
      node2 = node2.next;
    }
    currentNode = currentNode.next;
  }
  return head.next;
};
