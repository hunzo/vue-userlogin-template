<template>
  <v-btn color="error" @click="logoff">LOGOUT</v-btn>
</template>

<script>
export default {
    methods: {
        logoff() {
            this.$store.dispatch('user/logout')
            this.$router.push('/login')
        }
    },

}
</script>

<style>

</style>