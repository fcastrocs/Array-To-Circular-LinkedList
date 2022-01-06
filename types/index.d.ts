export interface Node {
  val: unknown;
  next: Node;
  prev: Node;
}

export default class LinkedList {
  private head;
  private current;
  private size;
  constructor(array: unknown[]);
  private arrayToList;
  /**
   * @returns next Node value
   */
  next(): unknown;
  get length(): number;
}
