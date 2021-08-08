import { IDeque } from "./interfaces/deque.interface";

/**
 * Implementation for the Deque ADT.
 */
export class Deque<T> implements IDeque<T> {

  private _head: DequeNode<T> | null;
  private _tail: DequeNode<T> | null;
  private _length: number;

  /**
   * Initializes an empty Deque.
   */
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
 * @returns A reference to the current head of the list. Null if empty
 */
  get head(): DequeNode<T> | null {
    return this._head;
  }

  /**
   * @returns A reference to the current tail of the list. Null if empty
   */
  get tail(): DequeNode<T> | null {
    return this._tail;
  }

  /**
   * @returns The current size of the list
   */
  get length(): number {
    return this._length;
  }

  /**
   * Inserts a new element at the front of the deque.
   * @param element The element to be inserted.
   */
  insertFront(element: T): void {
    if (this._head != null) {
      let newItem = new DequeNode<T>(null, element, this._head);
      this._head.previous = newItem;
      this._head = newItem;
      length++;
    } else {
      this._head = new DequeNode<T>(null, element, null);
      this._tail = this._head;
      length++;
    }
  }

  /**
   * Inserts a new element at the rear of the deque.
   * @param element The element to be inserted.
   */
  insertRear(element: T): void {
    if (this._tail != null) {
      let newItem = new DequeNode<T>(this._tail, element, null);
      this._tail.next = newItem;
      this._tail = newItem;
      length++;
    } else {
      this._tail = new DequeNode<T>(null, element, null);
      this._head = this._tail;
      length++;
    }
  }

  /**
   * Removes the item at the front of the deque and returns it.
   * @returns The item removed.
   */
  removeFront(): T | null {
    if (this._head != null) {
      let placeholder = this._head.item;
      this._head = this._head.next;
      return placeholder;
    }
    return null;
  }

  /**
   * Removes the item at the rear of the deque and returns it.
   * @returns The item removed.
   */
  removeRear(): T | null {
    if (this._tail != null) {
      let placeholder = this._tail.item;
      this._tail = this._tail.next;
      return placeholder;
    }
    return null;
  }

  /**
   * Resets the currently held deque.
   */
  clear(): void {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * Search for a specific element within the deque.
   * @param element The element to search for.
   * @returns Whether the element is present in the deque.
   */
  contains(element: T): boolean {
    let runner = this._head;
    while (runner != null) {
      if (runner.item === element) {
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  /**
   * Traverses the deque, printing the item of each element.
   */
  traverse(): void {
    let runner = this._head;
    while (runner != null) {
      console.log(`Current element: ${runner.item}`);
      runner = runner.next;
    }
  }

  /**
   * Peeks at the front of the deque.
   * @returns The item currently in front of the deque. Null if empty.
   */
  peekFront(): T | null {
    if (this._head != null) {
      return this._head.item;
    }
    return null;
  }

  /**
   * Peeks at the rear of the deque.
   * @returns The item at the rear of the deque. Null if empty.
   */
  peekRear(): T | null {
    if (this._tail != null) {
      return this._tail.item;
    }
    return null;
  }
}

class DequeNode<T> {

  previous: DequeNode<T> | null;
  item: T;
  next: DequeNode<T> | null;

  constructor(prev: DequeNode<T> | null, item: T, next: DequeNode<T> | null) {
    this.previous = prev;
    this.item = item;
    this.next = next;
  }
}