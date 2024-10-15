<template>
  <div class="home-page">
    <BackgroundVideo>
      <HeroContent />
    </BackgroundVideo>
    <WhatWeDo />
    <CompanyPresentation />
    <BlogHome /> <!-- Ajout du composant BlogHome -->
    <SpacingSection height="100vh" /> <!-- Ajout du composant d'espacement avec une hauteur de 100vh -->
  </div>
</template>

<script>
import BackgroundVideo from '@/components/home/BackgroundVideo.vue'
import HeroContent from '@/components/home/HeroContent.vue'
import WhatWeDo from '@/components/home/WhatWeDo.vue'
import CompanyPresentation from '@/components/home/CompanyPresentation.vue'
import BlogHome from '@/components/home/BlogHome.vue' // Importation du nouveau composant
import SpacingSection from '@/components/utilities/SpacingSection.vue' // Importation du composant SpacingSection

export default {
  name: 'HomePage',
  components: {
    BackgroundVideo,
    HeroContent,
    WhatWeDo,
    CompanyPresentation,
    BlogHome, // Enregistrement du nouveau composant
    SpacingSection // Enregistrement du composant SpacingSection
  }
}
</script>

<style>
.home-page {
  position: relative;
  overflow: hidden;
  margin: 0; /* Ensure no margin */
  padding: 0; /* Ensure no padding */
}

.main-content {
  background: white; /* Ensure background is white */
  padding: 2em 0;
  margin: 0; /* Ensure no margin */
}
</style>
