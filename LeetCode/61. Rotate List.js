/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  let cur = head;
  const arr = [];
  while (cur !== null) {
    arr.push(cur.val);
    cur = cur.next;
  }
  if (arr.length === 0) {
    return head;
  }
  const n = arr.length;
  const rotateCount = k % n;
  let index = (n - rotateCount) % n;
  const newList = new ListNode();
  cur = newList;
  let remain = n;
  while (remain > 0) {
    cur.val = arr[index];
    index = (index + 1) % n;
    remain--;
    if (remain === 0) {
      break;
    }
    cur.next = new ListNode();
    cur = cur.next;
  }
  return newList;
};
