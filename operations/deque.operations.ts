import inquirer from "inquirer";
import { Operations } from "../enums/operations.enum";

export function dequeTest(): void {
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