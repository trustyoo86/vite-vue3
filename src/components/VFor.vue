<template>
  <div style="width: 200px">
    <ol>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ol>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';

export default {
  setup() {
    const items = reactive(['item-1', 'item-2', 'item-3']);

    return {
      items,
    };
  }
}

</script>