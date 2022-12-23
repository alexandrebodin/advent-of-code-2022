import { isPartialOverlap } from './utils';
import { Range } from './types';

const toRange = (str: string): Range => {
  const [a, b] = str.split('-');
  return [parseInt(a, 10), parseInt(b, 10)];
};

let overlaps = 0;

export default function part1(input: string) {
  const assignments = input.split('\n');

  for (const assignment of assignments) {
    const [leftAssignement, rightAssignment] = assignment.split(',');

    const leftRange = toRange(leftAssignement);
    const rightRange = toRange(rightAssignment);

    if (isPartialOverlap(leftRange, rightRange)) {
      overlaps += 1;
    }
  }

  console.log('overlaps', overlaps);
}
