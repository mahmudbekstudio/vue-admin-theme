import viewSettings from '../configs/view';

const defaultStates = {
    navigationIsOpened: viewSettings[viewSettings.selected].navigationIsOpened,
    navigationIsMini: viewSettings[viewSettings.selected].navigationMini,
    themeIsDark: viewSettings.themeIsDark,
    defaultLayout: viewSettings.defaultLayout,
    temporary: viewSettings[viewSettings.selected].temporary,
    footerInset: viewSettings.footerInset
};

export default {
    namespaced: true,

    state: Object.assign({}, defaultStates),

    mutations: {
        changeNavigationIsOpened(state, val) {
            state.navigationIsOpened = val;
        },

        changeNavigationIsMini(state, val) {
            state.navigationIsMini = val;
        },

        changeThemeIsDark(state, val) {
            state.themeIsDark = val;
        },

        changeDefaultLayout(state, val) {
            state.defaultLayout = val;
        },

        changeTemporary(state, val) {
            state.temporary = val;
        },

        changeFooterInset(state, val) {
            state.footerInset = val;
        }
    },

    actions: {
        updateStatusNavigation({ commit }, val) {
            commit('changeNavigationIsOpened', !!val);
        },

        openNavigation({ dispatch }) {
            dispatch('updateStatusNavigation', true);
        },

        closeNavigation({ dispatch }) {
            dispatch('updateStatusNavigation', false);
        },

        updateNavigationIsMini({ commit }, val) {
            commit('changeNavigationIsMini', !!val);
        },

        updateThemeIsDark({ commit }, val) {
            commit('changeThemeIsDark', !!val);
        },

        updateDefaultLayout({ commit }, val) {
            commit('changeDefaultLayout', val);
        },

        updateTemporary({ commit }, val) {
            commit('changeTemporary', !!val);
        },

        updateFooterInset({ commit }, val) {
            commit('changeFooterInset', !!val);
        }
    },

    getters: {}
}