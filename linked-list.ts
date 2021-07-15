import { ILinkedList, ILinkedListNode } from './interfaces/linked-list.interface';

/**
 * Implementation of the doubly linked list
 */
export class LinkedList<T> implements ILinkedList<T> {

  private _head: LinkedListNode<T> | null;
  private _tail: LinkedListNode<T> | null;
  private _length: number;

  /**
   * @returns A reference to the current head of the list. Null if empty
   */
  get head(): LinkedListNode<T> | null {
    return this._head;
  }

  /**
   * @returns A reference to the current tail of the list. Null if empty
   */
  get tail(): LinkedListNode<T> | null {
    return this._tail;
  }

  /**
   * @returns The current size of the list
   */
  get length(): number {
    return this._length;
  }

  /**
   * Initializes an empty linked list
   */
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * Resets the current list, removing all current elements
   */
  clear(): void {
    this._head = null;
    this._tail = null;
  }

  /**
   * Add an item at the beginning of the list
   * @param element The element to be added
   */
  insert(element: T): void {
    let newItem: LinkedListNode<T>;

    if (this._head === null && this._tail === null) {
      this.insertEmptyList(element);
    } else {
      newItem = new LinkedListNode<T>(null, element, this._head);
      if (this._head != null) {
        this._head.previous = newItem;
        newItem.next = this._head;
        this._head = newItem;
      } else {
        this._head = this._tail;
      }
    }
    this._length++;
  }

  /**
   * Insert an entire array
   * @param arr The array to be inserted
   */
  insertArray(arr: T[]): void {
    arr.forEach((value) => {
      this.insert(value);
    });
  }

  private insertEmptyList(element: T) {
    let newItem = new LinkedListNode<T>(null, element, null);
    this._head = newItem;
    this._tail = newItem;
  }

  /**
   * Append an element at the end of the list
   * @param element The element to be added
   */
  append(element: T): void {
    let newItem: LinkedListNode<T>;

    if (this._head === null && this._tail === null) {
      this.insertEmptyList(element);
    } else {
      newItem = new LinkedListNode<T>(null, element, this._head);
      if (this._tail != null) {
        this._tail.next = newItem;
        newItem.previous = this._tail;
        this._tail = newItem;
      } else {
        this._tail = this._head;
      }
    }
  }

  /**
   * Removes an element from the list, if the element is present
   * @param element The element to be removed
   * @returns The element removed, or false is operation failed
   */
  delete(element: T): T | boolean {
    if (this.contains(element, true)) {
      return element;
    } 
    return false;
  }

  /**
   * Changes an elements value to a different one
   * @param oldItem The item to be replaced
   * @param newItem The updated item
   */
  update(oldItem: T, newItem: T): void {
    this.delete(oldItem);
    this.insert(newItem);
  }

  /**
   * Evaluates if an element is present in the list. Optionally, removes thet item
   * @param element The element to check
   * @param remove Whether or not to remove the item if found. Defaults to false
   * @returns True if element is found, false otherwise
   */
  contains(element: T, remove = false): Boolean {
    if (this._head === null) {
      return false;
    }
    let n = this._head;
    while (n != this._tail) {
      if (n.item === element) {
        if (remove) {
          if (n.previous != null) {
            n.previous.next = n.next;
          }
          if (n.next != null) {
            n.next.previous = n.previous;
          }
        }
        return true;
      }
      if (n.next === null) {
        return false;
      }
      n = n.next;
    }
    return false;
  }
}

/**
 * Implementation of the doubly linked list node
 */
class LinkedListNode<T> implements ILinkedListNode<T> {

  previous: LinkedListNode<T> | null;
  item: T;
  next: LinkedListNode<T> | null;

  constructor(prev: LinkedListNode<T> | null, item: T, next: LinkedListNode<T> | null) {
    this.previous = prev;
    this.item = item;
    this.next = next;
  }
}