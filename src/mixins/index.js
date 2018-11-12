import router from './router'
import component from './component'

const mixinsList = {
    router,
    component
};

class Mixins {
    constructor(list) {
        this.list = list;
    }

    get(mixName, props = []) {
        let mixin = this.list[mixName] || null;
        let result = {};

        if(result && props.length) {
            props.forEach(el => {
                if(mixin[el]) {
                    result[el] = mixin[el];
                }
            });
        } else {
            result = mixin;
        }

        return result;
    }
}

export default new Mixins(mixinsList)