<template>
  <button class="button-container" :class="{ filled }" :style="styleObject">
    <div class="button-content">
      <slot />
    </div>
  </button>
</template>

<script setup lang="ts">
import { CSSProperties, computed } from 'vue';

interface Props {
  uppercase?: boolean;
  fontSize?: string;
  background?: string | undefined;
  color?: string | undefined;
  filled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  fontSize: '12px',
  background: undefined,
  color: undefined,
});

const styleObject = computed(() => {
  const obj: CSSProperties = { fontSize: props.fontSize };

  if (props.uppercase) obj.textTransform = 'uppercase';

  if (props.background) obj.background = props.background;

  if (props.color) obj.color = props.color;

  return obj;
});
</script>

<style lang="scss" scoped>
.button-container {
  transition: all 0.24s ease;
  background: none;
  border: 1px solid var(--th_white);
  color: var(--th_white);
  outline: none;
  padding: 7px 15px;
  border-radius: 6px;

  &.filled {
    background: var(--th_white);
    color: var(--th_primary);
  }

  &:hover {
    box-shadow: 0px 0px 12px 2px rgba(255, 255, 255, 0.4) inset;
  }
  &:active {
    box-shadow: 0px 0px 16px 2px rgba(255, 255, 255, 0.2) inset;
  }
}
</style>
