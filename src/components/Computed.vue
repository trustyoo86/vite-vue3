<template>
  <h2>Small Items</h2>
  <p v-for="item in small_items_c" :key="item.id">{{ item.text }}</p>
  <p v-for="item in small_items_o" :key="item.id">{{ item.text }}</p>
  <h2>Big Items</h2>
  <p v-for="item in big_items_c" :key="item.id">{{ item.text }}</p>
  <p v-for="item in big_items_o" :key="item.id">{{ item.text }}</p>
</template>

<script lang="ts">
import { reactive, computed } from 'vue';

export default {
  data() {
    return {
      arr: [
        { id: 1, text: 'option item 1' },
        { id: 2, text: 'option item 2' },
        { id: 3, text: 'option item 3' },
        { id: 4, text: 'option item 4' },
        { id: 5, text: 'option item 5' },
      ],
    };
  },
  computed: {
    small_items_o() {
      return this.arr.filter(item => item.id < 3);
    },
    big_items_o() {
      return this.arr.filter(item => item.id >= 3);
    },
  },
  setup() {
    const arr = reactive([
        { id: 1, text: 'option item 1' },
        { id: 2, text: 'option item 2' },
        { id: 3, text: 'option item 3' },
        { id: 4, text: 'option item 4' },
        { id: 5, text: 'option item 5' },
      ]);

      const small_items_c = computed(() => {
        return arr.filter(item => item.id < 3);
      });

      const big_items_c = computed(() => {
        return arr.filter(item => item.id >= 3);
      });

      return {
        small_items_c,
        big_items_c,
      };
  }
};
</script>
