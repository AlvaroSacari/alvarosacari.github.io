<template>
  <v-card
    hover
    min-height="100%"
    class="mx-auto"
  >
    <v-img
      :src="image"
      :aspect-ratio="16/9"
    />

    <v-card-title class="break-word">
      {{ title }}
    </v-card-title>

    <v-card-text>
      <div v-if="subtitle1 !== ''">
        {{ subtitle1 }}
      </div>
      <div v-if="subtitle2 !== ''">
        {{ subtitle2 }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    image: { type: String, default: '' },
    title: { type: String, default: '' },
    subtitle1: { type: String, default: '' },
    subtitle2: { type: String, default: '' }
  }
}
</script>

<style lang="scss" scoped>

</style>
