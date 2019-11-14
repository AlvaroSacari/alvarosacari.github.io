import goTo from 'vuetify/lib/services/goto'

export default function (to, from, savedPosition) {
  let scrollTo = 0

  if (to.hash) {
    scrollTo = to.hash
  } else if (savedPosition) {
    scrollTo = savedPosition.y
  }

  const options = { offset: 0 }

  goTo(scrollTo, options)
}
