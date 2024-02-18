<template>
  <div class="result-view">
    <div class="result-view__content">
      <div class="choice-container choice-container_user">
        <div class="choice-container__header mb-8 header-1-s">
          Вы выбрали <br />
          &nbsp;
        </div>
        <div class="choice-container__body">
          <GameButton
            class="button-component"
            :class="{ winner: resultOfGame.gameResult === 1 }"
            disabled
            :item-name="resultOfGame.userChoice"
          />
        </div>
      </div>

      <div class="result-info">
        <div class="result-info__text mb-4 header-2-s">{{ resultText }}</div>
        <TheButton uppercase filled @click="$emits('resetGame')"
          >Играть снова</TheButton
        >
      </div>

      <div class="choice-container choice-container_robot">
        <div class="choice-container__header mb-8 header-1-s">
          Компьютер <br />
          выбрал
        </div>
        <div class="choice-container__body">
          <GameButton
            class="button-component"
            :class="{ winner: resultOfGame.gameResult === -1 }"
            disabled
            :item-name="resultOfGame.robotChoice"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import GameButton from './GameButton.vue';
import TheButton from '@/components/ui-kit/TheButton.vue';

import { ResultOfGame } from '../types';

const props = defineProps<{
  resultOfGame: ResultOfGame;
}>();

const $emits = defineEmits<{
  resetGame: [];
}>();

const resultText = computed<string>(() => {
  const { gameResult } = props.resultOfGame;

  let text = 'Что-то пошло не так';
  switch (gameResult) {
    case 1:
      text = 'Вы\nвыиграли';
      break;
    case 0:
      text = 'Ничья';
      break;
    case -1:
      text = 'Вы\nпроиграли';
      break;
    default:
      break;
  }

  return text;
});
</script>

<style lang="scss" scoped>
.result-view {
  width: 100%;
  height: 100%;
  &__content {
    height: inherit;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
    .choice-container {
      &__header {
        text-transform: uppercase;
        text-align: center;
      }
      &__body {
        display: flex;
        justify-content: center;
        .button-component {
          &.winner {
            box-shadow: 0px 0px 40px 20px rgba(255, 255, 255, 0.2);
          }
        }
      }
    }
    .result-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      &__text {
        white-space: pre-line;
        text-transform: uppercase;
        text-align: center;
      }
    }
  }
}

@media (max-width: 465px) {
  .result-view {
    width: auto;
    &__content {
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      .result-info {
        grid-row-start: 1;
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }
  }
}
</style>
