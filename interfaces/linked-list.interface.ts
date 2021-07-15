/**
 * ADT for doubly linked list.
 */
export interface ILinkedList<T> {

  clear(): void;
  insert(element: T): void;
  append(element: T): void;
  delete(element: T): T | boolean;
  update(oldItem: T, newItem: T): void;
  contains(element: T, remove: boolean): Boolean;
  insertArray(arr: T[]): void;
}

/**
 * Interface for the node of the doubly linked list
 */
export interface ILinkedListNode<T> {

  previous: ILinkedListNode<T> | null;
  item: T;
  next: ILinkedListNode<T> | null;
}