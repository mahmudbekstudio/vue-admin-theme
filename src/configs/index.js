import {get as getValue, set as setValue} from 'lodash'

const settings = {
    defaultPage: 'dashboard'
};

function Config(defaultSettings) {
    this.settings = null;
    this.instance = null;

    return (() => {
        return this;
    })();


    static getInstance(settings) {
        window.console.log('every');
        if(!Config.instance) {
            window.console.log('once');
            Config.instance = new Config(settings);
        }

        return Config.instance;
    }

    get(key, defaultValue = null) {
        return getValue(this.settings, key, defaultValue);
    }

    set(key, val) {
        setValue(this.settings, key, val);
    }
}

let Config = (function(settings) {
    //
})(settings);

export default (function() {
    let instance = null;
    let instanceClass = function() {
        //
    };

    return instan
})(settings)