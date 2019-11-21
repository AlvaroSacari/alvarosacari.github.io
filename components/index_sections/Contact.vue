<template>
  <v-container id="contact" class="pa-4">
    <sectionTitle id="contact-title" title="Contacto" />

    <div class="row">
      <v-col>
        <v-btn :href="`mailto:${email}?subject=Contacto`" color="primary" text class="text-lowercase">
          <v-icon left>
            mdi-email-outline
          </v-icon>
          {{ email }}
        </v-btn>
        <br>
        <v-btn color="primary" text class="text-capitalize">
          <v-icon left>
            mdi-map-marker
          </v-icon>
          {{ address }}
        </v-btn>
      </v-col>
      <v-col>
        <v-btn :href="linkedIn" color="primary" text class="text-capitalize" target="_blank">
          <v-icon left>
            mdi-linkedin-box
          </v-icon>
          LinkedIn
        </v-btn>
        <br>
        <v-btn :href="facebook" color="primary" text class="text-capitalize" target="_blank">
          <v-icon left>
            mdi-facebook-box
          </v-icon>
          Facebook
        </v-btn>
      </v-col>
      <v-col>
        <v-btn :href="github" color="primary" text class="text-capitalize" target="_blank">
          <v-icon left>
            mdi-github-circle
          </v-icon>
          Github
        </v-btn>
        <br>
        <v-btn :href="gitlab" color="primary" text class="text-capitalize" target="_blank">
          <v-icon left>
            mdi-gitlab
          </v-icon>
          Gitlab
        </v-btn>
      </v-col>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import sectionTitle from '~/components/core/sectionTitle.vue'

export default {
  components: {
    sectionTitle
  },

  computed: {
    ...mapState({
      name: state => state.profile.name,
      email: state => state.profile.email,
      linkedIn: state => state.profile.linkedIn,
      facebook: state => state.profile.facebook,
      address: state => state.profile.address,
      github: state => state.profile.github,
      gitlab: state => state.profile.gitlab
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
