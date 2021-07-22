import { LinkedList } from "./linked-list";
import { Deque } from './deque';
import * as inquirer from 'inquirer';

enum DataStructures {
  DoublyLinkedList = 'Doubly Linked List',
  Deque = 'Deque'
}

enum Operations {
  Exit = 'Exit',
  InsertOne = 'Insert one item',
  InsertRandom = 'Insert random items',
  Clear = 'Clear data structure',
  Length = 'Get current size of data structure',
  Delete = 'Remove item from data structure',
  Update = 'Update specific item in the data structure',
  Contains = 'Search for specific item in data structure',
  Traverse = 'Traverse entire data structure'
};

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

function doublyLinkedTest(): void {
  inquirer.prompt([
    {
      type: 'list',
      name: 'operation',
      message: 'Which operation do you want to perform?',
      choices: [
        Operations.InsertOne,
        Operations.InsertRandom,
        Operations.Clear,
        Operations.Contains,
        Operations.Delete,
        Operations.Length,
        Operations.Traverse,
        Operations.Update,
        Operations.Exit
      ]
    }
  ])
    .then((answers) => {
      const linkedList = new LinkedList<number>();
      switch (answers.operation) {
        case Operations.InsertOne:
        case Operations.InsertRandom:
        case Operations.Clear:
        case Operations.Contains:
        case Operations.Delete:
        case Operations.Length:
        case Operations.Traverse:
        case Operations.Update:
        case Operations.Exit:
        default:
          console.error('Something went quite wrong. Try again please');
          process.exit(-1);
      }
    })
    .catch((err) => console.error(err));
}

function dequeTest(): void {
  inquirer.prompt([
    {
      type: 'list',
      name: 'operation',
      message: 'Which operation do you want to perform?',
      choices: [
        Operations.InsertOne,
        Operations.InsertRandom,
        Operations.Clear,
        Operations.Contains,
        Operations.Delete,
        Operations.Length,
        Operations.Traverse,
        Operations.Update,
        Operations.Exit
      ]
    }
  ])
    .then((answers) => {
      const deque = new Deque<number>();
      switch (answers.operation) {
        case Operations.InsertOne:
        case Operations.InsertRandom:
        case Operations.Clear:
        case Operations.Contains:
        case Operations.Delete:
        case Operations.Length:
        case Operations.Traverse:
        case Operations.Update:
        case Operations.Exit:
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