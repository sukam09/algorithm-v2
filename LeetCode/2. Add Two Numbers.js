/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const l3 = new ListNode();
  let p3 = l3;

  let carry = 0;
  while (l1 !== null || l2 !== null) {
    const n1 = l1 === null ? 0 : l1.val;
    const n2 = l2 === null ? 0 : l2.val;

    let sum = n1 + n2 + carry;
    carry = 0;

    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }

    // val이 sum이고 next가 새 노드인 링크드 리스트를 만들어서 기존 리스트에 삽입해야 함
    // l3은 head?
    p3.next = new ListNode(sum);
    p3 = p3.next;

    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }

  // carry가 1이 남아있으면 1 노드를 추가해줘야함
  if (carry === 1) {
    p3.next = new ListNode(1);
  }

  return l3.next;
};
