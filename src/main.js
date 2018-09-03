// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/reset.scss'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import './common/js/jqr.js';
Vue.prototype.$axios = axios
import qs from 'qs';
axios.defaults.withCredentials = true 
// import lang1 from 'element-ui/lib/locale/lang/en'
// import locale from 'element-ui/lib/locale'
// locale.use(lang1)
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
Vue.use(ElementUI);
Vue.use(VueI18n)

import { Radio, Select , DatePicker , Upload} from 'element-ui';
Vue.prototype.$ELEMENT = { size: 'small' };
Vue.use(Radio)
Vue.use(Select)
Vue.use(DatePicker)
Vue.use(Upload)


// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!auth.loggedIn()) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // 确保一定要调用 next()
//   }
// })




Vue.config.productionTip = false;
function lang () {
  // 将选择的语言存在localStorage中
  let t = window.localStorage.getItem('language')
  if (t) return t
  // 默认中文
  else return 'en'
}

const language = lang()
const i18n = new VueI18n({
  locale: language,
  messages: {
    'zh': require('./common/lang/zh'),
    'en': require('./common/lang/en')
  }
})
window.eventBus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  i18n,
  template: '<App/>'
})
