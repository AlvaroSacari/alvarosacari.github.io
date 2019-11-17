<template>
  <v-container>
    <Breadcrumbs :items="breadcrumbs" />

    <h2 class="display-1 mb-5">
      Educación
    </h2>

    <v-card>
      <v-app-bar flat>
        <v-text-field
          dense
          outlined
          placeholder="Buscar"
          hide-details
          prepend-inner-icon="mdi-magnify"
        />
        <v-btn color="primary" class="mx-2 text-capitalize">
          Agregar
        </v-btn>
        <v-btn height="40" width="40" icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-data-table
        :headers="headers"
        :items="educationPlaces"
      />
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
        },
        {
          text: 'Educación',
          to: { name: 'education-places' }
        }
      ],
      headers: [
        { text: 'Lugar', value: 'place' },
        { text: 'Grado', value: 'degree' },
        { text: 'Detalle', value: 'detail' }
      ]
    }
  },

  computed: {
    ...mapState({
      educationPlaces: state => state.educationPlaces.items
    })
  },

  created () {
    this.bindEducationPlaces()
  },

  methods: {
    ...mapActions({
      bindEducationPlaces: 'educationPlaces/bindEducationPlaces'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
