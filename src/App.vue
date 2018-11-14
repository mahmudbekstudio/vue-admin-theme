<template>
  <v-app :dark="dark">
    <component :is="layout">
      <router-view/>
    </component>
  </v-app>
</template>

<script>
    import Empty from './views/layouts/Empty';
    import Main from './views/layouts/Main';
    import Centered from './views/layouts/Centered';
    import Landing from './views/layouts/Landing';

    export default {
        name: 'App',
        data() {
            return {
                //
            }
        },
        computed: {
            layout() {
                return this.$store.state.view.defaultLayout;
            },

            dark() {
                return this.$store.state.view.themeIsDark;
            }
        },
        created() {
            //window.console.log(window.document.clie);
        },
        components: {
            Empty,
            Main,
            Centered,
            Landing
        }
    }
</script>
