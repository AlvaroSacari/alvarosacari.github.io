import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyA3vO5dkJaSNi0HBJR8vPYlJiv8nk3sTfg',
  authDomain: 'alvarosacari-github-io.firebaseapp.com',
  databaseURL: 'https://alvarosacari-github-io.firebaseio.com',
  projectId: 'alvarosacari-github-io',
  storageBucket: 'alvarosacari-github-io.appspot.com',
  messagingSenderId: '555464910700',
  appId: '1:555464910700:web:92e342755e5a557e363549',
  measurementId: 'G-HYK02K1QPR'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export default firebase
