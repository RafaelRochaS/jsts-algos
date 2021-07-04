export interface ILinkedList<T> {

  head: ILinkedListNode<T> | null;
  tail: ILinkedListNode<T> | null;
  length: Number;

  clear(): void;
  insert(element: T): void;
  append(element: T): void;
  delete(element: T): T | boolean;
  update(oldItem: T, newItem: T): void;
  contains(element: T, remove: boolean): Boolean;
  insertArray(arr: T[]): void;
}

export interface ILinkedListNode<T> {

  previous: ILinkedListNode<T> | null;
  item: T;
  next: ILinkedListNode<T> | null;
}