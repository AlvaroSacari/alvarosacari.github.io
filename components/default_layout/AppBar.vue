<template>
  <v-app-bar
    dark
    color="primary"
    :clipped-left="clipped"
    fixed
    app
  >
    <v-app-bar-nav-icon v-if="!$vuetify.breakpoint.lgAndUp" @click="toggleNavigationDrawer" />
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      clipped: state => state.navigationDrawer.clipped,
      title: state => state.profile.name
    })
  },

  methods: {
    ...mapActions({
      toggleNavigationDrawer: 'navigationDrawer/toggleNavigationDrawer'
    })
  }
}
</script>
