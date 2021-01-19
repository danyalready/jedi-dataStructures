import LinkedList from "./LinkedList.js";

export default class Queue {
  constructor () {
    this.list = new LinkedList();
  }

  enqueue (value) {
    this.list.append(value);
  }

  dequeue () {
    this.list.deleteHead();
  }

  isEmpty () {
    return !this.list.head;
  }

  toArray () {
    return this.list.toArray();
  }
}
