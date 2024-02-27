<template>
  <header class="header-container">
    <div class="header-content">
      <div class="header-content__left">
        <div class="logo-container">
          <img :src="svgUrl" :alt="svgAlt" height="114px" />
        </div>
      </div>
      <div class="header-content__rigth">
        <div class="counter">
          <div class="counter__header">Счет</div>
          <div class="counter__value fs-64" :title="`${counter ?? 0}`">
            {{ counter }}
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ isBonusGame?: boolean; counter?: number }>();

const svgUrl = computed(() =>
  props.isBonusGame ? './logo-bonus.svg' : './logo.svg',
);

const svgAlt = computed(() =>
  props.isBonusGame
    ? 'rock-paper-scissors-lizard-spock'
    : 'rock-paper-scissors',
);
</script>

<style lang="scss" scoped>
.header-container {
  .header-content {
    display: flex;
    gap: 12px;
    justify-content: space-between;
    align-items: center;
    padding: 15px 19px;
    border: 1px solid var(--th_secondary_background);
    border-radius: 6px;
    &__rigth {
      .counter {
        width: 160px;
        text-align: center;
        background: var(--th_white);
        height: 100%;
        padding: 8px;
        border-radius: 8px;
        &__header {
          text-transform: uppercase;
          color: var(--th_primary);
        }
        &__value {
          overflow: hidden;
          text-wrap: nowrap;
          text-overflow: ellipsis;
          color: var(--th_main_background);
        }
      }
    }
  }
}
@media (max-width: 439px) {
  .header-container {
    .header-content {
      flex-direction: column;
      &__rigth {
        width: 100%;
        .counter {
          width: auto;
        }
      }
    }
  }
}
</style>
