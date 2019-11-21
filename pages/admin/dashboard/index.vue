<template>
  <v-container class="pa-4">
    <Breadcrumbs :items="breadcrumbs" />

    <div id="dashboard" class="pt-3">
      <h2>
        <v-btn @click="$vuetify.goTo('#dashboard')" icon color="primary">
          <v-icon>
            mdi-pound
          </v-icon>
        </v-btn>
        Dashboard
      </h2>

      <v-row v-if="modules.length">
        <v-col v-for="(item,i) in modules" :key="i">
          <ModuleCard
            :title="item.title"
            :subtitle="item.subtitle"
            :icon="item.icon"
            :to="item.to"
            :disabled="item.disabled"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Breadcrumbs from '~/components/core/Breadcrumbs.vue'
import ModuleCard from '~/components/core/ModuleCard.vue'

export default {
  components: {
    Breadcrumbs,
    ModuleCard
  },

  data () {
    return {
      breadcrumbs: [
        {
          text: 'Dashboard',
          to: { name: 'admin-dashboard' }
        }
      ],
      modules: [
        {
          title: 'Educación',
          subtitle: 'Crear, editar o eliminar lugares de estudio',
          icon: 'mdi-laptop',
          to: { name: 'admin-education-places' },
          disabled: false
        },
        {
          title: 'Hablilidades',
          subtitle: 'Crear, editar o eliminar habilidades',
          icon: 'mdi-code-tags',
          disabled: true
        },
        {
          title: 'Portafolio',
          subtitle: 'Crear, editar o eliminar proyectos del protafolio',
          icon: 'mdi-rocket',
          disabled: true
        }
      ]
    }
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
