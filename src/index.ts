import { parser } from './parser';

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question('enter an expression > ', (string: string) => {
  const stack = parser(string);
  console.log(stack);
  readline.close();
});
