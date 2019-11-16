<template>
  <v-container>
    <v-col>
      <v-card max-width="300" class="mx-auto" :loading="loadingCard">
        <v-app-bar flat>
          <v-toolbar-title>Registrarme</v-toolbar-title>
        </v-app-bar>
        <v-divider />
        <v-card-text>
          <RegisterForm @update-processing-form="updateLoadingCard" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import RegisterForm from '~/components/account/RegisterForm.vue'

export default {
  auth: false,

  components: {
    RegisterForm
  },

  data () {
    return {
      loadingCard: false
    }
  },

  methods: {
    updateLoadingCard (value) {
      this.loadingCard = value
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
