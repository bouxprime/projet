<template>
  <div class="x-bees-page">
    <XBeesIntro />
    <FonctionnalitésClefs />
    <FonctionnalitésAvancées />
    <IntégrationCRM />
    <XBeesComponent />
    <VideoSection />
  </div>
</template>

<script>
import XBeesIntro from '@/components/x-bees/XBeesIntro.vue';
import FonctionnalitésClefs from '@/components/x-bees/FonctionnalitésClefs.vue';
import IntégrationCRM from '@/components/x-bees/IntégrationCRM.vue';
import VideoSection from '@/components/x-bees/VideoSection.vue';
import XBeesComponent from '@/components/x-bees/XBeesComponent.vue';

export default {
  name: 'XBeesPage',
  components: {
    XBeesIntro,
    FonctionnalitésClefs,
    IntégrationCRM,
    VideoSection,
    XBeesComponent,
  },
};
</script>

<style scoped>

</style>
