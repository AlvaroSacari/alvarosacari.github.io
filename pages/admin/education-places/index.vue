<template>
  <v-container class="pa-4">
    <Breadcrumbs :items="breadcrumbs" />
    <sectionTitle id="education-title" title="Educación" />

    <v-row>
      <v-col>
        <v-card :loading="processingBind || processingAdd || processingDelete">
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
            <v-btn @click="showAddItemRow=true" color="primary" class="mx-2 text-capitalize">
              Agregar
            </v-btn>
            <v-btn height="40" width="40" icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>

          <v-data-table
            :headers="tableHeaders"
            :items="educationPlaces"
            :search="search"
            calculate-widths
          >
            <template v-if="showAddItemRow" v-slot:body.prepend="{ headers}">
              <CreateEducationPlaceForm v-model="showAddItemRow" :headers="headers" />
            </template>
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
                    <v-btn v-on="on" @click="showDelete(item.id)" color="error" icon>
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
</v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Breadcrumbs from '~/components/core/Breadcrumbs.vue'
import sectionTitle from '~/components/core/sectionTitle.vue'
import CreateEducationPlaceForm from '~/components/forms/CreateEducationPlaceForm.vue'

export default {
  components: {
    Breadcrumbs,
    sectionTitle,
    CreateEducationPlaceForm
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
      tableHeaders: [
        { text: 'Lugar', value: 'place' },
        { text: 'Grado', value: 'degree' },
        { text: 'Detalle', value: 'detail' },
        { text: '', value: 'action', sortable: false, width: 85 }
      ],
      search: '',
      showCreateModal: false,
      showAddItemRow: false,
      showEditModal: false
    }
  },

  computed: {
    ...mapState({
      educationPlaces: state => state.educationPlaces.items,
      processingBind: state => state.educationPlaces.processingBind,
      processingAdd: state => state.educationPlaces.processingAdd,
      processingDelete: state => state.educationPlaces.processingDelete
    })
  },

  created () {
    this.bindEducationPlaces()
  },

  methods: {
    ...mapActions({
      bindEducationPlaces: 'educationPlaces/bindEducationPlaces',
      deleteItem: 'educationPlaces/deleteItem'
    }),

    editItem (item) {},

    showDelete (id) {
      const swal = this.$swal({
        title: '¿Está seguro de eliminar el registro?',
        text: 'Esta acción no se podrá revertir',
        type: 'warning',
        confirmButtonColor: 'red',
        confirmButtonText: 'Si, eliminar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar'
      })

      swal.then((result) => {
        if (result.dismiss) { return false }
        this.deleteItem({ id })
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
