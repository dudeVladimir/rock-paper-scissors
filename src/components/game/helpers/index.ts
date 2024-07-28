import { GameItem, Result } from '../types';

const itemWinsScheme = {
  rock: [GameItem.Scissors, GameItem.Lizard],
  paper: [GameItem.Rock, GameItem.Spock],
  scissors: [GameItem.Paper, GameItem.Lizard],
  lizard: [GameItem.Spock, GameItem.Paper],
  spock: [GameItem.Scissors, GameItem.Rock],
};

function whatIsResult(
  userSelectedName: GameItem,
  robotSelectedName: GameItem,
): Result {
  if (userSelectedName === robotSelectedName) return Result.Draw;

  const isUserWins =
    itemWinsScheme[userSelectedName].includes(robotSelectedName);
  const isRobotWins =
    itemWinsScheme[robotSelectedName].includes(userSelectedName);

  if (isUserWins && !isRobotWins) return Result.Win;

  if (isRobotWins && !isUserWins) return Result.Loss;

  return 0;
}

export { whatIsResult };
