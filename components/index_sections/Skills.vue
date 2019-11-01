<template>
  <v-container>
    <h2 class="title text-uppercase font-weight-medium mb-3">
      Habilidades
    </h2>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card class="mb-3">
          <v-app-bar flat dense>
            <v-toolbar-title>Frontend</v-toolbar-title>
            <v-spacer />
            <v-btn icon>
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </v-app-bar>
          <v-divider />
          <v-card-text>
            <span>Filtrar:</span>
            <v-checkbox v-model="selected" class="ma-0" hide-details label="Lenguajes" value="language" />
            <v-checkbox v-model="selected" class="ma-0" hide-details label="Librerías y Frameworks" value="librarie_or_framework" />
          </v-card-text>
          <v-divider />
          <v-card-text>
            <v-chip-group column>
              <div class="text-center">
                <v-chip
                  v-for="(item, i) in skills.frontend"
                  :key="i"
                  pill
                >
                  <v-avatar left>
                    <v-img :src="item.img" />
                  </v-avatar>
                  {{ item.name }}
                </v-chip>
              </div>
            </v-chip-group>
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
      selected: null,
      skills: {
        frontend: [
          { name: 'HTML', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'CSS', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'Javascript', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'SCSS', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'Bootstrap', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'Materialize css', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'Flexbox', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'Webpack', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'Vue', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'Nuxt', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'Vue-cli', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'Vuetify', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'Element ui', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'React', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'Pug', img: 'https://cdn.vuetifyjs.com/images/john.png' }
        ],
        backend: [
          { name: 'PHP', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'Codeigniter', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'Laravel', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'MySQL', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'Firebase', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'Postman', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'Travis CI', img: 'https://cdn.vuetifyjs.com/images/john.png' }
        ],
        others: [
          { name: 'Git', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'Github', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'Gitlab', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'NPM', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'GNU/Linux', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'Ubuntu', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'GIMP', img: 'https://cdn.vuetifyjs.com/images/john.png' },
          { name: 'Inkscape', img: 'https://cdn.vuetifyjs.com/images/john.png' }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
