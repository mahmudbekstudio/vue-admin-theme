<template>
    <div class="module-default">
        <router-view />
    </div>
</template>
<script>
    export default {
        data() {
            return {
                resLayout: ''
            }
        },
        created() {
            this.resLayout = this.$store.state.view.defaultLayout;
            this.$store.dispatch('view/updateDefaultLayout', 'Centered');
        },
        beforeDestroy() {
            this.$store.dispatch('view/updateDefaultLayout', this.resLayout);
        }
    }
</script>