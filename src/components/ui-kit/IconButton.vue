<template>
  <button class="icon-button">
    <img
      class="icon-button__img"
      :src="url"
      :alt="url ?? alt ?? 'Что-то пошло не так'"
      :width="width"
      :height="height"
    />
  </button>
</template>

<script setup lang="ts">
interface Props {
  url: string;
  alt?: string | null;
  width?: string;
  height?: string;
}

withDefaults(defineProps<Props>(), {
  alt: null,
  width: '16px',
  height: '16px',
});
</script>

<style lang="scss">
.icon-button {
  display: flex;
  border: none;
  background: none;
  transition: all 0.24s;

  &:hover:enabled {
    filter: brightness(120%);
    transform: scale(1.3);
  }
  &:active:enabled {
    filter: brightness(80%);
    transform: scale(0.95);
  }
}
</style>
