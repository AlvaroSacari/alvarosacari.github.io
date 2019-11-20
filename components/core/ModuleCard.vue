<template>
  <v-card
    :disabled="disabled"
    class="mx-auto"
    hover
  >
    <v-card-text class="px-0">
      <v-list-item :to="to" two-line>
        <v-list-item-icon class="my-auto">
          <v-icon large>
            {{ icon }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ title }}</v-list-item-title>
          <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-spacer />
      <v-btn
        :to="to"
        text
        class="text-capitalize"
        color="primary"
      >
        Ver
        <v-icon right>
          mdi-arrow-right
        </v-icon>
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
