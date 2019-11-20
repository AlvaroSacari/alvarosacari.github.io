import { firestoreAction } from 'vuexfire'
import { firestore } from '~/services/firebaseInit.js'

const COLLECTION = 'educationPlaces'

export const state = () => ({
  items: []
})

export const actions = {
  bindEducationPlaces: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef('items', firestore.collection(COLLECTION))
  }),

  addItem ({ commit }, payload) {
    const data = payload.data
    return firestore.collection(COLLECTION).add(data)
  }
}

export const mutations = {
}
