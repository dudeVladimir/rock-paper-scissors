export type GameItems = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';

export type ResultVariant = -1 | 0 | 1;

export interface ResultOfGame {
  gameResult: ResultVariant | null;
  userChoice: GameItems | null;
  robotChoice: GameItems | null;
}
