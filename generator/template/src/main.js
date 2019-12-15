import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueScrollReveal from 'vue-scroll-reveal'
import hosts from '@/lib/hosts'
Vue.use(VueScrollReveal)
Vue.use(hosts)

Vue.config.productionTip = false;
// The following automatically sets up debugging hosts when the
// site is accessed via localhost or the beta site
if (window.location.hostname === 'localhost') {
    store.commit('setDebug', true)
}
new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
