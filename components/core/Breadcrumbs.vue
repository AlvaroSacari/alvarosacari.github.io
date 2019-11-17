<template>
  <v-breadcrumbs :items="items" class="px-0">
    <template v-slot:divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default () { return [] }
    }
  }
}
</script>
