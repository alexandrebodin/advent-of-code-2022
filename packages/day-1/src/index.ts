import fs from 'node:fs/promises';
import path from 'node:path';

function groupData(input: string) {
  const lines = input.split('\n');

  const groups: number[] = [];
  let currentIdx = 0;

  for (const line of lines) {
    if (line === '') {
      currentIdx += 1;
      continue;
    }

    groups[currentIdx] = (groups[currentIdx] ?? 0) + parseInt(line, 10);
  }
  return groups;
}

function getTop(input: string) {
  Math.max(...groupData(input));
}

function getTop3(input: string) {
  return groupData(input)
    .sort((a, b) => (a < b ? 1 : -1))
    .slice(0, 3)
    .reduce((acc, val) => acc + val, 0);
}

async function main() {
  const input = (
    await fs.readFile(path.resolve(__dirname, '../input.txt'))
  ).toString();

  getTop(input);
  getTop3(input);
}

main().catch(console.dir);
