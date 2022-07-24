<template>
  <MyButton sm>Small Button</MyButton>
  <MyButton>Default Button</MyButton>
  <MyButton lg background-white>White button</MyButton>
  <MyButton sm pill text-red background-black>Black red text button</MyButton>
  <MyButton md pill text-green background-pink>Green Pink text button</MyButton>
  <MyButton lg pill @click.prevent="onClick">Prevent Button</MyButton>
</template>

<script lang="ts">
  import MyButton from './CustomButton.vue';

  export default {
    name: 'ButtonTest',
    methods: {
      onClick(evt) {
        alert('Clicked')
      },
    },
    components: {
      MyButton,
    },
  };
</script>
