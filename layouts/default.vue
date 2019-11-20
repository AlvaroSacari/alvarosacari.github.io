<template>
  <v-app>
    <NavigationDrawer />
    <AppBar />

    <v-content>
      <nuxt />
    </v-content>

    <Footer />
    <Snackbar />
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import Footer from '~/components/default_layout/Footer.vue'
import NavigationDrawer from '~/components/default_layout/NavigationDrawer.vue'
import AppBar from '~/components/default_layout/AppBar.vue'
import Snackbar from '~/components/core/Snackbar.vue'
import { scrollMixin } from '~/mixins/scrollMixin'

export default {
  components: {
    Footer, NavigationDrawer, AppBar, Snackbar
  },

  mixins: [scrollMixin],

  watch: {
    scrollY (newValue, oldValue) {
      if (newValue === 0) {
        this.$router.push({ name: this.$route.name })
      }
    }
  },

  created () {
    if (this.$vuetify.breakpoint.lgAndUp) {
      this.replaceShowNavigationDrawer({ show: true })
    }
  },

  methods: {
    ...mapActions({
      replaceShowNavigationDrawer: 'navigationDrawer/replaceShowNavigationDrawer'
    })
  }
}
</script>
