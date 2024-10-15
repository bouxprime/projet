<template>
  <div class="conseils-page">
    <ConseilsHeroComponent />
    <ConseilsArtComponent />
    <ConseilsProcessComponent />
    <ConseilsApproachComponent />
    <ConseilsAuditComponent />
  </div>
</template>

<script>
import ConseilsHeroComponent from '@/components/conseils/ConseilsHeroComponent.vue';
import ConseilsArtComponent from '@/components/conseils/ConseilsArtComponent.vue';
import ConseilsProcessComponent from '@/components/conseils/ConseilsProcessComponent.vue';
import ConseilsApproachComponent from '@/components/conseils/ConseilsApproachComponent.vue';
import ConseilsAuditComponent from '@/components/conseils/ConseilsAuditComponent.vue';

export default {
  name: 'ConseilsPage',
  components: {
    ConseilsHeroComponent,
    ConseilsArtComponent,
    ConseilsProcessComponent,
    ConseilsApproachComponent,
    ConseilsAuditComponent,
  },
};
</script>

<style scoped>
.conseils-page {
  padding-top: 120px;
  font-family: 'Roboto', sans-serif;
  color: #333;
  line-height: 1.6;
}
</style>
