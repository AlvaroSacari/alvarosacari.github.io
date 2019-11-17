<template>
  <v-container>
    <Breadcrumbs :items="breadcrumbs" />
    <h1 class="display-1 mb-5">
      Dashboard
    </h1>
  </v-container>
</template>

<script>
import Breadcrumbs from '~/components/core/Breadcrumbs.vue'

export default {
  components: {
    Breadcrumbs
  },

  data () {
    return {
      breadcrumbs: [
        {
          text: 'Dashboard',
          to: { name: 'dashboard' }
        }
      ]
    }
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
