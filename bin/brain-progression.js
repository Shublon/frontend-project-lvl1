#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const brainProgress = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const randlen = getRandomInt(5, 10);
    const randDistance = getRandomInt(2, 5);
    const array = [getRandomInt(1, 5)];
    for (let j = 0; j < randlen; j += 1) {
      array.push(array[array.length - 1] + randDistance);
    }
    const arrayNow = array.slice(0);
    const randDel = getRandomInt(0, array.length);
    const deleted = arrayNow[randDel];
    arrayNow[randDel] = '..';
    console.log(`Question: ${arrayNow.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === deleted) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${deleted}'.\nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};
console.log(brainProgress());
