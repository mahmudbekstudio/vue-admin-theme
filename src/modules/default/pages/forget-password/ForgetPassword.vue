<template>
    <v-flex sm8 md6 lg4 elevation-6>
        <v-toolbar class="blue darken-2">
            <v-toolbar-title class="white--text"><h4>Forget Password</h4></v-toolbar-title>
        </v-toolbar>
        <v-card>
            <v-card-text class="pt-4">
                <div>
                    <v-form ref="form">
                        <v-text-field
                                label="Enter your e-mail address"
                                required
                        ></v-text-field>
                        <v-layout justify-space-between>
                                    <span>
                                        <router-link :to="{ name: 'default-login'}">Login</router-link><br />
                                        <router-link :to="{ name: 'default-register'}">Register</router-link>
                                    </span>
                            <v-btn color="primary">Send</v-btn>
                        </v-layout>
                    </v-form>
                </div>
            </v-card-text>
        </v-card>
    </v-flex>
</template>
<script>
    import mixins from '@/mixins';

    export default {
        data() {
            return {
                currentLayout: 'Centered'
            }
        },
        mixins: [mixins.get('changeLayout')]
    }
</script>