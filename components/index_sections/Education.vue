<template>
  <v-container id="education" ref="section-education" class="py-8">
    <h2 class="display-1 mb-5">
      <v-btn :to="{ name:'index', hash:'#education' }" icon color="primary">
        <v-icon>
          mdi-pound
        </v-icon>
      </v-btn>
      Educación
    </h2>

    <v-row>
      <v-col
        v-for="(item,i) in universities"
        :key="i"
      >
        <v-card
          hover
          min-height="100%"
          max-width="425px"
          class="mx-auto"
        >
          <v-img
            :src="item.img"
            height="200px"
          />

          <v-card-title>
            {{ item.title }}
          </v-card-title>

          <v-card-text>
            <div v-if="item.subtitle1 !== ''">
              {{ item.subtitle1 }}
            </div>
            <div v-if="item.subtitle2 !== ''">
              {{ item.subtitle2 }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      universities: [
        {
          img: require('~/assets/images/unjbg.jpg'),
          title: 'Universidad Nacional Jorge Basadre Grohmann',
          subtitle1: 'Bachiller - E.A.P. de Ingeniería en Informática y Sistemas',
          subtitle2: ''
        },
        {
          img: require('~/assets/images/online_learning.jpeg'),
          title: 'Cursos en línea de Desarrollo Web',
          subtitle1: '+450 horas',
          subtitle2: 'Udemy, Platzi, Youtube, Blogs, etc.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
