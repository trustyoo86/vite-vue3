<template>
  <p>{{ `[${msg}] : ${msg2}` }}</p>
  <MultimodelChild v-model:msg="msg" v-model:msg2="msg2" />
</template>

<script lang="ts">
import MultimodelChild from './MultimodelChild.vue';

export default {
  data() {
    return {
      msg: '초기 메세지1',
      msg2: '초기 메세지2',
    };
  },
  components: {
    MultimodelChild
  },
};
</script>
