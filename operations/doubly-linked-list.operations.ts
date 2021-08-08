import inquirer from "inquirer";
import { LinkedList } from "../datastructures/linked-list";
import { Operations } from "../enums/operations.enum";

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
          case Operations.Clear:
          case Operations.Contains:
          case Operations.Delete:
          case Operations.Length:
          case Operations.Traverse:
            list.traverse();
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

// async function testMenu(list: LinkedList<number>): Promise<void> { // change from recursion to loop
//   await inquirer.prompt([
//     {
//       type: 'list',
//       name: 'operation',
//       message: 'Which operation do you want to perform?',
//       choices: [
//         Operations.InsertOne,
//         Operations.InsertRandom,
//         Operations.Clear,
//         Operations.Contains,
//         Operations.Delete,
//         Operations.Length,
//         Operations.Traverse,
//         Operations.Update,
//         Operations.Exit
//       ]
//     }
//   ])
//     .then(async (answers) => {
//       switch (answers.operation) {
//         case Operations.InsertOne:
//           await insertOne(list);
//           testMenu(list);
//           break;
//         case Operations.InsertRandom:
//         case Operations.Clear:
//         case Operations.Contains:
//         case Operations.Delete:
//         case Operations.Length:
//         case Operations.Traverse:
//           list.traverse();
//           testMenu(list);
//           break;
//         case Operations.Update:
//         case Operations.Exit:
//           return;
//         default:
//           console.error('Something went quite wrong. Try again please');
//           process.exit(-1);
//       }
//     })
//     .catch((err) => console.error(err));
// }

async function insertOne(list: LinkedList<number>): Promise<void> {
  await inquirer.prompt({
    type: 'number',
    name: 'value',
    message: 'Type number to insert in the list: ',
    validate: (input) => { return !isNaN(input) },
  })
    .then((answers) => {
      list.insert(answers.value);
      console.log('Inserted.')
    })
    .catch((err) => console.log(err));
}
