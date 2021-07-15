import { LinkedList } from "./linked-list";

function doublyLinkedListTest() {
  console.log('\nTesting Doubly Linked List ...')
  let arrLinked = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log('Instantiating...')
  const linkedList = new LinkedList<number>();
  console.log('Adding array ' + arrLinked);
  linkedList.insertArray(arrLinked);
  console.log('Finished adding');
}

console.log('********************************************************');
console.log('Data Structures and Algorithms Tests and Experiments');
console.log('********************************************************');
doublyLinkedListTest();