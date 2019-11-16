import { auth } from '~/services/firebaseInit.js'

export default class FirebaseAuthScheme {
  constructor (auth, options) {
    this.$auth = auth
    this.name = options._name

    this.options = Object.assign({}, options)
  }

  mounted () {
    return this.$auth.fetchUserOnce()
  }

  async login (endpoint) {
    await this._logoutLocally()

    const email = endpoint.data.email
    const password = endpoint.data.password

    await auth.signInWithEmailAndPassword(email, password)

    return this.fetchUser()
  }

  async fetchUser (endpoint) {
    const user = await this.onAuthStateChanged()

    if (!user) { return }

    const userData = {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      photoURL: user.photoURL,
      isAnonymous: user.isAnonymous,
      uid: user.uid,
      providerData: user.providerData
    }

    this.$auth.setUser(userData)
  }

  onAuthStateChanged () {
    return new Promise((resolve) => {
      auth.onAuthStateChanged((user) => {
        resolve(user)
      })
    })
  }

  async logout (endpoint) {
    await auth.signOut()
    return this._logoutLocally()
  }

  // eslint-disable-next-line require-await
  async _logoutLocally () {
    return this.$auth.reset()
  }
}
