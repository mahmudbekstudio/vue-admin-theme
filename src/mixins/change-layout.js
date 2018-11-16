import configs from '@/configs/view'

export default {
    data() {
        return {
            resLayout: '',
            currentLayout: configs.defaultLayout
        }
    },
    mounted() {
        this.resLayout = this.$store.state.view.defaultLayout;
        this.$store.dispatch('view/updateDefaultLayout', this.currentLayout);
    },
    beforeDestroy() {
        this.$store.dispatch('view/updateDefaultLayout', this.resLayout);
    }
}