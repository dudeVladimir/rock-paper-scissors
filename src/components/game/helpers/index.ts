import { GameItems, ResultVariant } from '../types';

const itemWinsScheme = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock'],
};

function whatIsResult(
  userSelectedName: GameItems,
  robotSelectedName: GameItems,
): ResultVariant {
  if (userSelectedName === robotSelectedName) return 0;

  const isUserWins =
    itemWinsScheme[userSelectedName].includes(robotSelectedName);
  const isRobotWins =
    itemWinsScheme[robotSelectedName].includes(userSelectedName);

  if (isUserWins && !isRobotWins) return 1;

  if (isRobotWins && !isUserWins) return -1;

  return 0;
}

export { whatIsResult };
