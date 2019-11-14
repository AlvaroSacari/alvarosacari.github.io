<template>
  <v-btn block color="#e34134" dark @click="loginWithGoogle">
    <v-icon left>
      mdi-google
    </v-icon>
    Ingresar con Google
  </v-btn>
</template>

<script>
import { auth, GoogleProvider } from '@/services/fireinit.js'

export default {
  data () {
    return {
      error: null
    }
  },
  methods: {
    loginWithGoogle () {
      auth.signInWithPopup(GoogleProvider)
        .then((response) => {
          this.$auth.fetchUser()
        })
        .catch((error) => {
          this.error = error
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
