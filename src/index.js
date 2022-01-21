#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandom = () => 3 + 4;

const sooo = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const n = getRandom();
    console.log(`Question: ${n}`);
    // const answer = readlineSync.question('Your answer: ');
  }
  // return answer;
};
console.log(sooo());
