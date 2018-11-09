<template>
  <v-app>
    <component :is="layout">
      <router-view/>
    </component>
  </v-app>
</template>

<script>
    import Empty from './views/layouts/Empty'

    export default {
        name: 'App',
        computed: {
            layout() {
                return 'Empty';
            }
        },
        components: {
            Empty
        }
    }
</script>
