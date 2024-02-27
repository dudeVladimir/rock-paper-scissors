<template>
  <div class="bonus-game">
    <ul class="bonus-game__content">
      <img src="/bg-pentagon.svg" alt="background" height="330px" />
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
.bonus-game {
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
    }
  }
}
</style>
