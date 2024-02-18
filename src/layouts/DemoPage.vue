<template>
  <div class="demo-page">
    <h3 class="demo-page__header header-1-m mb-4">
      Это демо компонент для проверки всякой всячины
    </h3>
    <div class="demo-page__content">
      <ul class="svg-list">
        <li v-for="(svgUrl, index) in svgUrls" :key="index" class="svg-item">
          <img
            class="svg-item__img"
            :src="svgUrl"
            :alt="`svg-url: ${svgUrl}`"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { isObject } from '../helpers';

const svgFiles = import.meta.glob('../assets/svg/*.svg');

const svgUrls = computed(() => {
  if (isObject(svgFiles)) {
    return Object.keys(svgFiles).map((key) => {
      const url = new URL(key, import.meta.url).href;
      return url;
    });
  }

  return [];
});
</script>

<style lang="scss" scoped>
.demo-page {
  background: var(--th_secondary_background);
  border-radius: 12px;
  padding: 12px;
  &__header {
    text-align: center;
  }
  &__content {
    .svg-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      .svg-item {
        &__img {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
}
</style>
