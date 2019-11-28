<template>
  <v-img :aspect-ratio="16/9" :src="backgroundImg">
    <v-row
      :class="{
        lightbox: $auth.loggedIn,
        'lightbox-dark': !$auth.loggedIn,
      }"
      align="end"
      class="fill-height"
    >
      <v-col class="pb-0">
        <v-list dark class="pa-0" dense>
          <v-list-item two-line>
            <v-list-item-avatar color="primary" class="mr-4">
              <v-img v-if="!$auth.loggedIn" :src="require('~/assets/images/avatar.png')" />
              <template v-else>
                <v-img v-if="$auth.user.photoURL" :src="$auth.user.photoURL" />
                <v-icon v-else>
                  mdi-account
                </v-icon>
              </template>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="userName" />
              <v-list-item-subtitle v-text="emailToShow" />
            </v-list-item-content>

            <v-list-item-action v-if="$auth.loggedIn">
              <v-tooltip bottom>
                <template v-slot:activator="{on}">
                  <v-btn v-on="on" @click="userLogout" icon>
                    <v-icon>mdi-logout-variant</v-icon>
                  </v-btn>
                </template>
                <span>Cerrar sesión</span>
              </v-tooltip>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-img>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      name: state => state.profile.name,
      email: state => state.profile.email
    }),

    ...mapGetters({
      userName: 'user/userName'
    }),

    emailToShow () {
      if (!this.$auth.loggedIn) {
        return this.email
      }

      return this.$auth.user.email
    },

    backgroundImg () {
      if (!this.$auth.loggedIn) {
        return require('~/assets/images/code.jpeg')
      }
      return require('~/assets/images/material.jpg')
    }
  },

  methods: {
    ...mapActions({
      userLogout: 'user/userLogout'
    })
  }
}
</script>

<style lang="scss" scoped>
  .lightbox {
    box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }
  .lightbox-dark {
    box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 135px);
  }
</style>
