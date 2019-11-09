<template>
  <v-app-bar
    dark
    color="primary"
    :clipped-left="clipped"
    fixed
    app
  >
    <v-app-bar-nav-icon @click="toggleNavigationDrawer" />
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer />
    <v-btn icon target="_blank" :href="linkedIn">
      <v-icon>mdi-linkedin-box</v-icon>
    </v-btn>
    <v-btn icon target="_blank" :href="github">
      <v-icon>mdi-github-circle</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      clipped: state => state.navigationDrawer.clipped,
      title: state => state.profile.name,
      linkedIn: state => state.profile.linkedIn,
      github: state => state.profile.github
    })
  },

  methods: {
    ...mapActions({
      toggleNavigationDrawer: 'navigationDrawer/toggleNavigationDrawer'
    })
  }
}
</script>
