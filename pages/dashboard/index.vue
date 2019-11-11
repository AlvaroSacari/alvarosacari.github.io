<template>
  <div>
    <h1>Dashboard</h1>
    <v-btn @click="logout">
      logout
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$auth.logout()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
