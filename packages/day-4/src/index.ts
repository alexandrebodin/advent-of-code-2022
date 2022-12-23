import fs from 'node:fs/promises';
import path from 'node:path';

import part1 from './part1';
import part2 from './part2';

async function main() {
  const input = (
    await fs.readFile(path.resolve(__dirname, '../input.txt'))
  ).toString();

  part1(input);
  part2(input);
}

main().catch(console.dir);
