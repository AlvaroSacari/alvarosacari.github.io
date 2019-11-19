<template>
  <div>
    <v-list v-if="items.length" dense nav>
      <v-subheader>Sobre mí</v-subheader>
      <template v-for="(item,i) in items">
        <NavigationDrawerListItem
          v-if="!item.items"
          :key="`list-item-${i}`"
          :item="item"
        />
        <NavigationDrawerListGroup
          v-else
          :key="`list-group-${i}`"
          :item="item"
        />
      </template>
    </v-list>
    <v-divider />
    <v-list v-if="items2.length" dense nav>
      <v-subheader>Admin</v-subheader>
      <template v-for="(item,i) in items2">
        <NavigationDrawerListItem
          v-if="!item.items"
          :key="`list2-item-${i}`"
          :item="item"
        />
        <NavigationDrawerListGroup
          v-else
          :key="`list2-group-${i}`"
          :item="item"
        />
      </template>
    </v-list>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import NavigationDrawerListItem from '~/components/navigation_drawer/NavigationDrawerListItem.vue'
import NavigationDrawerListGroup from '~/components/navigation_drawer/NavigationDrawerListGroup.vue'

export default {
  components: {
    NavigationDrawerListItem,
    NavigationDrawerListGroup
  },

  computed: {
    ...mapState({
      items: state => state.navigationDrawer.items
    }),

    ...mapGetters({
      items2: 'navigationDrawer/items2'
    })
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
