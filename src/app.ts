/**
 * Converts and arrray to a static, unchanging circular linked list.
 */

import { Node } from "../types";

export default class LinkedList {
  private head: Node = {
    val: null,
    next: null,
    prev: null,
  };

  private current: Node = this.head;
  private size = 0;

  constructor(array: unknown[]) {
    this.arrayToList(array);
  }

  private arrayToList(array: unknown[]) {
    if (array.length < 2) {
      throw new Error("array length greater than 1");
    }

    //initialize head node
    this.head.val = array[0];
    let prev = this.head;
    this.size++;

    //Add the remaining nodes
    for (let i = 1; i < array.length; i++) {
      const node: Node = {
        val: array[i],
        prev,
        next: this.head, // keep it circular.
      };
      prev.next = node;
      prev = node;
      this.size++;
    }
  }

  /**
   * @returns next Node value
   */
  public next() {
    //Get the next item
    const cur = this.current;
    //Move iterator to this next item
    this.current = this.current.next;
    return cur.val;
  }

  public get length() {
    return this.size;
  }
}
