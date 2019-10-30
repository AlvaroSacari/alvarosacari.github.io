import alvarosacari.github.io from '../nuxt.config';
<template>
  <div>
    <v-parallax
      height="300"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">
            Alvaro Sacari
          </h1>
          <h4 class="subheading">
            Desarrollador Frontend
          </h4>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {

  data () {
    return {
      breadcrumbs: [
        {
          text: 'Home',
          disabled: false,
          to: '/'
        }
      ]
    }
  }
}
</script>
