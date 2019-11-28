<template>
  <v-container class="pa-4">
    <v-col>
      <v-card :loading="processingRegister" max-width="300" class="mx-auto">
        <v-app-bar flat>
          <v-toolbar-title>Registrarme</v-toolbar-title>
        </v-app-bar>
        <v-divider />
        <v-card-text>
          <RegisterForm />
        </v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

import RegisterForm from '~/components/account/RegisterForm.vue'

export default {
  auth: false,

  components: {
    RegisterForm
  },

  computed: {
    ...mapState({
      processingRegister: state => state.user.processingRegister
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
