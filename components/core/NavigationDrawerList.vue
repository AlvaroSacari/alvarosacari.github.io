<template>
  <v-list dense nav>
    <template v-for="(item,i) in items">
      <template v-if="!item.items">
        <v-list-item
          :key="`list${i}`"
          :to="item.to ? item.to : null"
          exact
          color="primary"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <template v-else>
        <v-list-group
          :key="`group${i}`"
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
                no-action
                sub-group
                :value="subItem.expand"
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
    </template>
  </v-list>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default () { return [] }
    }
  },

  created () {
    this.setExpandValue(this.items)
  },

  methods: {
    setExpandValue (items) {
      if (!this.$route.matched.length) {
        return false
      }

      const routePath = this.$route.matched[0].path

      return items.map((item) => {
        if (!item.hasOwnProperty('items')) {
          return item
        }

        item.items.map((subitem) => {
          if (subitem.to && subitem.to === routePath) {
            item.expand = true
          }

          if (!subitem.hasOwnProperty('items')) {
            return subitem
          }

          subitem.items.map((subsubitem) => {
            if (subsubitem.to && subsubitem.to === routePath) {
              item.expand = true
              subitem.expand = true
            }

            return subsubitem
          })

          return subitem
        })

        return item
      })
    }
  }
}
</script>
