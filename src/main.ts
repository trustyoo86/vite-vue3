import { createApp, onUpdated, ref } from 'vue'
import './style.css'
import App from './App.vue'

// // app instance 생성
// const app = createApp({});

// // 신규 컴포넌트 등록
// app.component('counter', {
//   // provide값 불러서 사용 가능
//   inject: ['counter_header'],
//   setup() {
//     const count = ref(0);
//     return { count };
//   },
//   template: `
//     <span>{{ counter_header }}</span>
//     <button @click="count++" v-text="count" />
//     <hr />
//   `,
// });

// // app.config.globalProperties.title('Vue3 Demo');
// app.provide('counter_header', 'Counter ');
// app.mount('#app');

const app = createApp(App);

// directive
// app.directive('focus', {
//   mounted(el) {
//     el.focus();
//   },
//   updated(el) {
//     el.focus();
//   }
// })

// or
app.directive('focus', (el) => {
  el.focus();
});

app.directive('notification', (el, binding, vnode, prevNode) => {
  el.style.position = 'fixed';
  el.style[binding.arg || 'top'] = binding.value + 'px';
  console.log(el, binding, vnode, prevNode);
});

app.mount('#app')
