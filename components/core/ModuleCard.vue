<template>
  <v-card
    :disabled="disabled"
    :to="to"
    class="mx-auto"
    max-width="360"
    hover
  >
    <v-card-text class="pa-4">
      <v-list-item three-line class="px-0">
        <v-list-item-icon class="my-auto">
          <v-icon size="64">
            {{ icon }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content class="py-0">
          <v-list-item-subtitle>Módulo</v-list-item-subtitle>
          <v-list-item-title class="headline">
            {{ title }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-text>
    <v-divider />
    <v-card-actions class="pa-4">
      <v-btn
        color="primary"
      >
        Ir
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    icon: { type: String, default: '' },
    to: { type: Object, default () { return null } },
    disabled: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>

</style>
