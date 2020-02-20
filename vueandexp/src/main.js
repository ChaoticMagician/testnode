import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/iconfont/iconfont.css"

import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://123.56.17.204:8199',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  },
}))

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
