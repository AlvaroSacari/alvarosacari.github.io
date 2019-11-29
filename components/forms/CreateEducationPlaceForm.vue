<template>
  <tr>
    <td :colspan="headers.length" class="pa-0">
      <v-card :loading="processingAdd" flat tile hover>
        <v-card-text>
          <v-form
            id="createEducationPlaceForm"
            ref="createEducationPlaceForm"
            v-model="validForm"
            @submit.prevent="create"
            lazy-validation
          >
            <v-row>
              <v-col class="py-0" cols="12" sm="6" md="4">
                <v-text-field v-model="form.place" :rules="rules.place" autofocus outlined label="Lugar" />
              </v-col>
              <v-col class="py-0" cols="12" sm="6" md="4">
                <v-text-field v-model="form.degree" outlined label="Grado" />
              </v-col>
              <v-col class="py-0" cols="12" sm="12" md="4">
                <v-text-field v-model="form.detail" outlined label="Detalle" />
              </v-col>
            </v-row>
          </v-form>
          <div class="text-right">
            <v-btn @click="hideComponent" class="text-capitalize" text>
              Cancelar
            </v-btn>
            <v-btn
              :disabled="!validForm || processingAdd"
              :loading="processingAdd"
              class="text-capitalize"
              color="primary"
              type="submit"
              form="createEducationPlaceForm"
            >
              Agregar
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </td>
  </tr>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },

    headers: {
      type: Array,
      default () { return [] }
    }
  },

  data () {
    return {
      form: {
        place: '',
        degree: '',
        detail: ''
      },
      rules: {
        place: [
          v => !!v || 'El lugar es requerido'
        ]
      },
      validForm: true
    }
  },
  computed: {
    ...mapState({
      processingAdd: state => state.educationPlaces.processingAdd
    })
  },

  methods: {
    ...mapActions({
      addItem: 'educationPlaces/addItem'
    }),

    hideComponent () {
      this.$emit('input', false)
    },

    create () {
      if (!this.$refs.createEducationPlaceForm.validate()) { return false }

      const data = this.form
      this.addItem({ data })
      this.hideComponent()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
