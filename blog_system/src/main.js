import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import 'assets/js/bootstrap.min.js'
import 'assets/css/bootstrap.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// 引入路由
import router from "./router/index.js"    // import router 的router 一定要小写， 不要写成Router, 否则报 can't match的报错

Vue.use(ElementUI)
Vue.use(mavonEditor)

new Vue({
  el: '#app',
  router,  // 注入到根实例中
  render: h => h(App),
});
