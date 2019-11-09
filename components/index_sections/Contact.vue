<template>
  <v-container id="contact" class="my-8">
    <h2 class="display-1 mb-5">
      <v-btn :to="{ name:'index', hash:'#contact' }" icon color="primary">
        <v-icon>
          mdi-pound
        </v-icon>
      </v-btn>
      Contacto
    </h2>

    <div class="row">
      <v-col>
        <p>alvaro.sacari@gmail.com</p>
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
