import { createApp, ref } from 'vue'

// app instance 생성
const app = createApp({});

app.component('MyComponent', {
  props: {
    title: {
      type: String,
      required: true,
      validator: function (value) {
        return typeof value === 'string'
      },
    },
    data: {
      type: Object,
      default: () => {
        return [];
      },
    },
    setup() {
      const count = ref(0);
      return { count };
    },
    template: `
      <h3 v-text="title" />
      <span v-for="i in data" :key="i">{{ i }}</span>
    `,
  },
});
