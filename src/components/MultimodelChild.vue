<template>
  <div>
    <div>메세지1 :
      <input :value="msg" @input="$emit('update:msg', $event?.target?.value)" />
    </div>
    <div>메세지2 :
      <input :value="msg2" @input="$emit('update:msg2', $event?.target?.value)" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['msg', 'msg2'],
  emits: ['update:msg', 'update:msg2'],
};
</script>
