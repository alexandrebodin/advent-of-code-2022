const PLAYS = {
  ROCK: 'ROCK',
  PAPER: 'PAPER',
  SCISSORS: 'SCISSORS',
};

const OPPONENT_PLAY: Record<string, string> = {
  ['A']: PLAYS.ROCK,
  ['B']: PLAYS.PAPER,
  ['C']: PLAYS.SCISSORS,
};

const RECOMMENDED_PLAY: Record<string, string> = {
  ['X']: PLAYS.ROCK,
  ['Y']: PLAYS.PAPER,
  ['Z']: PLAYS.SCISSORS,
};

const PLAY_SCORES = {
  [PLAYS.ROCK]: 1,
  [PLAYS.PAPER]: 2,
  [PLAYS.SCISSORS]: 3,
};

const RESULTS: Record<string, string> = {
  LOOSE: 'LOOSE',
  DRAW: 'DRAW',
  WIN: 'WIN',
};

const WIN_LOOSE_SCORES = {
  [RESULTS.LOOSE]: 0,
  [RESULTS.DRAW]: 3,
  [RESULTS.WIN]: 6,
};

const RESULT_MAP = {
  // 1st level is opponent play
  [PLAYS.ROCK]: {
    [PLAYS.ROCK]: RESULTS.DRAW,
    [PLAYS.PAPER]: RESULTS.WIN,
    [PLAYS.SCISSORS]: RESULTS.LOOSE,
  },
  [PLAYS.PAPER]: {
    [PLAYS.PAPER]: RESULTS.DRAW,
    [PLAYS.ROCK]: RESULTS.LOOSE,
    [PLAYS.SCISSORS]: RESULTS.WIN,
  },
  [PLAYS.SCISSORS]: {
    [PLAYS.SCISSORS]: RESULTS.DRAW,
    [PLAYS.PAPER]: RESULTS.LOOSE,
    [PLAYS.ROCK]: RESULTS.WIN,
  },
};

export default function part1(input: string) {
  const games = input.split('\n');

  let totalScore = 0;

  for (const game of games) {
    const [opponentMove, recommendedMove] = game.split(' ');

    const opponentPlay = OPPONENT_PLAY[opponentMove];
    const recommendedPlay = RECOMMENDED_PLAY[recommendedMove];

    const playScore = PLAY_SCORES[recommendedPlay];
    const gameScore =
      WIN_LOOSE_SCORES[RESULT_MAP[opponentPlay][recommendedPlay]];

    totalScore += playScore + gameScore;
  }

  console.log('totalScore', totalScore);
}
