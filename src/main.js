import Vue from 'vue'
import App from './App.vue'
// 引入element - ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/reset.css";

Vue.use(ElementUI)
Vue.config.productionTip = false

import store from "@/store"
import router from '@/router'
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')