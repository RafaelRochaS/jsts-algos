import { ILinkedList, ILinkedListNode } from './interfaces/linked-list.interface';

export class LinkedList<T> implements ILinkedList<T> {

  head: LinkedListNode<T> | null;
  tail: LinkedListNode<T> | null;
  length: Number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  clear(): void {
    this.head = null;
    this.tail = null;
  }

  insert(element: T): void {
    let newItem: LinkedListNode<T>;

    if (this.head === null && this.tail === null) {
      this.insertEmptyList(element);
    } else {
      newItem = new LinkedListNode<T>(null, element, this.head);
      if (this.head != null) {
        this.head.previous = newItem;
        newItem.next = this.head;
        this.head = newItem;
      } else {
        this.head = this.tail;
      }
    }
  }

  insertArray(arr: T[]): void {
    arr.forEach((value) => {
      this.insert(value);
    });
  }

  private insertEmptyList(element: T) {
    let newItem = new LinkedListNode<T>(null, element, null);
    this.head = newItem;
    this.tail = newItem;
  }

  append(element: T): void {
    let newItem: LinkedListNode<T>;

    if (this.head === null && this.tail === null) {
      this.insertEmptyList(element);
    } else {
      newItem = new LinkedListNode<T>(null, element, this.head);
      if (this.tail != null) {
        this.tail.next = newItem;
        newItem.previous = this.tail;
        this.tail = newItem;
      } else {
        this.tail = this.head;
      }
    }
  }

  delete(element: T): T | boolean {
    if (this.contains(element, true)) {
      return element;
    } 
    return false;
  }

  update(oldItem: T, newItem: T): void {
    this.delete(oldItem);
    this.insert(newItem);
  }

  contains(element: T, remove = false): Boolean {
    if (this.head === null) {
      return false;
    }
    let n = this.head;
    while (n != this.tail) {
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