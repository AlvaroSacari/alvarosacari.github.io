<template>
  <v-container>
    <v-col>
      <v-card max-width="300" class="mx-auto">
        <v-app-bar flat>
          <v-toolbar-title>Iniciar sesión</v-toolbar-title>
        </v-app-bar>
        <v-divider />
        <v-card-text>
          <v-btn block class="mb-4" color="#e34134" dark>
            <v-icon left>
              mdi-google
            </v-icon>
            Ingresar con Google
          </v-btn>
          <v-btn block color="#1873eb" disabled>
            <v-icon left>
              mdi-facebook
            </v-icon>
            Ingresar con Facebook
          </v-btn>
        </v-card-text>
        <v-card-text>
          <v-form id="loginForm" ref="loginForm" @submit.prevent="login">
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
            <v-btn type="submit" form="loginForm" color="primary">
              Ingresar
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login () {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
