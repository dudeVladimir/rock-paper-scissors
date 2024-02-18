<template>
  <div class="the-game">
    <div
      class="the-game__content"
      :class="{ 'result-component': resultOfGame.gameResult != null }"
    >
      <transition :name="animationName">
        <component
          :is="gameComponent"
          class="game-component"
          :buttons-arr="buttonsArr"
          :result-of-game="resultOfGame"
          @select-item="selectItem"
          @reset-game="resetGame"
        />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { generateRandomNumber } from '@/helpers';

import { whatIsResult } from './helpers';
import { GameItems, ResultOfGame, ResultVariant } from './types';
import GAME_CONSTANTS from './constants';

import DefaultGame from './components/DefaultGame.vue';
import BonusGame from './components/BonusGame.vue';
import ResultView from './components/ResultView.vue';

const props = defineProps<{ isBonusGame?: boolean }>();

const $emits = defineEmits<{
  setResult: [resutlt: ResultVariant];
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

const gameComponent = computed(() => {
  if (isResultView.value) return ResultView;

  return props.isBonusGame ? BonusGame : DefaultGame;
});

const animationName = computed(() => {
  if (isResultView.value) return 'result';

  return props.isBonusGame ? 'game-changer' : 'revert-game-changer';
});

const buttonsArr = computed<GameItems[]>(() => {
  if (props.isBonusGame) {
    return GAME_CONSTANTS.GAME_ITEMS_ARRAY;
  }

  const notIncludesItems = ['lizard', 'spock'];

  return GAME_CONSTANTS.GAME_ITEMS_ARRAY.filter(
    (e) => !notIncludesItems.includes(e),
  );
});

const selectItem = (userChoice: GameItems): undefined => {
  const robotChoice =
    buttonsArr.value[generateRandomNumber(0, buttonsArr.value.length)];

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

watch(
  () => props.isBonusGame,
  (): void => {
    resetGame();
  },
);
</script>

<style lang="scss" scoped>
.the-game {
  &__content {
    transition: all 0.24s;
    display: flex;
    justify-content: center;
    height: 400px;
    position: relative;
    .game-component {
      position: absolute;
    }
  }
}

@media (max-width: 440px) {
  .the-game {
    &__content {
      &:not(.result-component) {
        transform: scale(0.8);
      }
    }
  }
}

.revert-game-changer-enter-active,
.revert-game-changer-leave-active,
.game-changer-enter-active,
.game-changer-leave-active {
  transition: all 0.7s ease;
  position: absolute;
}

.revert-game-changer-leave-to,
.game-changer-enter-from {
  opacity: 0;
  transform: translateX(150%) scale(0.8);
}

.revert-game-changer-enter-to,
.revert-game-changer-leave-from,
.game-changer-enter-to,
.game-changer-leave-from {
  transform: translateX(0px);
}

.revert-game-changer-enter-from,
.game-changer-leave-to {
  opacity: 0;
  transform: translateX(-150%) scale(0.8);
}

.result-enter-active,
.result-leave-active {
  transition: all 0.5s ease;
  position: absolute;
}

.result-leave-to,
.result-enter-from {
  transform: scale(0);
  opacity: 0;
}
</style>
