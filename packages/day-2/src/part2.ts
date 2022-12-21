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

const RECO_RESULT: Record<string, string> = {
  ['X']: RESULTS.LOOSE,
  ['Y']: RESULTS.DRAW,
  ['Z']: RESULTS.WIN,
};

const WIN_LOOSE_SCORES = {
  [RESULTS.LOOSE]: 0,
  [RESULTS.DRAW]: 3,
  [RESULTS.WIN]: 6,
};

const RESULT_TO_PLAY = {
  // 1st level is opponent play
  [PLAYS.ROCK]: {
    [RESULTS.DRAW]: PLAYS.ROCK,
    [RESULTS.WIN]: PLAYS.PAPER,
    [RESULTS.LOOSE]: PLAYS.SCISSORS,
  },
  [PLAYS.PAPER]: {
    [RESULTS.DRAW]: PLAYS.PAPER,
    [RESULTS.LOOSE]: PLAYS.ROCK,
    [RESULTS.WIN]: PLAYS.SCISSORS,
  },
  [PLAYS.SCISSORS]: {
    [RESULTS.DRAW]: PLAYS.SCISSORS,
    [RESULTS.LOOSE]: PLAYS.PAPER,
    [RESULTS.WIN]: PLAYS.ROCK,
  },
};

export default function part1(input: string) {
  const games = input.split('\n');

  let totalScore = 0;

  for (const game of games) {
    const [opponentMove, resultToReach] = game.split(' ');

    const opponentPlay = OPPONENT_PLAY[opponentMove];
    const result = RECO_RESULT[resultToReach];
    const martchingPlay = RESULT_TO_PLAY[opponentPlay][result];

    const playScore = PLAY_SCORES[martchingPlay];
    const gameScore = WIN_LOOSE_SCORES[result];

    totalScore += playScore + gameScore;
  }

  console.log('totalScore', totalScore);
}
