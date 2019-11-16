<template>
  <v-container>
    <v-col>
      <v-card max-width="300" class="mx-auto" :loading="loadingCard">
        <v-app-bar flat>
          <v-toolbar-title>Iniciar sesión</v-toolbar-title>
        </v-app-bar>
        <v-divider />
        <v-card-text>
          <LoginForm @update-processing-form="updateLoadingCard" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import LoginForm from '~/components/account/LoginForm.vue'

export default {
  components: {
    LoginForm
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
