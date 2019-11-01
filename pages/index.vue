import alvarosacari.github.io from '../nuxt.config';
<template>
  <div>
    <StartSection />
    <AboutSection />
    <EducationSection />
    <SkillsSection />
  </div>
</template>

<script>
import StartSection from '~/components/index_sections/Start.vue'
import AboutSection from '~/components/index_sections/About.vue'
import EducationSection from '~/components/index_sections/Education.vue'
import SkillsSection from '~/components/index_sections/Skills.vue'

export default {
  components: {
    StartSection, AboutSection, EducationSection, SkillsSection
  },

  data () {
    return {
      tab: 0
    }
  }
}
</script>
