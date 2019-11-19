<template>
  <v-container class="pa-4">
    <Breadcrumbs :items="breadcrumbs" />

    <h2 class="py-4">
      <v-btn icon color="primary">
        <v-icon>
          mdi-pound
        </v-icon>
      </v-btn>
      Dashboard
    </h2>
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
