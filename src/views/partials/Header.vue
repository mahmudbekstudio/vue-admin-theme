<template>
    <v-toolbar app>
        <v-toolbar-side-icon @click.stop="toggleNavigation"></v-toolbar-side-icon>
        <button @click="toggleNavigation">ok</button></v-toolbar>
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