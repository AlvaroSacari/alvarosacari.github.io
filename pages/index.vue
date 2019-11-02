import alvarosacari.github.io from '../nuxt.config';
<template>
  <div>
    <StartSection />
    <AboutSection />
    <EducationSection />
    <SkillsSection />
    <PortfolioSection />
  </div>
</template>

<script>
import StartSection from '~/components/index_sections/Start.vue'
import AboutSection from '~/components/index_sections/About.vue'
import EducationSection from '~/components/index_sections/Education.vue'
import SkillsSection from '~/components/index_sections/Skills.vue'
import PortfolioSection from '~/components/index_sections/Portfolio.vue'

export default {
  components: {
    StartSection, AboutSection, EducationSection, SkillsSection, PortfolioSection
  },

  data () {
    return {
      tab: 0
    }
  }
}
</script>
