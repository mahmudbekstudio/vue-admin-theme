<template>
    <v-toolbar app>
        <v-toolbar-side-icon @click.stop="toggleNavigation"></v-toolbar-side-icon>
    </v-toolbar>
</template>
<script>
    export default {
        methods: {
            toggleNavigation() {
                this.$store.dispatch('view/updateStatusNavigation', !this.$store.state.view.navigationIsOpened);
            }
        }
    }
</script>