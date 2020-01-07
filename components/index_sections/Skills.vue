<template>
  <v-container id="skills" class="pa-4">
    <sectionTitle id="skills-title" title="Habilidades" />
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Front End Languages</v-list-item-title>
        <v-list-item-subtitle>
          ✅ HTML5, CSS3, SASS/SCSS & LESS, JavaScript
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Front End Built/Static Generator tools</v-list-item-title>
        <v-list-item-subtitle>
          ✅ Gulp, Webpack
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Experienced JavaScript Framework</v-list-item-title>
        <v-list-item-subtitle>
          ✅ VueJS(Vuex), ReactJS(Redux), Angular8
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Version Control</v-list-item-title>
        <v-list-item-subtitle>
          ✅ Git (Github, Gitlab)
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item two-line class=" mb-4">
      <v-list-item-content>
        <v-list-item-title>Experienced in working with Agile Team</v-list-item-title>
        <v-list-item-subtitle>
          ✅ JIRA
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <p class="mb-0">
      Con 4 años de experiencia práctica en la codificación eficiente de sitios web y aplicaciones que utilizan HTML5, CSS3 y JavaScript modernos, estoy seguro de que seré una excelente opción para los trabajos de desarrollo front-end.
    </p>
  </v-container>
</template>

<script>
import sectionTitle from '~/components/core/sectionTitle.vue'

export default {
  components: {
    sectionTitle
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
