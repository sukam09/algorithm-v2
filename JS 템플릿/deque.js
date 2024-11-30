class Deque {
  constructor() {
    this.dat = [];
    this.head = MX;
    this.tail = MX;
  }

  pushFront(x) {
    this.dat[--this.head] = x;
  }

  pushBack(x) {
    this.dat[this.tail++] = x;
  }

  popFront() {
    this.head++;
  }

  popBack() {
    this.tail--;
  }

  front() {
    return this.dat[this.head];
  }

  back() {
    return this.dat[this.tail - 1];
  }

  empty() {
    return this.head === this.tail;
  }

  size() {
    return this.tail - this.head;
  }
}
