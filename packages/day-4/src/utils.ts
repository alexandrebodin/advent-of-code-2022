import { Range } from './types';

export const isRangeOverlap = (rangeA: Range, rangeB: Range) => {
  return (
    (rangeA[0] >= rangeB[0] && rangeA[1] <= rangeB[1]) ||
    (rangeB[0] >= rangeA[0] && rangeB[1] <= rangeA[1])
  );
};
