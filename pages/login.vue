<template>
  <v-container>
    <v-col>
      <v-card max-width="300" class="mx-auto" :loading="processingForm">
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
          <v-fade-transition>
            <v-alert
              v-if="loginError"
              prominent
              type="error"
              border="left"
            >
              El usuario y/o la contraseña pueden ser incorrectos.
            </v-alert>
          </v-fade-transition>
          <v-form
            id="loginForm"
            ref="loginForm"
            v-model="validForm"
            lazy-validation
            @submit.prevent="login"
          >
            <v-text-field
              v-model="email"
              type="email"
              outlined
              label="Correo electrónico"
              :rules="rules.email"
            />
            <v-text-field
              v-model="password"
              type="password"
              outlined
              label="Contraseña"
              :rules="rules.password"
            />
          </v-form>
          <v-btn
            type="submit"
            class="mb-4"
            block
            form="loginForm"
            color="primary"
            :loading="processingForm"
            :disabled="!validForm || processingForm"
          >
            Ingresar
          </v-btn>
          <v-btn
            text
            color="primary"
            block
            :to="{ name: 'register' }"
          >
            Registrarme
          </v-btn>
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
      password: '',
      processingForm: false,
      validForm: true,
      rules: {
        email: [
          v => !!v || 'El correo electrónico es requerido',
          v => /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido'
        ],
        password: [
          v => !!v || 'La contraseña es requerida'
        ]
      },
      loginError: false
    }
  },

  watch: {
    email (newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        this.loginError = false
      }
    },
    password (newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        this.loginError = false
      }
    }
  },

  methods: {
    login () {
      if (!this.$refs.loginForm.validate()) { return }

      this.processingForm = true

      const data = {
        email: this.email,
        password: this.password
      }

      this.$auth.loginWith('firebaseAuth', { data })
        .catch(() => {
          this.loginError = true
        })
        .finally(() => {
          this.processingForm = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
