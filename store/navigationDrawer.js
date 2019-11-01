import {
  TOGGLE_NAVIGATION_DRAWER,
  REPLACE_SHOW_NAVIGATION_DRAWER
} from '~/types/mutation-types'

export const state = () => ({
  showDrawer: false,
  clipped: false,
  miniVariant: false,
  items: [
    {
      title: 'Inicio',
      icon: 'mdi-home',
      to: '/'
    },
    {
      title: 'Acerca de',
      icon: 'mdi-account',
      to: '/about'
    },
    {
      title: 'Portafolio',
      icon: 'mdi-rocket',
      to: '/portfolio'
    },
    {
      title: 'Contacto',
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
