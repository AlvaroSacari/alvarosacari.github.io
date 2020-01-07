<template>
  <v-container id="about" class="pa-4">
    <sectionTitle id="summary-title" title="Resumen" />

    <div class="row">
      <v-col>
        <p>Soy desarrollador web desde el año 2016. Por los ultimos 4 años, Me he especializado en el desarrollo front-end y SPA (Single Page Application).</p>
        <p class="mb-0">
          Crear sitios web faciles de usar y amigables para el usuario son realmente una de mis pasiones. Busco activamente nuevas tecnologías y me mantengo actualizado sobre las tendencias y los avances de la industria para mi cliente.
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
