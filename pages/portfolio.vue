<template>
  <div>
    <StartSection />
    <PortfolioSection />
    <ContactSection />
  </div>
</template>

<script>
import StartSection from '~/components/index_sections/Start.vue'
import PortfolioSection from '~/components/index_sections/Portfolio.vue'
import ContactSection from '~/components/index_sections/Contact.vue'

export default {
  auth: false,

  components: {
    StartSection, PortfolioSection, ContactSection
  }
}
</script>
