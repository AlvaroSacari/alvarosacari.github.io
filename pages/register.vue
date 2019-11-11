<template>
  <v-container>
    <v-col>
      <v-card max-width="300" class="mx-auto">
        <v-app-bar flat>
          <v-toolbar-title>Registrarme</v-toolbar-title>
        </v-app-bar>
        <v-divider />
        <v-card-text>
          <v-btn block class="mb-4" color="#e34134" dark>
            <v-icon left>
              mdi-google
            </v-icon>
            Registrarme con Google
          </v-btn>
          <v-btn block color="#e34134" disabled>
            <v-icon left>
              mdi-facebook
            </v-icon>
            Registrarme con Facebook
          </v-btn>
        </v-card-text>
        <v-card-text>
          <v-form id="registerForm" ref="registerForm" @submit.prevent="register">
            <v-text-field
              v-model="email"
              type="email"
              outlined
              label="Correo electrónico"
            />
            <v-text-field
              v-model="password"
              type="password"
              outlined
              label="Contraseña"
            />
          </v-form>
          <div class="text-center">
            <v-btn type="submit" block form="registerForm" color="primary">
              Registrarme
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import { auth } from '@/services/fireinit.js'

export default {
  auth: false,

  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    register () {
      const email = this.email
      const password = this.password

      auth.createUserWithEmailAndPassword(email, password)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
