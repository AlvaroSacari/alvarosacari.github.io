<template>
  <v-container id="contact" class="my-8">
    <h2 class="display-1 mb-5">
      <v-btn :to="{ name:'index', hash:'#contact' }" icon color="primary">
        <v-icon>
          mdi-pound
        </v-icon>
      </v-btn>
      Contacto
    </h2>

    <div class="row">
      <v-col>
        <v-btn color="primary" text class="text-lowercase" :href="`mailto:${email}?subject=Contacto`">
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
        <v-btn color="primary" text class="text-capitalize" target="_blank" :href="linkedIn">
          <v-icon left>
            mdi-linkedin-box
          </v-icon>
          LinkedIn
        </v-btn>
        <br>
        <v-btn color="primary" text class="text-capitalize" target="_blank" :href="facebook">
          <v-icon left>
            mdi-facebook-box
          </v-icon>
          Facebook
        </v-btn>
      </v-col>
      <v-col>
        <v-btn color="primary" text class="text-capitalize" target="_blank" :href="github">
          <v-icon left>
            mdi-github-circle
          </v-icon>
          Github
        </v-btn>
        <br>
        <v-btn color="primary" text class="text-capitalize" target="_blank" :href="gitlab">
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

export default {
  data () {
    return {

    }
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
