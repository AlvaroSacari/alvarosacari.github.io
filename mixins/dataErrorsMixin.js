export const dataErrorsMixin = {
  data () {
    return {
      errors: {}
    }
  },

  methods: {
    thereError (field) {
      if (!this.errors) { return false }

      const errors = this.errors.errors || null

      if (!errors) { return false }
      if (!errors[field]) { return false }

      return true
    },

    errorMessage (field) {
      if (!this.thereError(field)) { return [] }
      return this.errors.errors[field]
    },

    deleteError (field) {
      if (!this.thereError(field)) { return false }

      this.errors.errors[field] = undefined
      delete this.errors.errors[field]
    },

    setErrors (promiseError) {
      if (promiseError.response && promiseError.response.data) {
        this.errors = promiseError.response.data
      }
    }
  }
}
