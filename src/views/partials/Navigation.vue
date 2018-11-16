<template>
    <v-navigation-drawer app v-model="isOpened" :mini-variant="isMini" :temporary="temporary" :permanent="permanent">
        <v-toolbar flat>
            <v-list>
                <v-list-tile>
                    <v-list-tile-title class="title">
                        Application
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-toolbar>

        <v-divider></v-divider>

        <v-list dense class="pt-0">
            <v-list-tile
                    v-for="item in items"
                    :key="item.title"
                    @click="$router.push(item.route)"
                    :class="{'active-item': $route.name === item.route.name}"
            >
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
    import navigationList from '@/configs/navigation';
    export default {
        data () {
            return {
                items: navigationList,
                right: null
            }
        },

        computed: {
            isOpened: {
                get() {
                    return this.$store.state.view.navigationIsOpened;
                },
                set(newVal) {
                    window.console.log(newVal);
                    this.$store.dispatch('view/updateStatusNavigation', newVal);
                },
            },
            isMini() {
                return this.$store.state.view.navigationIsMini;
            },

            temporary() {
                return this.$store.state.view.temporary;
            },

            permanent() {
                return this.$store.state.view.permanent
            }
        }
    }
</script>
<style scoped lang="scss">
    .active-item {
        a {
            background-color: rgba(0, 0, 0, 0.4);
        }
    }
</style>