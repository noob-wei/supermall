import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 导入mui样式
import "./assets/mui/css/mui.min.css"
import "./assets/mui/css/icons-extra.css"

// 导入mint-ui
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);
// 导入header样式
import './assets/header/header.css'
import './assets/base/base.css'

// 导入element-ui
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element, { size: 'small', zIndex: 3000 });

// 导入axios
import axios from 'axios'
Vue.prototype.$http = axios

// 导入swiper
import swiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(swiper)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
