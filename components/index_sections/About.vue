<template>
  <v-container id="about" class="pa-4">
    <h2 class="display-1 my-4">
      <v-btn @click="$vuetify.goTo('#about')" icon color="primary">
        <v-icon>
          mdi-pound
        </v-icon>
      </v-btn>
      Resumen
    </h2>

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
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
