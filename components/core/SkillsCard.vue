<template>
  <v-card hover class="mb-3" min-height="100%">
    <v-app-bar flat dense>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn
        v-if="filters.length"
        @click="showFilters = !showFilters"
        icon
      >
        <v-icon>{{ showFilters ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-expand-transition>
      <div v-if="filters.length && showFilters">
        <v-divider />
        <v-card-text>
          <span>Filtrar:</span>
          <v-checkbox
            v-for="(item, i) in filters"
            :key="i"
            v-model="filterSelected"
            :label="item.label"
            :value="item.slug"
            class="ma-0"
            hide-details
          />
        </v-card-text>
      </div>
    </v-expand-transition>
    <v-divider />
    <v-card-text>
      <v-chip-group column>
        <div class="text-center">
          <v-chip
            v-for="(item, i) in skillsToShow"
            :key="i"
            pill
          >
            <!-- <v-avatar left>
              <v-img :src="item.img" />
            </v-avatar> -->
            {{ item.name }}
          </v-chip>
        </div>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    skills: {
      type: Array,
      default () { return [] }
    },
    filters: {
      type: Array,
      default () { return [] }
    }
  },

  data () {
    return {
      filterSelected: null,
      showFilters: false
    }
  },

  computed: {
    skillsToShow () {
      if (!this.filterSelected) {
        return this.skills
      }

      return this.skills.filter(item => item.type === this.filterSelected)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
