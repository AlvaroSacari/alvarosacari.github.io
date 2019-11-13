<template>
  <div>
    <v-fade-transition>
      <v-alert
        v-if="formError"
        prominent
        type="error"
        border="left"
      >
        {{ formError.message }}
      </v-alert>
    </v-fade-transition>

    <v-form
      id="registerForm"
      ref="registerForm"
      v-model="validForm"
      lazy-validation
      @submit.prevent="register"
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
    <div class="text-center">
      <v-btn
        type="submit"
        :loading="processingForm"
        :disabled="!validForm || processingForm"
        block
        form="registerForm"
        color="primary"
      >
        Registrarme
      </v-btn>
    </div>
  </div>
</template>

<script>
import { auth } from '@/services/fireinit.js'

export default {
  data () {
    return {
      email: '',
      password: '',
      processingForm: false,
      validForm: true,
      formError: null,
      rules: {
        email: [
          v => !!v || 'El correo electrónico es requerido',
          v => /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido'
        ],
        password: [
          v => !!v || 'La contraseña es requerida',
          v => (v && v.length >= 6) || 'La contraseña debe tener al menos 6 caracteres'
        ]
      }
    }
  },

  watch: {
    email (newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        this.formError = null
      }
    },

    password (newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        this.formError = null
      }
    }
  },

  methods: {
    register () {
      if (!this.$refs.registerForm.validate()) { return }

      this.processingForm = true
      this.$emit('update-processing-form', true)

      auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.login(this.email, this.password)
        })
        .catch((error) => {
          this.formError = error
        })
        .finally(() => {
          this.processingForm = false
          this.$emit('update-processing-form', false)
        })
    },

    login (email, password) {
      this.processingForm = true
      this.$emit('update-processing-form', true)

      const data = {
        email: this.email,
        password: this.password
      }

      this.$auth.loginWith('firebaseAuth', { data })
        .then((response) => {
          this.$router.push({ name: 'dashboard' })
        })
        .catch((error) => {
          this.formError = error
        })
        .finally(() => {
          this.processingForm = false
          this.$emit('update-processing-form', false)
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
