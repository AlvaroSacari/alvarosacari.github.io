import { auth } from '~/services/firebaseInit.js'
import {
  REPLACE_PROCESSING_LOGIN,
  REPLACE_PROCESSING_REGISTER
} from '~/types/mutation-types'

export const state = () => ({
  processingLogin: false,
  processingRegister: false
})

export const getters = {
  userName: (state, getters, rootState, rootGetters) => {
    if (!rootState.auth.loggedIn) {
      return null
    }
    if (rootState.auth.user && rootState.auth.user.displayName) {
      return rootState.auth.user.displayName
    }
    return rootState.auth.user.email.split('@')[0]
  }
}

export const actions = {
  userLogin ({ commit, getters }, payload) {
    const data = payload.data || {}

    this.$snackbar.info('Iniciando sesión')
    commit('REPLACE_PROCESSING_LOGIN', { processing: true })

    return new Promise((resolve, reject) => {
      this.$auth.loginWith('firebaseAuth', { data })
        .then((response) => {
          this.$snackbar.success(`Bienvenido ${getters.userName}`)
          resolve(response)
        })
        .catch((error) => {
          this.$snackbar.error(`Ocurrió un error: ${error.message}`)
          reject(error)
        })
        .finally(() => {
          commit('REPLACE_PROCESSING_LOGIN', { processing: false })
        })
    })
  },

  userLoginWithGoogle ({ commit, getters }) {
    this.$snackbar.info('Iniciando sesión')
    commit('REPLACE_PROCESSING_LOGIN', { processing: true })

    return new Promise((resolve, reject) => {
      this.$auth.strategies.firebaseAuth.loginWithGoogle()
        .then((response) => {
          this.$snackbar.success(`Bienvenido ${getters.userName}`)
          resolve(response)
        })
        .catch((error) => {
          this.$snackbar.error(`Ocurrió un error: ${error.message}`)
          reject(error)
        })
        .finally(() => {
          commit('REPLACE_PROCESSING_LOGIN', { processing: false })
        })
    })
  },

  userLogout ({ commit, getters }) {
    const userName = getters.userName
    this.$snackbar.info('Cerrando sesión')

    return new Promise((resolve, reject) => {
      this.$auth.logout()
        .then((response) => {
          this.$snackbar.success(`Hasta luego ${userName}`)
          resolve(response)
        })
        .catch((error) => {
          this.$snackbar.error(`Ocurrió un error: ${error.message}`)
          reject(error)
        })
    })
  },

  userRegister ({ commit }, payload) {
    const email = payload.data.email
    const password = payload.data.password

    commit('REPLACE_PROCESSING_REGISTER', { processing: true })
    this.$snackbar.info('Registrando usuario')

    return new Promise((resolve, reject) => {
      auth.createUserWithEmailAndPassword(email, password)
        .then((response) => {
          this.$snackbar.success('Usuario registrado correctamente')
          resolve(response)
        })
        .catch((error) => {
          this.$snackbar.error(`Ocurrió un error: ${error.message}`)
          reject(error)
        })
        .finally(() => {
          commit('REPLACE_PROCESSING_REGISTER', { processing: false })
        })
    })
  }
}

export const mutations = {
  [REPLACE_PROCESSING_LOGIN] (state, { processing }) {
    state.processingLogin = processing
  },

  [REPLACE_PROCESSING_REGISTER] (state, { processing }) {
    state.processingRegister = processing
  }
}
