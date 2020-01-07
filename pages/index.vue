<template>
  <div>
    <StartSection />
    <AboutSection />
    <SkillsSection />
    <EducationSection />
    <ContactSection />
  </div>
</template>

<script>
import StartSection from '~/components/index_sections/Start.vue'
import AboutSection from '~/components/index_sections/About.vue'
import EducationSection from '~/components/index_sections/Education.vue'
import SkillsSection from '~/components/index_sections/Skills.vue'
import ContactSection from '~/components/index_sections/Contact.vue'

export default {
  auth: false,

  components: {
    StartSection, AboutSection, EducationSection, SkillsSection, ContactSection
  }
}
</script>
