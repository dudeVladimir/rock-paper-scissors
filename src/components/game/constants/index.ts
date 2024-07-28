import { GameItem } from '../types';

const DEFAULT_GAME_ITEMS_ARRAY: GameItem[] = [
  GameItem.Rock,
  GameItem.Paper,
  GameItem.Scissors,
] as const;

const GAME_ITEMS_ARRAY: GameItem[] = [
  GameItem.Rock,
  GameItem.Paper,
  GameItem.Scissors,
  GameItem.Lizard,
  GameItem.Spock,
] as const;

export default {
  DEFAULT_GAME_ITEMS_ARRAY,
  GAME_ITEMS_ARRAY,
};
