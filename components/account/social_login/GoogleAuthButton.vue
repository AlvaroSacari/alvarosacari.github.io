<template>
  <v-btn
    :loading="processingLogin"
    :disabled="processingLogin"
    @click="userLoginWithGoogle"
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
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      processingLogin: state => state.user.processingLogin
    })
  },

  methods: {
    ...mapActions({
      userLoginWithGoogle: 'user/userLoginWithGoogle'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
