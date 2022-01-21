#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const brainProgress = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randNum = getRandomInt(1, 100);
    const prime = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
      41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    const arrFind = prime.includes(randNum);
    let resault;
    if (!arrFind) {
      resault = 'no';
    } else {
      resault = 'yes';
    }
    console.log(`Question: ${randNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === resault) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${resault}'.\nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};
console.log(brainProgress());
