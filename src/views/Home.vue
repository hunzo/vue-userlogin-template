<template>
    <v-card width="600" class="mx-auto mt-5">
        <v-toolbar color="primary" flat dark>
            USER INFORMATION Hi {{ sessionInfo.username }}
        </v-toolbar>
        <v-card-text>
            Counter TimeOut : {{ counter }}
            <br />
            Date: {{ date }}
            <v-divider></v-divider>
            <br />

            <v-simple-table dense>
                <tbody>
                    <tr v-for="i in sessionInfo" :key="i.username">
                        <td>{{ i }}</td>
                    </tr>
                </tbody>
            </v-simple-table>
        </v-card-text>
        <v-card-actions>
            <logoutBtn />
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import logoutBtn from '../components/LogoutBtn'

export default {
    data() {
        return {
            counter: null,
            date: null
        }
    },
    mounted() {
        this.isLogin ? 0 : this.$router.push('/login')
        // console.log(typeof this.sessionInfo.timeout)
        this.Interval(this.sessionInfo.timeout)
    },
    computed: {
        ...mapGetters('user', [
            'isLogin',
            'sessionInfo'
        ]),
    },
    components: {
        logoutBtn
    },
    methods: {
        Interval(counter) {
            this.ref = setInterval(() => {
                this.counter = counter--
            }, 1000)

            this.ref2 = setInterval(() => {
                this.date = new Date()

            }, 1000)

        }
    },
    beforeDestroy() {
        console.log('beforeDestroy => Clear Interval')
        clearInterval(this.ref)
        clearInterval(this.ref2)


    },

}
</script>

<style>
</style>