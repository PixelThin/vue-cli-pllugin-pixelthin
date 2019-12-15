import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        siteHost: 'https://newproject.com',
        cmsHost: '',
        imageHost: 'https://newproject.com/images',
        debug: false,
        drawerOpen: false,
    },
    getters: {
        cmsHost(state) {
            return state.cmsHost
        },
        drawerOpen(state) {
            return state.drawerOpen
        },
        imageHost(state) {
            return state.imageHost
        },
        siteHost(state) {
            return state.siteHost
        }
    },
    mutations: {
        setDebug(state, payload) {
            if (payload) {
                state.siteHost = 'http://localhost:8080'
                state.cmsHost = 'http://localhost:8000'
            }
        },
        setDrawerOpen(state, payload) {
            state.drawerOpen = payload
        }
    },
    actions: {

    },
});
