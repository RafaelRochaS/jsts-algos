import inquirer from "inquirer";
import { LinkedList } from "../datastructures/linked-list";
import { Operations } from "../enums/operations.enum";

const MAX_TRAVERSE_LENGTH = 50;
const MAX_RANDOM_VALUE = 1_000;

let list: LinkedList<number>;

/**
 * Perform operations on the Doubly Linked List
 */
export async function doublyLinkedTest(): Promise<void> {
  if (!list) {
    list = new LinkedList<number>();
  }
  return testMenu(list);
}

async function testMenu(list: LinkedList<number>): Promise<void> {
  let breakLoop = false;
  while (true) {
    await inquirer.prompt([
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
      .then(async (answers) => {
        switch (answers.operation) {
          case Operations.InsertOne:
            await insertOne(list);
            break;
          case Operations.InsertRandom:
            await insertRandom(list);
            console.log('Done.');
            break;
          case Operations.Clear:
            list.clear();
            console.log('Done.');
            break;
          case Operations.Contains:
          case Operations.Delete:
          case Operations.Length:
            console.log(list.length);
            break;
          case Operations.Traverse:
            if (list.length > MAX_TRAVERSE_LENGTH) {
              console.log('List too big. Wont print');
            } else {
              list.traverse();
            }
            break;
          case Operations.Update:
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

async function insertOne(list: LinkedList<number>): Promise<void> {
  await inquirer.prompt({
    type: 'number',
    name: 'value',
    message: 'Type number to insert in the list: ',
    validate: (input) => validateNumber(input),
  })
    .then((answers) => {
      list.insert(answers.value);
      console.log('Inserted.')
    })
    .catch((err) => console.log(err));
}

async function insertRandom(list: LinkedList<number>): Promise<void> {
  await inquirer.prompt({
    type: 'number',
    name: 'value',
    message: 'How many items to add?',
    validate: (input) => validateNumber(input),
  })
    .then((answers) => {
      for (let index = 1; index <= answers.value; index++) {
        list.insert(Math.floor(Math.random() * MAX_RANDOM_VALUE));
      }
    })
    .catch((err) => console.log(err));
}

function validateNumber(input: number) {
  return !isNaN(input);
}