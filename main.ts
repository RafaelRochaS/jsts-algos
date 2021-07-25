import * as inquirer from 'inquirer';
import { DataStructures } from "./enums/data-structures.enum";
import { Operations } from "./enums/operations.enum";
import { doublyLinkedTest } from "./operations/deque.operations";
import { dequeTest } from "./operations/doubly-linked-list.operations";

function mainMenu(): void {

  inquirer.prompt([
    {
      type: 'list',
      name: 'structure',
      message: 'Which Data Structure do you want to test?',
      choices: [DataStructures.DoublyLinkedList, DataStructures.Deque, Operations.Exit]
    }
  ])
    .then((answers) => {
      switch (answers.structure) {
        case DataStructures.DoublyLinkedList:
          doublyLinkedTest();
          break;
        case DataStructures.Deque:
          dequeTest();
          break;
        case Operations.Exit:
          return;
        default:
          console.error('Something went quite wrong. Try again please');
          process.exit(-1);
      }
    })
    .catch((err) => console.error(err));
}

console.log('********************************************************');
console.log('Data Structures and Algorithms - Tests and Experiments');
console.log('********************************************************');
mainMenu();