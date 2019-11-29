import { firestoreAction } from 'vuexfire'
import firebase, { firestore } from '~/services/firebaseInit.js'
import {
  REPLACE_PROCESSING_BIND,
  REPLACE_PROCESSING_ADD,
  REPLACE_PROCESSING_DELETE
} from '~/types/mutation-types'

const COLLECTION = 'educationPlaces'

export const state = () => ({
  items: [],
  processingBind: false,
  processingAdd: false,
  processingDelete: false
})

export const actions = {
  bind: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef(
      'items',
      firestore.collection(COLLECTION).orderBy('createdAt', 'desc')
    )
  }),

  bindEducationPlaces ({ commit, dispatch }) {
    commit('REPLACE_PROCESSING_BIND', { processing: true })

    const promise = dispatch('bind')

    promise.finally(() => {
      commit('REPLACE_PROCESSING_BIND', { processing: false })
    })

    return promise
  },

  addItem ({ commit }, payload) {
    const data = payload.data
    data.createdAt = firebase.firestore.FieldValue.serverTimestamp()
    data.updatedAt = firebase.firestore.FieldValue.serverTimestamp()

    const promise = firestore.collection(COLLECTION).add(data)

    this.$snackbar.info('Creando registro')
    commit('REPLACE_PROCESSING_ADD', { processing: true })

    promise.then((response) => {
      this.$snackbar.success('Registro creado con éxito')
    })

    promise.catch((error) => {
      this.$snackbar.error(`Ocurrió un error: ${error.message}`)
    })

    promise.finally(() => {
      commit('REPLACE_PROCESSING_ADD', { processing: false })
    })

    return promise
  },

  deleteItem ({ commit }, payload) {
    const id = payload.id
    const promise = firestore.collection(COLLECTION).doc(id).delete()

    this.$snackbar.info('Eliminando registro')
    commit('REPLACE_PROCESSING_DELETE', { processing: true })

    promise.then((response) => {
      this.$snackbar.success('Registro eliminado con éxito')
    })

    promise.catch((error) => {
      this.$snackbar.error(`Ocurrió un error: ${error.message}`)
    })

    promise.finally(() => {
      commit('REPLACE_PROCESSING_DELETE', { processing: false })
    })

    return promise
  }
}

export const mutations = {
  [REPLACE_PROCESSING_BIND] (state, { processing }) {
    state.processingBind = processing
  },

  [REPLACE_PROCESSING_ADD] (state, { processing }) {
    state.processingAdd = processing
  },

  [REPLACE_PROCESSING_DELETE] (state, { processing }) {
    state.processingDelete = processing
  }
}
