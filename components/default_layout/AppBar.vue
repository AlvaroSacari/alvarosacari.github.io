<template>
  <v-app-bar
    :color="$vuetify.theme.dark ? 'grey darken-3' : 'primary'"
    :dark="!$vuetify.theme.dark"
    :clipped-left="clipped"
    fixed
    app
  >
    <v-app-bar-nav-icon @click="toggleNavigationDrawer" />
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer />
    <div style="width:128px">
      <v-select
        :items="['Español', 'English']"
        :menu-props="{
          offsetY:true
        }"
        hide-details
        placeholder="Idioma"
        outlined
        dense
      />
    </div>

    <v-tooltip bottom>
      <template v-slot:activator="{on}">
        <v-btn v-on="on" @click="$vuetify.theme.dark = !$vuetify.theme.dark" icon>
          <v-icon>
            mdi-invert-colors
          </v-icon>
        </v-btn>
      </template>
      <span>{{ $vuetify.theme.dark ? 'Usar tema claro' : 'Usar tema oscuro' }}</span>
    </v-tooltip>
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
