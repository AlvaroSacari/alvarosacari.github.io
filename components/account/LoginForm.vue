<template>
  <div>
    <GoogleAuthButton class="mb-4" @update-google-logging-in="updateProcessingForm" />
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
        :type="showPassword ? 'text': 'password'"
        outlined
        label="Contraseña"
        :rules="rules.password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
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

      this.processingForm = true

      const data = {
        email: this.email,
        password: this.password
      }

      this.$auth.loginWith('firebaseAuth', { data })
        .catch(() => {
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
