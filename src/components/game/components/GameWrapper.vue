<template>
  <transition :name="isBonusGame ? 'revert-translate-x' : 'translate-x'">
    <div
      :key="isBonusGame ? 'bonus' : 'default'"
      class="game-wrapper"
      :class="{ 'bonus-game': isBonusGame }"
    >
        <ul class="game-wrapper__content">
          <img :src="imgSrc" alt="background" height="330px" />
          <li
            v-for="(button, index) in buttonsArr"
            :key="index"
            class="button-item"
            :class="`button-item_${button}`"
          >
            <GameButton :item-name="button" @click="$emits('selectItem', button)" />
          </li>
        </ul>
      </div>
  </transition>
</template>

<script setup lang="ts">
import GameButton from './GameButton.vue';
import type { GameItem } from '../types';
import { type Ref, inject, computed } from 'vue';
import GAME_CONSTANTS from '../constants';

const isBonusGame = inject('isBonusGame') as Ref;

const buttonsArr = computed<GameItem[]>(() => isBonusGame.value ? GAME_CONSTANTS.GAME_ITEMS_ARRAY : GAME_CONSTANTS.DEFAULT_GAME_ITEMS_ARRAY);

const imgSrc = computed<string>(() => {
  if (isBonusGame.value) return '/bg-pentagon.svg';

  return '/bg-triangle.svg';
});

const $emits = defineEmits<{
  selectItem: [name: GameItem];
}>();
</script>

<style lang="scss" scoped>
.game-wrapper {
  display: flex;
  justify-content: center;

  &.bonus-game {
    .game-wrapper__content {
      .button-item {
        &_scissors {
          right: 0;
          top: 25%;
        }
        &_paper {
          left: 0;
          top: 25%;
        }
        &_rock {
          top: 67%;
          left: 12%;
        }
        &_spock {
          top: 67%;
          right: 12%;
        }
        &_lizard {
          left: 35%;
          right: 50%;
        }
      }
    }
  }

  &__content {
    display: flex;
    justify-content: center;
    width: 400px;
    height: 400px;
    padding-top: 40px;
    position: relative;

    .button-item {
      top: 0;
      position: absolute;
      height: fit-content;
      &_scissors {
        right: 0;
      }
      &_paper {
        left: 0;
      }
      &_rock {
        top: 60%;
      }
    }
  }
}
</style>
