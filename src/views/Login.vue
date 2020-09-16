<template>
<v-card width="400" class="mx-auto mt-5">

    <v-toolbar color="primary" dark flat="">
        LOGIN
        
    </v-toolbar>
    <v-card-text>
    <form @submit.prevent="authentication">
        
        <v-text-field label="username" type="text" dense outlined v-model="username"></v-text-field>
        <v-text-field label="password" type="password" dense outlined v-model="password"></v-text-field>

        <v-btn color="info" @click="authentication" justify-center type="submit">LOGIN</v-btn>

    </form>
    </v-card-text>

    <!-- <v-card-text>
        <v-text-field label="username" type="text" dense outlined v-model="username"></v-text-field>
        <v-text-field label="password" type="password" dense outlined v-model="password"></v-text-field>
        
    </v-card-text>

    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="info" @click="authentication" justify-center>LOGIN</v-btn>
    </v-card-actions> -->

</v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        authentication() {
            this.auth({
                username: this.username,
                password: this.password
                })
            this.$router.push('/')
            this.login()

        },
        ...mapActions('user', {
            login: 'login',
            logout: 'logout',
            auth: 'setUserInfo'

        })
    },
    mounted() {
        this.isLogin ? this.$router.push('/') : 0
        
    },
    computed: {
        ...mapGetters('user', [
            'isLogin'
        ])
    }

}
</script>

<style>

</style>