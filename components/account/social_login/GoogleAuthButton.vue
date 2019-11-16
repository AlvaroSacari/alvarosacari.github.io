<template>
  <v-btn
    :loading="logging"
    :disabled="logging"
    block
    color="#e34134"
    dark
    @click="loginWithGoogle"
  >
    <v-icon left>
      mdi-google
    </v-icon>
    Ingresar con Google
  </v-btn>
</template>

<script>
import { auth, GoogleAuthProvider } from '@/services/fireinit.js'

export default {
  data () {
    return {
      logging: false,
      error: null
    }
  },

  watch: {
    logging (newValue, oldValue) {
      this.$emit('update-google-logging-in', newValue)
    }
  },

  methods: {
    loginWithGoogle () {
      this.logging = true

      auth.signInWithPopup(GoogleAuthProvider)
        .then((response) => {
          this.$auth.fetchUser()
        })
        .catch((error) => {
          this.error = error
        })
        .finally(() => {
          this.logging = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
