<template>
  <div class="default-game">
    <ul class="default-game__content">
      <img src="/bg-triangle.svg" alt="background" height="330px" />
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
</template>

<script setup lang="ts">
import GameButton from './GameButton.vue';
import { GameItems } from '../types';

defineProps<{
  buttonsArr: GameItems[];
}>();

const $emits = defineEmits<{
  selectItem: [name: GameItems];
}>();
</script>

<style lang="scss" scoped>
.default-game {
  display: flex;
  justify-content: center;
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
      &_lizard {
        left: 50%;
        right: 50%;
      }
    }
  }
}
</style>
