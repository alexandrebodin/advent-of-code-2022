import { charToScore } from './utils';

export default function part2(input: string) {
  const sacks = input.split('\n').map((l) => l.split(''));

  const groups = [];
  let sum = 0;

  while (sacks.length > 0) {
    groups.push(sacks.splice(0, 3));
  }

  for (const group of groups) {
    const [a, b, c] = group;

    const intersection =
      a.filter((e) => b.includes(e)).find((e) => c.includes(e)) ?? '';

    sum += charToScore(intersection);
  }

  console.log('part2', sum);
}
