<template>
  <div class="rule-view">
    <div class="rule-view__content">
      <div class="rule-header mb-6">
        <div class="rule-header__text header-1-s">
          {{ headerText }}
        </div>
        <div class="rule-header__append">
          <IconButton
            url="../assets/svg/icon-close.svg"
            @click="$emits('close')"
          />
        </div>
      </div>
      <div class="rule-body">
        <img
          class="rule-body__img"
          :src="imgUrl"
          :alt="headerText"
          height="340px"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconButton from '@/components/ui-kit/IconButton.vue';
import { getUrlToImg } from '@/helpers';
import { computed } from 'vue';

const props = defineProps<{ isBonusGame?: boolean }>();

const $emits = defineEmits<{
  close: [];
}>();

const headerText = computed<string>(() =>
  props.isBonusGame ? 'Правила бонусной игры' : 'Правила',
);

const imgUrl = computed<string>(() =>
  props.isBonusGame
    ? getUrlToImg('../assets/svg/image-rules-bonus.svg')
    : getUrlToImg('../assets/svg/image-rules.svg'),
);
</script>

<style lang="scss" scoped>
.rule-view {
  &__content {
    padding: 24px;
    background: var(--th_primary_background);
    border-radius: 6px;
    .rule-header {
      position: relative;
      padding: 0 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      &__text {
        text-align: center;
      }
      &__append {
        position: absolute;
        right: 0;
      }
    }
    .rule-body {
      display: flex;
      justify-content: center;
    }
  }
}

@media (max-width: 423px) {
  .rule-view {
    &__content {
      .rule-body {
        &__img {
          transform: scale(0.8);
        }
      }
    }
  }
}

@media (max-width: 367px) {
  .rule-view {
    &__content {
      .rule-body {
        &__img {
          transform: scale(0.6);
        }
      }
    }
  }
}
</style>
