<template>
  <v-container class="pa-4">
    <v-col>
      <v-card :loading="processingLogin" max-width="300" class="mx-auto">
        <v-app-bar flat>
          <v-toolbar-title>Iniciar sesión</v-toolbar-title>
        </v-app-bar>
        <v-divider />
        <v-card-text>
          <LoginForm />
        </v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import LoginForm from '~/components/account/LoginForm.vue'

export default {
  components: {
    LoginForm
  },

  computed: {
    ...mapState({
      processingLogin: state => state.user.processingLogin
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
