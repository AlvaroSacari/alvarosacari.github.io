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

  watch: {
    logging (newValue, oldValue) {
      this.$emit('update-google-logging-in', newValue)
    }
  },

  methods: {
    loginWithGoogle () {
      this.logging = true

      this.$auth.strategies.firebaseAuth.loginWithGoogle()
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
