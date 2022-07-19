import { createApp, ref } from 'vue'
import './style.css'
import App from './App.vue'

// app instance 생성
const app = createApp({});

// 신규 컴포넌트 등록
app.component('counter', {
  // provide값 불러서 사용 가능
  inject: ['counter_header'],
  setup() {
    const count = ref(0);
    return { count };
  },
  template: `
    <span>{{ counter_header }}</span>
    <button @click="count++" v-text="count" />
    <hr />
  `,
});

app.config.globalProperties.title('Vue3 Demo');
app.provide('counter_header', 'Counter ');
app.mount('#app');

// createApp(App).mount('#app')
