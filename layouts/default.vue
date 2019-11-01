<template>
  <v-app>
    <NavigationDrawer />
    <AppBar />

    <v-content>
      <nuxt />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import Footer from '~/components/default_layout/Footer.vue'
import NavigationDrawer from '~/components/default_layout/NavigationDrawer.vue'
import AppBar from '~/components/default_layout/AppBar.vue'

export default {
  components: {
    Footer, NavigationDrawer, AppBar
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
