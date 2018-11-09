<template>
    <Empty>
        <template slot="header">
            <Navigation></Navigation>
            <Header></Header>
        </template>
        <v-container fluid>
            <slot></slot>
        </v-container>
        <template slot="footer">
            <Footer></Footer>
        </template>
    </Empty>
</template>
<script>
    import Navigation from '../partials/Navigation'
    import Header from '../partials/Header'
    import Footer from '../partials/Footer'
    import Empty from './Empty'

    export default {
        components: {
            Empty,
            Navigation,
            Header,
            Footer
        }
    }
</script>
<style scoped lang="scss"></style>