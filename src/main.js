import { createApp, ref } from 'vue';
// import  * as vue from 'vue'
import App from './App.vue'
import globalComponents from '@/global-components'
import router from '@/router'
import store from '@/store'
import renderDirective from '@/directive/renderDirective'
// console.log(vue)
createApp(App)
  .use(router)
  .use(store, 'main')
  .use(globalComponents) // 注册全局组件
  .provide('a', ref(111))
  .directive('renderDirective', renderDirective)
  .mount('#app')
