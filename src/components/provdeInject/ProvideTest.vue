<template>
  <Component></Component>
  <InjectComp></InjectComp>
</template>

<script lang="ts">
  import Component from './Component.vue';
  import InjectComp from './InjectComp.vue';
  import { provide } from 'vue';

  export default {
    provide: {
      msg: '메세지'
    },
    components: {
      Component,
      InjectComp,
    },
  };
</script>
