<template>
    <v-footer app :inset="inset">
        <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
</template>
<script>
    export default {
        computed: {
            inset() {
                return this.$store.state.view.footerInset;
            }
        }
    }
</script>