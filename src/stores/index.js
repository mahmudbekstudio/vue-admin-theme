import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import common from './common'
import view from './view'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {

    },

    mutations: {

    },

    actions: {

    },

    modules: {
        auth,
        common,
        view,
    },

    plugins: []
});
