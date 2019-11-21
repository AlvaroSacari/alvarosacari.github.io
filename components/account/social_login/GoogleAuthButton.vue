<template>
  <v-btn
    :loading="logging"
    :disabled="logging"
    @click="loginWithGoogle"
    block
    color="#e34134"
    dark
  >
    <v-icon left>
      mdi-google
    </v-icon>
    Ingresar con Google
  </v-btn>
</template>

<script>
export default {
  data () {
    return {
      logging: false,
      error: null
    }
  },

  computed: {
    userName () {
      if (!this.$auth.loggedIn) {
        return ''
      }

      if (this.$auth.user.displayName) {
        return this.$auth.user.displayName
      }

      return this.$auth.user.email.split('@')[0]
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
      this.$snackbar.info('Iniciando sesión ...')

      this.$auth.strategies.firebaseAuth.loginWithGoogle()
        .then((response) => {
          this.$snackbar.success(`Bienvenido ${this.userName}`)
        })
        .catch((error) => {
          this.$snackbar.error('Ocurrió un error al iniciar sesión')
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
