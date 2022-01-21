#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomInt = () => Math.floor(Math.random() * (100 - 1)) + 1;
const getRandomArr = () => {
  const rand = Math.floor(Math.random() * 3);
  const array = ['+', '-', '*'];
  return array[rand];
};

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const n1 = getRandomInt();
    const n2 = getRandomInt();
    const sign = getRandomArr();
    console.log(`Question: ${n1} ${sign} ${n2}`);
    let resault = 0;
    if (sign === '+') {
      resault = n1 + n2;
    } else if (sign === '-') {
      resault = n1 - n2;
    } else if (sign === '*') {
      resault = n1 * n2;
    }
    const answer = readlineSync.question('Your answer: ');
    if (resault === Number(answer)) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${resault}'.\nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};
console.log(brainCalc());
