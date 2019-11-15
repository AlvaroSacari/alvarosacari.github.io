<template>
  <v-navigation-drawer
    v-model="showDrawer"
    :floating="$vuetify.theme.dark"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
  >
    <NavigationDrawerImageTop />
    <NavigationDrawerList :items="items" />
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'
import NavigationDrawerImageTop from '~/components/core/NavigationDrawerImageTop.vue'
import NavigationDrawerList from '~/components/core/NavigationDrawerList.vue'

export default {
  components: {
    NavigationDrawerImageTop,
    NavigationDrawerList
  },

  data () {
    return {
      userMenu: [
        { title: 'Profile', icon: 'mdi-account' },
        { title: 'Logout', icon: 'mdi-exit-to-app' }
      ]
    }
  },

  computed: {
    ...mapState({
      items: state => state.navigationDrawer.items,
      clipped: state => state.navigationDrawer.clipped,
      miniVariant: state => state.navigationDrawer.miniVariant
    }),

    showDrawer: {
      get () {
        return this.$store.state.navigationDrawer.showDrawer
      },
      set (show) {
        this.$store.commit('navigationDrawer/REPLACE_SHOW_NAVIGATION_DRAWER', { show })
      }
    }
  }
}
</script>
