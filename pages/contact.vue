<template>
  <div>
    <StartSection />
    <ContactSection />
  </div>
</template>

<script>
import StartSection from '~/components/index_sections/Start.vue'
import ContactSection from '~/components/index_sections/Contact.vue'

export default {
  auth: false,

  components: {
    StartSection, ContactSection
  }
}
</script>
