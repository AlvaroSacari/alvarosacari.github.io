<template>
  <v-navigation-drawer
    v-model="showDrawer"
    :floating="$vuetify.theme.dark"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
  >
    <v-img :aspect-ratio="16/9" :src="require('~/assets/images/code.jpeg')">
      <v-row align="end" class="lightbox fill-height">
        <v-col class="pb-0">
          <v-list dark class="pa-0">
            <v-list-item two-line>
              <v-list-item-avatar>
                <v-img :src="require('~/assets/images/avatar.png')" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="name" />
                <v-list-item-subtitle v-text="email" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-img>

    <NavigationDrawerList :items="items" />
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'
import NavigationDrawerList from '~/components/core/NavigationDrawerList.vue'

export default {
  components: {
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
      miniVariant: state => state.navigationDrawer.miniVariant,
      name: state => state.profile.name,
      email: state => state.profile.email
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

<style lang="scss">
.lightbox {
  box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 135px);
}
</style>
