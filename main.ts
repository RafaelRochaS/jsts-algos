import { LinkedList } from "./linked-list";

function doublyLinkedListTest() {
  console.log('\nTesting Doubly Linked List ...')
  let arrLinked = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log('Instantiating...')
  const linkedList = new LinkedList<number>();
  console.log('Adding array ' + arrLinked);
  linkedList.insertArray(arrLinked);
  console.log('Finished adding, traverse');
  linkedList.traverse();
  console.log(`Is there 8? ${linkedList.contains(8)}`);
  console.log('Update 7 to 71');
  linkedList.update(7, 71);
  console.log('Finished updating, traverse');
  linkedList.traverse();
  console.log('Delete 3');
  linkedList.delete(3);
  console.log('Finished deleting, traverse');
  linkedList.traverse();
}

console.log('********************************************************');
console.log('Data Structures and Algorithms Tests and Experiments');
console.log('********************************************************');
doublyLinkedListTest();