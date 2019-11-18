<template>
  <v-list-group
    :prepend-icon="item.icon"
    :value="item.expand"
    no-action
  >
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </template>
    <template v-for="(subItem,j) in item.items">
      <template v-if="!subItem.items">
        <v-list-item
          :key="`subItem${j}`"
          :to="subItem.to"
          exact
        >
          <v-list-item-content>
            <v-list-item-title>{{ subItem.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <template v-else>
        <v-list-group
          :key="`subGroup${j}`"
          :value="subItem.expand"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ subItem.title }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <template v-for="(subSubItem, k) in subItem.items">
            <v-list-item
              :key="`subSubItem${k}`"
              :to="subSubItem.to"
              exact
            >
              <v-list-item-title>{{ subSubItem.title }}</v-list-item-title>
              <v-list-item-icon>
                <v-icon>{{ subSubItem.icon }}</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </template>
        </v-list-group>
      </template>
    </template>
  </v-list-group>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default () { return {} }
    }
  }
}
</script>
