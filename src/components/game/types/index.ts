export enum GameItem {
  Rock = 'rock',
  Paper = 'paper',
  Scissors = 'scissors',
  Lizard = 'lizard',
  Spock = 'spock',
};

export enum Result {
  Loss = -1,
  Draw,
  Win,
};

export interface ResultOfGame {
  gameResult: Result | null;
  userChoice: GameItem | null;
  robotChoice: GameItem | null;
}
