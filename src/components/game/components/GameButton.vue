<template>
  <button
    class="game-button"
    :class="`game-button_${itemName}`"
    :style="styleObject"
    :disabled="disabled"
  >
    <img
      class="game-button__img"
      :class="`game-button__img_${itemName}`"
      :src="`./icon-${itemName}.svg`"
      :alt="itemName ?? 'something went wrong'"
      height="67px"
      width="67px"
    />
  </button>
</template>

<script setup lang="ts">
import { computed, CSSProperties } from 'vue';
import { GameItem } from '../types';

const props = defineProps<{
  itemName: GameItem | null;
  disabled?: boolean;
}>();

const colorMap = {
  [GameItem.Scissors]: '#EC9E0E',
  [GameItem.Rock]: '#DC2E4E',
  [GameItem.Lizard]: '#81A85D',
  [GameItem.Spock]: '#FF5733',
  [GameItem.Paper]: 'th_primary',
};

const styleObject = computed(() => {
  let borderColor = 'th_primary';

  if (props.itemName) {
    const selectedColor = colorMap[props.itemName];
    if (selectedColor) borderColor = selectedColor;
  }

  const obj: CSSProperties = { borderColor };

  return obj;
});
</script>

<style lang="scss" scoped>
.game-button {
  transition: all 0.24s ease;
  position: relative;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 16px solid var(--th_primary);
  background: var(--th_primary_background);
  &__img {
    &_spock {
      position: absolute;
      left: 22px;
      top: 15px;
    }
  }
  &:hover:enabled {
    box-shadow: 0px 0px 20px 12px rgba(0, 0, 0, 0.2) inset;
  }
  &:active:enabled {
    box-shadow: 0px 0px 24px 12px rgba(0, 0, 0, 0.4) inset;
  }
}
</style>
