import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import i18n from './translations'

new Vue();

//Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
Vue.use(Vuetify, {
    iconfont: 'md', // 'md' || 'mdi' || 'fa' || 'fa4'
    lang: {
        t: (key, ...params) => i18n.t(key, params)
    }
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
