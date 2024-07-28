<template>
  <div class="app-container">
    <TheHeader
      class="app-header"
      :counter="counter"
    />
    <main class="app-content">
      <transition name="scale-zero">
        <RuleView
          v-if="isRuleView"
          @close="ruleHandler(false)"
        />
        <TheGame
          v-else
          class="game-container"
          @set-result="setResult"
        />
      </transition>
    </main>
    <footer class="app-footer">
      <div class="buttons">
        <TheButton uppercase font-size="16px" @click="bonusHandler">{{
          isBonusGame ? 'Обычный' : 'Бонус'
        }}</TheButton>
        <TheButton
          v-if="!isRuleView"
          uppercase
          font-size="16px"
          @click="ruleHandler(true)"
          >Правила</TheButton
        >
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';

import type { Result } from './components/game/types';

import TheHeader from './components/TheHeader.vue';
import TheButton from './components/ui-kit/TheButton.vue';
import TheGame from './components/game/TheGame.vue';
import RuleView from './components/game/components/RuleView.vue';

const isBonusGame = ref<boolean>(false);
const isRuleView = ref<boolean>(false);

provide('isBonusGame', isBonusGame);

const bonusHandler = () => {
  isBonusGame.value = !isBonusGame.value;
};

const counter = ref<number>(0);

const setResultToLocalStorage = (v: number): void => {
  if (Number.isFinite(v)) {
    localStorage.setItem('count', `${v}`);
  }
};

const setResult = (result: Result): void => {
  if (Number.isFinite(result) && result != null) {
    counter.value = counter.value + result;

    setResultToLocalStorage(counter.value);
    return;
  }

  console.error('wrong result');
};

const getLocalStorageResult = (): void => {
  const valueToNum = Number(localStorage.getItem('count') ?? 0);

  if (Number.isFinite(valueToNum)) {
    counter.value = valueToNum;
  }
};

const ruleHandler = (v: boolean): void => {
  isRuleView.value = v;
};

getLocalStorageResult();
</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-direction: column;
  background: var(--th_main_background);
  background: radial-gradient(rgba(2, 0, 36, 0.85), var(--th_main_background));
  min-height: 100%;
  width: 100%;
  padding: 0 20px;
  .app-header,
  .app-content {
    max-width: 920px;
    margin: 0 auto;
    width: 100%;
  }
  .app-header {
    margin-top: 20px;
    flex: 0 0 auto;
  }
  .app-content {
    position: relative;
    min-height: 441px;
    width: 100%;
    margin-top: 80px;
    flex: 0 1 100%;
  }
  .app-footer {
    flex: 0 0 200px;
    .buttons {
      width: 120px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      float: right;
    }
  }
}
</style>
