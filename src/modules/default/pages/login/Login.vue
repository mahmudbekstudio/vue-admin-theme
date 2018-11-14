<template>
    <v-container fluid fill-height class="loginOverlay">
        <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6>
                <v-toolbar class="pt-5 blue darken-4">
                    <v-toolbar-title class="white--text"><h4>Welcome Back</h4></v-toolbar-title>
                </v-toolbar>
                <v-card>
                    <v-card-text class="pt-4">
                        <div>
                            <v-form ref="form">
                                <v-text-field
                                        label="Enter your e-mail address"
                                        required
                                ></v-text-field>
                                <v-text-field
                                        label="Enter your password"
                                        min="8"
                                        required
                                ></v-text-field>
                                <v-layout justify-space-between>
                                    <v-btn>Login</v-btn>
                                    <a href="">Forgot Password</a>
                                </v-layout>
                            </v-form>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>