<template>
  <div>
    <v-form
      id="registerForm"
      ref="registerForm"
      v-model="validForm"
      @submit.prevent="register"
      lazy-validation
    >
      <v-text-field
        v-model="form.email"
        :rules="rules.email"
        type="email"
        outlined
        label="Correo electrónico"
      />
      <v-text-field
        v-model="form.password"
        :type="showPassword ? 'text': 'password'"
        :rules="rules.password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
        outlined
        label="Contraseña"
      />
    </v-form>
    <div class="text-center">
      <v-btn
        :loading="processingRegister"
        :disabled="!validForm || processingRegister"
        type="submit"
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
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      validForm: true,
      rules: {
        email: [
          v => !!v || 'El correo electrónico es requerido',
          v => /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido'
        ],
        password: [
          v => !!v || 'La contraseña es requerida',
          v => (v && v.length >= 6) || 'La contraseña debe tener al menos 6 caracteres'
        ]
      },
      showPassword: false
    }
  },

  computed: {
    ...mapState({
      processingRegister: state => state.user.processingRegister
    })
  },

  methods: {
    ...mapActions({
      userRegister: 'user/userRegister',
      userLogin: 'user/userLogin'
    }),

    async register () {
      const data = {
        email: this.form.email,
        password: this.form.password
      }

      if (!this.$refs.registerForm.validate()) { return }

      try {
        await this.userRegister({ data })
        await this.userLogin({ data })
        this.$router.push({ name: 'admin-dashboard' })
      } catch (error) {
      }
    }

  }
}
</script>

<style lang="scss" scoped>

</style>
