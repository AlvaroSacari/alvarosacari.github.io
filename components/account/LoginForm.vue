<template>
  <div>
    <GoogleAuthButton class="mb-4" />

    <v-btn block class="mb-4" color="#1873eb" disabled>
      <v-icon left>
        mdi-facebook
      </v-icon>
      Ingresar con Facebook
    </v-btn>

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
      @submit.prevent="login"
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

    <v-btn
      :loading="processingLogin"
      :disabled="!validForm || processingLogin"
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
import { mapState, mapActions } from 'vuex'
import GoogleAuthButton from '~/components/account/social_login/GoogleAuthButton.vue'

export default {
  components: {
    GoogleAuthButton
  },

  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      loginError: null,
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
      showPassword: false
    }
  },

  computed: {
    ...mapState({
      processingLogin: state => state.user.processingLogin
    })
  },

  watch: {
    'form.email' (newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        this.loginError = null
      }
    },

    'form.password' (newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        this.loginError = null
      }
    }
  },

  methods: {
    ...mapActions({
      userLogin: 'user/userLogin'
    }),

    login () {
      if (!this.$refs.loginForm.validate()) { return }
      const data = this.form
      this.userLogin({ data })
        .catch((error) => {
          this.loginError = error
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
