<template>
  <div class="app-container">
    <TheHeader
      class="app-header"
      :is-bonus-game="isBonusGame"
      :counter="counter"
    />
    <main class="app-content">
      <transition name="fade">
        <RuleView
          v-if="isRuleView"
          :is-bonus-game="isBonusGame"
          @close="ruleHandler(false)"
        />
        <TheGame
          v-else
          :is-bonus-game="isBonusGame"
          class="game-container"
          @set-result="setResult"
        />
      </transition>
      <!-- <DemoPage class="demo-component my-4" /> -->
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
        <!-- <TheButton uppercase font-size="16px" @click="buttonHandler"
          >Сброс</TheButton
        > -->
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { ResultVariant } from './components/game/types';

import TheHeader from './components/TheHeader.vue';
import TheButton from './components/ui-kit/TheButton.vue';
import TheGame from './components/game/TheGame.vue';
import RuleView from './components/game/components/RuleView.vue';
// import DemoPage from './layouts/DemoPage.vue';

const isBonusGame = ref<boolean>(false);
const isRuleView = ref<boolean>(false);

const bonusHandler = () => {
  isBonusGame.value = !isBonusGame.value;
};

const counter = ref<number>(0);

const setResultToLocalStorage = (v: number): void => {
  if (Number.isFinite(v)) {
    localStorage.setItem('count', `${v}`);
  }
};

const setResult = (result: ResultVariant): void => {
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
    console.log(valueToNum);
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
  .app-header,
  .app-content {
    max-width: 920px;
    margin: 0 auto;
    width: 100%;
    padding: 0 20px;
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
    padding: 20px;
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

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
  width: calc(100% - 40px);
  margin: 0 auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.fade-leave-to,
.fade-enter-from {
  transform: scale(0);
  opacity: 0;
}

.fade-leave-from,
.fade-enter-to {
  transform: scale(1);
  opacity: 1;
}
</style>
