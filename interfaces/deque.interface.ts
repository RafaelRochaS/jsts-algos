/**
 * ADT for Deque: a regular queue, but items can be added and removed from both the front
 * and the rear of the queue.
 */
export interface IDeque<T> {

  insertFront(element: T): void;
  insertRear(element: T): void;
  removeFront(): T | null;
  removeRear(): T | null;
  clear(): void;
  contains(element: T): boolean;
  traverse(): void;
  peekFront(): T | null;
  peekRear(): T | null;
}