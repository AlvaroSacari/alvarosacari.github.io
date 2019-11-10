<template>
  <div>
    <StartSection />
    <AboutSection />
    <EducationSection />
    <SkillsSection />
    <PortfolioSection />
    <ContactSection />
  </div>
</template>

<script>
import StartSection from '~/components/index_sections/Start.vue'
import AboutSection from '~/components/index_sections/About.vue'
import EducationSection from '~/components/index_sections/Education.vue'
import SkillsSection from '~/components/index_sections/Skills.vue'
import PortfolioSection from '~/components/index_sections/Portfolio.vue'
import ContactSection from '~/components/index_sections/Contact.vue'

export default {
  auth: false,

  components: {
    StartSection, AboutSection, EducationSection, SkillsSection, PortfolioSection, ContactSection
  },

  data () {
    return {
      tab: 0
    }
  }
}
</script>
