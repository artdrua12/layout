import Vue from 'vue'
// element
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, { locale })

import App from './App.vue'



new Vue({
  el: '#app',
  render: h => h(App)
})
