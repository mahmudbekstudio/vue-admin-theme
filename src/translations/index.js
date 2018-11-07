import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en.json'

Vue.use(VueI18n);
const locale = process.env.VUE_APP_LANG;

const messages = {
    en: en,
};

const i18n = new VueI18n({
    locale,
    messages
});
export default i18n