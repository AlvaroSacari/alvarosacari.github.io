<template>
  <v-navigation-drawer
    v-model="value.drawer"
    :mini-variant="value.miniVariant"
    :clipped="value.clipped"
    fixed
    app
  >
    <v-img :aspect-ratio="16/9" :src="require('~/assets/images/material.jpg')">
      <v-row align="end" class="lightbox fill-height">
        <v-col class="pb-0">
          <v-list dark class="pa-0">
            <v-list-item two-line>
              <v-list-item-avatar>
                <v-img :src="require('~/assets/images/face.jpg')" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="user.name" />
                <v-list-item-subtitle v-text="user.email" />
              </v-list-item-content>

              <v-list-item-action>
                <v-menu offset-y open-on-hover>
                  <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                      <v-icon>
                        mdi-dots-vertical
                      </v-icon>
                    </v-btn>
                  </template>
                  <v-list nav dense>
                    <v-list-item
                      v-for="(item, index) in userMenu"
                      :key="index"
                      @click="() => {}"
                    >
                      <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-img>

    <NavigationDrawerList :items="items" />
  </v-navigation-drawer>
</template>

<script>
import NavigationDrawerList from '~/components/core/NavigationDrawerList.vue'

export default {
  components: {
    NavigationDrawerList
  },

  props: {
    value: {
      type: Object,
      default () { return {} }
    }
  },

  data () {
    return {
      user: {
        name: 'Alvaro Sacari',
        email: 'alvaro.sacari@gmail.com'
      },

      userMenu: [
        { title: 'Profile', icon: 'mdi-account' },
        { title: 'Logout', icon: 'mdi-exit-to-app' }
      ]
    }
  },

  computed: {
    items () {
      const items = [
        {
          title: 'Home',
          icon: 'mdi-home',
          to: '/'
        },
        {
          title: 'About',
          icon: 'mdi-account',
          to: '/about'
        },
        {
          title: 'Portfolio',
          icon: 'mdi-rocket',
          to: '/portfolio'
        },
        {
          title: 'Blog',
          icon: 'mdi-book',
          to: '/blog'
        },
        {
          title: 'Contact',
          icon: 'mdi-account-plus',
          to: '/contact'
        }
      ]

      return items
    }
  }
}
</script>

<style lang="scss">
.v-navigation-drawer {
  transition: none !important;
}

.lightbox {
  box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
}
</style>
