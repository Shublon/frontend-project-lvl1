#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomInt = () => Math.floor(Math.random() * (100 - 1)) + 1;

const brainNOD = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    let n1 = getRandomInt();
    let n2 = getRandomInt();
    console.log(`Question: ${n1} ${n2}`);

    while (n2 !== 0) n2 = n1 % (n1 = n2);

    const answer = readlineSync.question('Your answer: ');
    if (n1 === Number(answer)) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${n1}'.\nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};
console.log(brainNOD());
