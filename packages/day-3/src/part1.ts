import { charToScore } from './utils';

export default function part1(input: string) {
  const sacks = input.split('\n').map((l) => l.split(''));

  let sum = 0;

  for (const sack of sacks) {
    const middleIndex = sack.length / 2;
    const left = sack.slice(0, middleIndex);
    const right = sack.slice(-middleIndex);

    const intersection = left.find((i) => right.includes(i)) ?? '';

    sum += charToScore(intersection);
  }

  console.log('part1', sum);
}
