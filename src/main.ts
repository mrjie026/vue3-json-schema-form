import { createApp, defineComponent, h } from 'vue'
// import App from './App.vue'
// import HelloWorld from './components/HelloWorld.vue'
import App from './App'

// const App = defineComponent({
//   //   render() {
//   //     return h('div', { id: 'app' }, [
//   //       h('img', {
//   //   alt: 'vv',
//   //   src: 'https://v3.vuejs.org/logo.png',
//   //       }),
//   //       h(HelloWorld, {
//   //         msg: 'h hh',
//   //         age: 12,
//   //       }),
//   //     ])
//   //   },
//   setup() {
//     return () => {
//       return h('div', { id: 'app' }, [
//         h('img', {
//           alt: 'vv',
//           src: 'https://v3.vuejs.org/logo.png',
//         }),
//         h(HelloWorld, {
//           msg: 'h hh---',
//           age: 222,
//         }),
//       ])
//     }
//   },
// })

createApp(App).mount('#app')
