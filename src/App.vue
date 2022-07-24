<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <WatchEffect /> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <ProvideInject /> -->
  <MyTable :header="header" :rows="rows" />
</template>

<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import ProvideInject from './components/provdeInject/ProvideTest.vue';
import DirectiveTest from './components/directive/Directive.vue';
import Inputs from './components/inputs/Inputs.vue';
import ButtonTest from './components/customButton/ButtonTest.vue';
import MyTable from './components/MyTable.vue';

export default {
  data() {
    return {
          header: ['1번 제목', '2번 제목'],
          rows: [[{ data: '1번 내용'}, { data: '2번 내용' }], [{ data: '1번 내용2', colspan: 2 }]]
        }
  },
  components: {
    MyTable,
  },
};

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
