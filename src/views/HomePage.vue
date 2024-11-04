<template>
  <div class="home-page">
    <BackgroundVideo>
      <HeroContent />
    </BackgroundVideo>
    <WhatWeDo />
    <CompanyPresentation />
    <BlogHome /> 
    <SpacingSection height="100vh" /> 
  </div>
</template>

<script>
import BackgroundVideo from '@/components/home/BackgroundVideo.vue'
import HeroContent from '@/components/home/HeroContent.vue'
import WhatWeDo from '@/components/home/WhatWeDo.vue'
import CompanyPresentation from '@/components/home/CompanyPresentation.vue'
import BlogHome from '@/components/home/BlogHome.vue' 
import SpacingSection from '@/components/utilities/SpacingSection.vue' 

export default {
  name: 'HomePage',
  components: {
    BackgroundVideo,
    HeroContent,
    WhatWeDo,
    CompanyPresentation,
    BlogHome, 
    SpacingSection 
  }
}
</script>

<style>
.home-page {
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0; 
  background-color: #efeded;
}

.main-content {
  background: white; 
  padding: 2em 0;
  margin: 0; 
}
</style>
