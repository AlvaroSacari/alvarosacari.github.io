<template>
  <v-container id="about" class="pa-4">
    <sectionTitle id="summary-title" title="Resumen" />

    <div class="row">
      <v-col>
        <p class="mb-0">
          Desarrollador de aplicaciones web desde el año 2015, con altas capacidades de aprendizaje, trabajo en equipo y buenos métodos de comunicación, siempre aprendiendo las nuevas tecnologías y dispuesto a resolver cualquier problema. Actualmente desarrollando el frontend de aplicaciones con Vue.js.
        </p>
      </v-col>
    </div>
  </v-container>
</template>

<script>
import sectionTitle from '~/components/core/sectionTitle.vue'

export default {
  components: {
    sectionTitle
  }
}
</script>

<style lang="scss" scoped>

</style>
