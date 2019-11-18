<template>
  <v-container id="skills" class="py-8">
    <h2 class="display-1 mb-5">
      <v-btn :to="{ name:'index', hash:'#skills' }" icon color="primary">
        <v-icon>
          mdi-pound
        </v-icon>
      </v-btn>
      Habilidades
    </h2>

    <v-row>
      <v-col cols="12" sm="4">
        <SkillsCard
          :skills="frontendSkills"
          :filters="frontendFilters"
          title="Frontend"
        />
      </v-col>
      <v-col cols="12" sm="4">
        <SkillsCard
          :skills="backendSkills"
          :filters="backendFilters"
          title="Backend"
        />
      </v-col>
      <v-col cols="12" sm="4">
        <SkillsCard
          :skills="otherSkills"
          :filters="otherFilters"
          title="Otros"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SkillsCard from '~/components/core/SkillsCard.vue'

export default {
  components: {
    SkillsCard
  },
  data () {
    return {
      frontendSkills: [
        { name: 'HTML', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'language' },
        { name: 'CSS', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'language' },
        { name: 'Javascript', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'language' },
        { name: 'SCSS', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'library_or_framework' },
        { name: 'Bootstrap', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'library_or_framework' },
        { name: 'Materialize css', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'library_or_framework' },
        { name: 'Flexbox', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'library_or_framework' },
        { name: 'Webpack', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'library_or_framework' },
        { name: 'Vue', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'library_or_framework' },
        { name: 'Nuxt', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'library_or_framework' },
        { name: 'Vue-cli', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'library_or_framework' },
        { name: 'Vuetify', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'library_or_framework' },
        { name: 'Element ui', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'library_or_framework' },
        { name: 'React', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'library_or_framework' },
        { name: 'Pug', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'library_or_framework' }
      ],
      backendSkills: [
        { name: 'PHP', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'language_or_framework' },
        { name: 'Codeigniter', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'language_or_framework' },
        { name: 'Laravel', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'language_or_framework' },
        { name: 'MySQL', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'database' },
        { name: 'Firebase', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'other' },
        { name: 'Postman', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'other' },
        { name: 'Travis CI', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'other' }
      ],
      otherSkills: [
        { name: 'Git', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'other' },
        { name: 'Github', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'other' },
        { name: 'Gitlab', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'other' },
        { name: 'NPM', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'other' },
        { name: 'GNU/Linux', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'operating_system' },
        { name: 'Ubuntu', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'operating_system' },
        { name: 'GIMP', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'other' },
        { name: 'Inkscape', img: 'https://cdn.vuetifyjs.com/images/john.png', type: 'other' }
      ],
      frontendFilters: [
        { label: 'Lenguajes', slug: 'language' },
        { label: 'Librerías o Frameworks', slug: 'library_or_framework' }
      ],
      backendFilters: [
        { label: 'Lenguajes o Frameworks', slug: 'language_or_framework' },
        { label: 'Bases de datos', slug: 'database' },
        { label: 'Otros', slug: 'other' }
      ],
      otherFilters: [
        { label: 'Sistemas operativos', slug: 'operating_system' },
        { label: 'Otros', slug: 'other' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
