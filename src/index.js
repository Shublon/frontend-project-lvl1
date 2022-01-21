#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandom = () => 

const --- = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const n = getRandomInt();
    console.log(`Question: ${n}`);
    const answer = readlineSync.question('Your answer: ');

};
console.log(---());