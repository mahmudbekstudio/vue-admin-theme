<template>
    <Empty class="layout-centered">
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <slot></slot>
            </v-layout>
        </v-container>
        <template slot="footer">
            <Footer></Footer>
        </template>
    </Empty>
</template>
<script>
    import Empty from './Empty'
    import Footer from '../partials/Footer'
    export default {
        components: {
            Empty,
            Footer
        }
    }
</script>
<style scoped lang="scss">
    .container {
        height: 100%;
    }
</style>