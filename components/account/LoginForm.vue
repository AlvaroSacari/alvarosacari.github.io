<template>
  <div>
    <GoogleAuthButton @update-google-logging-in="updateProcessingForm" class="mb-4" />
    <v-btn block class="mb-4" color="#1873eb" disabled>
      <v-icon left>
        mdi-facebook
      </v-icon>
      Ingresar con Facebook
    </v-btn>

    <v-fade-transition>
      <v-alert
        v-if="formError"
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
      @submit.prevent="login"
      lazy-validation
    >
      <v-text-field
        v-model="email"
        :rules="rules.email"
        type="email"
        outlined
        label="Correo electrónico"
      />
      <v-text-field
        v-model="password"
        :type="showPassword ? 'text': 'password'"
        :rules="rules.password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
        outlined
        label="Contraseña"
      />
    </v-form>

    <v-btn
      :loading="processingForm"
      :disabled="!validForm || processingForm"
      type="submit"
      class="mb-4"
      block
      form="loginForm"
      color="primary"
    >
      Ingresar
    </v-btn>
    <v-btn
      :to="{ name: 'register' }"
      text
      color="primary"
      block
    >
      Registrarme
    </v-btn>
  </div>
</template>

<script>
import GoogleAuthButton from '~/components/account/social_login/GoogleAuthButton.vue'

export default {
  components: {
    GoogleAuthButton
  },

  data () {
    return {
      email: '',
      password: '',
      processingForm: false,
      validForm: true,
      formError: false,
      rules: {
        email: [
          v => !!v || 'El correo electrónico es requerido',
          v => /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido'
        ],
        password: [
          v => !!v || 'La contraseña es requerida'
        ]
      },
      showPassword: false
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
    email (newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        this.formError = false
      }
    },

    password (newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        this.formError = false
      }
    },

    processingForm (newValue, oldValue) {
      this.$emit('update-processing-form', newValue)
    }
  },

  methods: {
    updateProcessingForm (value) {
      this.processingForm = value
    },

    login () {
      if (!this.$refs.loginForm.validate()) { return }

      this.$snackbar.info('Iniciando sesión ...')
      this.processingForm = true

      const data = {
        email: this.email,
        password: this.password
      }

      this.$auth.loginWith('firebaseAuth', { data })
        .then((response) => {
          this.$snackbar.success(`Bienvenido ${this.userName}`)
        })
        .catch(() => {
          this.$snackbar.error('Ocurrió un error al iniciar sesión')
          this.formError = true
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
