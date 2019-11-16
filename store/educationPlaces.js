import { firestoreAction } from 'vuexfire'
import { firestore } from '~/services/firebaseInit.js'

export const state = () => ({
  items: []
})

export const actions = {
  bindEducationPlaces: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef('items', firestore.collection('educationPlaces'))
  })
}

export const mutations = {
}
