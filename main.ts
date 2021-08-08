import * as inquirer from 'inquirer';
import { DataStructures } from "./enums/data-structures.enum";
import { Operations } from "./enums/operations.enum";
import { dequeTest } from './operations/deque.operations';
import { doublyLinkedTest } from './operations/doubly-linked-list.operations';

async function mainMenu(): Promise<void> {

  while (true) {
    let breakLoop = false;
    await inquirer.prompt([
      {
        type: 'list',
        name: 'structure',
        message: 'Which Data Structure do you want to test?',
        choices: [DataStructures.DoublyLinkedList, DataStructures.Deque, Operations.Exit]
      }
    ])
      .then(async (answers) => {
        switch (answers.structure) {
          case DataStructures.DoublyLinkedList:
            await doublyLinkedTest();
            break;
          case DataStructures.Deque:
            dequeTest();
            break;
          case Operations.Exit:
            breakLoop = true;
            break;
          default:
            console.error('Something went quite wrong. Try again please');
            process.exit(-1);
        }
      })
      .catch((err) => console.error(err));
    if (breakLoop) break;
  }
}

console.log('********************************************************');
console.log('Data Structures and Algorithms - Tests and Experiments');
console.log('********************************************************');
mainMenu();