<template>
  <v-footer
    :inset="!clipped"
    app
    :color="$vuetify.theme.dark ? false : 'primary'"
    :dark="!$vuetify.theme.dark"
  >
    <span>
      © {{ year }} Desarrollado por
      <a
        class="white--text"
        :href="linkedIn"
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
