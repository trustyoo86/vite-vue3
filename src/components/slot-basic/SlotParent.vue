<template>
  <Component>
    <template v-slot="slotProps"> v {{ slotProps.item }}</template>
  </Component>
</template>

<script lang="ts">
  import Component from './Component.vue';

  export default {
    components: {
      Component
    }
  };

</script>
