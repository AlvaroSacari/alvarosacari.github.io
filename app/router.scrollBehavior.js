import goTo from 'vuetify/lib/services/goto'
import { Breakpoint } from 'vuetify/lib/services/breakpoint'

const breakpoint = new Breakpoint()

export default function (to, from, savedPosition) {
  let scrollTo = 0

  if (to.hash) {
    scrollTo = to.hash
  } else if (savedPosition) {
    scrollTo = savedPosition.y
  }

  const options = { offset: 0 }

  if (process.env.NODE_ENV !== 'production') {
    options.offset = breakpoint.smAndDown ? 56 : 64
  }

  goTo(scrollTo, options)
}
