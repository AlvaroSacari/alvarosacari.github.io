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
      to: { name: 'index' }
    },
    {
      title: 'Acerca de',
      icon: 'mdi-account',
      to: { name: 'index', hash: '#about' }
    },
    {
      title: 'Portafolio',
      icon: 'mdi-rocket',
      to: { name: 'index', hash: '#portfolio' }
    },
    {
      title: 'Contacto',
      icon: 'mdi-account-plus',
      to: { name: 'index', hash: '#contact' }
    }
  ],
  items2: [
    {
      title: 'Dashboard',
      icon: 'mdi-speedometer',
      to: { name: 'dashboard' }
    }
  ]
})

export const getters = {
  items2: (state, getters, rootState, rootGetters) => {
    if (!rootState.auth.loggedIn) {
      return state.items2
    }

    return [...state.items2, {
      title: 'Educación',
      icon: 'mdi-laptop',
      to: { name: 'education-places' }
    }]
  }
}

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
