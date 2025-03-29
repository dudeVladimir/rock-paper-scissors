<template>
  <div class="the-game">
    <div
      class="the-game__content"
      :class="{ 'result-component': resultOfGame.gameResult != null }"
    >
      <transition name="scale-zero">
        <ResultView
          v-if="isResultView"
          class="game-component"
          :result-of-game="resultOfGame"
          @reset-game="resetGame"
        />
        <GameWrapper v-else class="game-component" @select-item="selectItem" />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, inject, type Ref } from 'vue';
import { generateRandomNumber } from '@/helpers';

import { whatIsResult } from './helpers';
import { GameItem, ResultOfGame, type Result } from './types';
import GAME_CONSTANTS from './constants';

import GameWrapper from './components/GameWrapper.vue';
import ResultView from './components/ResultView.vue';

const isBonusGame = inject('isBonusGame') as Ref<boolean>;

const $emits = defineEmits<{
  setResult: [result: Result];
}>();

const resultOfGame = ref<ResultOfGame>({
  gameResult: null,
  userChoice: null,
  robotChoice: null,
});

const isResultView = computed<boolean>(() => {
  if (resultOfGame.value.gameResult === null) return false;

  return true;
});

const selectItem = (userChoice: GameItem) => {
  const usedArr = isBonusGame.value
    ? GAME_CONSTANTS.GAME_ITEMS_ARRAY
    : GAME_CONSTANTS.DEFAULT_GAME_ITEMS_ARRAY;

  const robotChoice = usedArr[generateRandomNumber(0, usedArr.length)];

  const gameResult = whatIsResult(userChoice, robotChoice);

  resultOfGame.value = {
    gameResult,
    userChoice,
    robotChoice,
  };

  $emits('setResult', gameResult);
};

const resetGame = (): void => {
  resultOfGame.value = {
    gameResult: null,
    userChoice: null,
    robotChoice: null,
  };
};

watch(isBonusGame, () => {
  resetGame();
});
</script>

<style lang="scss" scoped>
.the-game {
  &__content {
    transition: all 0.24s;
    display: flex;
    justify-content: center;
    height: 400px;
    position: relative;
    &:not(.result-component) {
      @media (max-width: 440px) {
        transform: scale(0.8);
      }
    }
    .game-component {
      position: absolute;
    }
  }
}
</style>
