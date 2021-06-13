<template>
    <v-card width="600" class="mx-auto mt-5">
        <v-toolbar color="primary" flat dark>
            ANOTHER APPP <br />
            {{ this.isLogin }}
        </v-toolbar>
        <v-card-text> </v-card-text>
        <v-card-actions>
            <logoutBtn />
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import logoutBtn from '../components/LogoutBtn'


export default {
    mounted() {
        this.isLogin ? 0 : this.$router.push('/')

    },
    computed: {
        ...mapGetters('user', [
            'isLogin'
        ])
    },
    components: {
        logoutBtn
    }

}
</script>

<style>
</style>