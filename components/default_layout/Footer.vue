<template>
  <v-footer
    :inset="!clipped"
    :color="$vuetify.theme.dark ? 'grey darken-3' : 'primary'"
    :dark="!$vuetify.theme.dark"
    app
  >
    <span>
      © {{ year }} Desarrollado por
      <a
        :href="linkedIn"
        class="white--text"
        target="_blank"
      >{{ name }}</a>
    </span>
  </v-footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      clipped: state => state.navigationDrawer.clipped,
      name: state => state.profile.name,
      linkedIn: state => state.profile.linkedIn
    }),

    year () {
      return new Date().getFullYear()
    }
  }
}
</script>
