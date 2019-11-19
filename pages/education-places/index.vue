<template>
  <v-container class="pa-4">
    <Breadcrumbs :items="breadcrumbs" />

    <div id="education-places-table">
      <h2 class="py-4">
        <v-btn @click="$vuetify.goTo('#education-places-table')" icon color="primary">
          <v-icon>
            mdi-pound
          </v-icon>
        </v-btn>
        Educación
      </h2>

      <v-card>
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
          <v-btn @click="dialog=true" color="primary" class="mx-2 text-capitalize">
            Agregar
          </v-btn>
          <v-btn height="40" width="40" icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar>

        <v-data-table
          :headers="headers"
          :items="educationPlaces"
          :loading="loadingData"
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
    </div>

    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-app-bar color="primary" dark flat>
          <v-toolbar-title>Nuevo estudio</v-toolbar-title>
        </v-app-bar>

        <v-card-text class="pa-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-card-actions class="pa-4">
          <v-spacer />
          <v-btn
            @click="dialog = false"
            class="text-capitalize"
            text
          >
            Cancelar
          </v-btn>
          <v-btn
            class="text-capitalize"
            color="primary"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
        { text: 'Detalle', value: 'detail' },
        { text: '', value: 'action', sortable: false, width: 85 }
      ],
      loadingData: false,
      search: '',
      dialog: false
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
