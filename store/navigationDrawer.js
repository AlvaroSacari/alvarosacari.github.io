import {
  TOGGLE_NAVIGATION_DRAWER,
  REPLACE_SHOW_NAVIGATION_DRAWER
} from '~/types/mutation-types'

export const state = () => ({
  showDrawer: false,
  clipped: true,
  miniVariant: false,
  items: [
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
})

export const actions = {
  toggleNavigationDrawer ({ commit }) {
    commit('TOGGLE_NAVIGATION_DRAWER')
  },

  replaceShowNavigationDrawer ({ commit }, payload) {
    commit('REPLACE_SHOW_NAVIGATION_DRAWER', payload)
  }
}

export const mutations = {
  [TOGGLE_NAVIGATION_DRAWER] (state) {
    state.showDrawer = !state.showDrawer
  },

  [REPLACE_SHOW_NAVIGATION_DRAWER] (state, { show }) {
    state.showDrawer = show
  }
}
