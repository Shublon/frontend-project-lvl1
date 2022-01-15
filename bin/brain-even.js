#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomInt = () => Math.floor(Math.random() * (20 - 1)) + 1;

const whatNum = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const n = getRandomInt();
    console.log(`Question: ${n}`);
    const answer = readlineSync.question('Your answer: ');

    if (n % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (n % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else {
      return `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};
console.log(whatNum());
