<template>
  <v-container class="pa-4">
    <Breadcrumbs :items="breadcrumbs" />
    <sectionTitle id="education-title" title="Educación" />

    <v-row>
      <v-col>
        <v-card :loading="loadingData">
          <v-app-bar flat>
            <v-text-field
              v-model="search"
              dense
              outlined
              placeholder="Buscar"
              hide-details
              prepend-inner-icon="mdi-magnify"
              clearable
            />
            <v-btn @click="showCreateModal=true" color="primary" class="mx-2 text-capitalize">
              Agregar
            </v-btn>
            <v-btn height="40" width="40" icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>

          <v-data-table
            :headers="headers"
            :items="educationPlaces"
            :search="search"
            calculate-widths
          >
            <template v-slot:item.action="{ item }">
              <div class="mx-n3">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" @click="editItem(item)" color="info" icon>
                      <v-icon>
                        mdi-pencil
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>Editar</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" @click="editItem(item)" color="error" icon>
                      <v-icon>
                        mdi-delete
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>Eliminar</span>
                </v-tooltip>
              </div>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <CreateEducationPlaceModal v-model="showCreateModal" />
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Breadcrumbs from '~/components/core/Breadcrumbs.vue'
import sectionTitle from '~/components/core/sectionTitle.vue'
import CreateEducationPlaceModal from '~/components/modals/CreateEducationPlaceModal.vue'

export default {
  components: {
    Breadcrumbs,
    sectionTitle,
    CreateEducationPlaceModal
  },

  data () {
    return {
      breadcrumbs: [
        {
          text: 'Dashboard',
          to: { name: 'admin-dashboard' }
        },
        {
          text: 'Educación',
          to: { name: 'admin-education-places' }
        }
      ],
      headers: [
        { text: 'Lugar', value: 'place' },
        { text: 'Grado', value: 'degree' },
        { text: 'Detalle', value: 'detail' },
        { text: '', value: 'action', sortable: false, width: 85 }
      ],
      loadingData: false,
      search: '',
      showCreateModal: false
    }
  },

  computed: {
    ...mapState({
      educationPlaces: state => state.educationPlaces.items
    })
  },

  created () {
    this.loadingData = true
    this.bindEducationPlaces().finally(() => {
      this.loadingData = false
    })
  },

  methods: {
    ...mapActions({
      bindEducationPlaces: 'educationPlaces/bindEducationPlaces'
    }),

    editItem (item) {}

  }
}
</script>

<style lang="scss" scoped>

</style>
