export const scrollMixin = {
  data () {
    return {
      scrollY: 0
    }
  },

  created () {
    if (process.browser) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('scroll', this.handleScroll)
    }
  },

  destroyed () {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },

  methods: {
    handleScroll () {
      this.scrollY = window.scrollY
    }
  }
}
