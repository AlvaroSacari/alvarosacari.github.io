<template>
  <v-container id="education" class="pa-4">
    <sectionTitle id="education-title" title="Educación" />

    <v-row>
      <v-col
        v-for="(item,i) in universities"
        :key="i"
        cols="12"
        xs="12"
        sm="6"
      >
        <EducationPlaceCard
          :image="item.img"
          :title="item.title"
          :subtitle1="item.subtitle1"
          :subtitle2="item.subtitle2"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import sectionTitle from '~/components/core/sectionTitle.vue'
import EducationPlaceCard from '~/components/core/EducationPlaceCard.vue'

export default {
  components: {
    sectionTitle,
    EducationPlaceCard
  },
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
