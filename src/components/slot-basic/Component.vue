<template>
  <ul style="list-style-type: none;">
    <li v-for="item in items" :key="item">
      <slot :item="item"></slot>
    </li>
  </ul>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        items: [1, 2, 3]
      }
    }
  };
</script>
