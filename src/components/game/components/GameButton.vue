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

const props = defineProps<{
  itemName: string | null;
  disabled?: boolean;
}>();

const styleObject = computed(() => {
  let borderColor = 'th_primary';

  switch (props.itemName) {
    case 'scissors':
      borderColor = '#EC9E0E';
      break;
    case 'rock':
      borderColor = '#DC2E4E';
      break;
    case 'lizard':
      borderColor = '#81A85D';
      break;
    case 'spock':
      borderColor = '#FF5733';
      break;
    default:
      break;
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
