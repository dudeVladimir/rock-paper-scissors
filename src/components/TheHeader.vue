<template>
  <header class="header-container">
    <div class="header-content">
      <div class="header-content__left">
        <div class="logo-container">
          <transition name="scale-zero">
            <img
              :key="`${svgUrl}-${svgAlt}`"
              :src="svgUrl"
              :alt="svgAlt"
              height="114px"
            />
          </transition>
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
import { type Ref, computed, inject } from 'vue';

defineProps<{ counter?: number }>();

const isBonusGame = inject('isBonusGame') as Ref;

const svgUrl = computed(() =>
  isBonusGame.value ? './logo-bonus.svg' : './logo.svg',
);

const svgAlt = computed(() =>
  isBonusGame.value
    ? 'rock-paper-scissors-lizard-spock'
    : 'rock-paper-scissors',
);
</script>

<style lang="scss" scoped>
$mobile-br: '439px';

.header-container {
  .header-content {
    display: flex;
    gap: 12px;
    justify-content: space-between;
    align-items: center;
    padding: 15px 19px;
    border: 1px solid var(--th_secondary_background);
    border-radius: 6px;
    @media (max-width: $mobile-br) {
      flex-direction: column;
    }
    &__left {
      .logo-container {
        position: relative;
        height: 114px;
      }
    }
    &__rigth {
      @media (max-width: $mobile-br) {
        width: 100%;
      }
      .counter {
        width: 160px;
        text-align: center;
        background: var(--th_white);
        height: 100%;
        padding: 8px;
        border-radius: 8px;
        @media (max-width: $mobile-br) {
          width: auto;
        }
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
</style>
