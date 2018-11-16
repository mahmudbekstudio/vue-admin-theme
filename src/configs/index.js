import {get as getValue, set as setValue} from 'lodash'

const settings = {
    defaultPage: 'dashboard',
    notFound: 'not-found'
};

class Config {
    constructor(settings) {
        this.settings = settings;
    }

    get(key, defaultValue = null) {
        return getValue(this.settings, key, defaultValue);
    }

    set(key, val) {
        setValue(this.settings, key, val);
    }
}

export default new Config(settings);