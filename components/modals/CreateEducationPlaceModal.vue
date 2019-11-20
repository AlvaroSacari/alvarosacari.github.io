<template>
  <v-dialog
    v-model="showModal"
    width="500"
  >
    <v-card>
      <v-app-bar color="primary" dark flat>
        <v-toolbar-title>Nuevo estudio</v-toolbar-title>
      </v-app-bar>

      <v-card-text class="pa-4">
        <v-form
          id="createEducationPlaceForm"
          ref="createEducationPlaceForm"
          @submit.prevent="create"
        >
          <v-text-field v-model="form.place" :rules="rules.place" outlined label="Lugar" />
          <v-text-field v-model="form.degree" outlined label="Grado" />
          <v-text-field v-model="form.detail" outlined label="Detalle" />
        </v-form>
      </v-card-text>

      <v-card-actions class="pa-4">
        <v-spacer />
        <v-btn
          @click="showModal = false"
          class="text-capitalize"
          text
        >
          Cancelar
        </v-btn>
        <v-btn
          type="submit"
          form="createEducationPlaceForm"
          class="text-capitalize"
          color="primary"
        >
          Guardar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      showModal: false,
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
      error: null
    }
  },

  watch: {
    value (newValue, oldValue) {
      this.showModal = newValue
    },

    showModal (newValue, oldValue) {
      this.$emit('input', newValue)

      if (!newValue) {
        this.resetForm()
      }
    }
  },

  methods: {
    ...mapActions({
      addItem: 'educationPlaces/addItem'
    }),

    resetForm () {
      this.$refs.createEducationPlaceForm.resetValidation()
      Object.assign(this.$data, this.$options.data.call(this))
    },

    create () {
      if (!this.$refs.createEducationPlaceForm.validate()) { return false }

      const data = this.form

      this.addItem({ data })
        .then((response) => {
          this.showModal = false
        })
        .catch((error) => {
          this.error = error
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
