<template>
  <div class="cybersecurite-page">
    <HeroSection />
    <CybersecuriteServices />
    <CybersecurityCombined /> <!-- Nouveau composant intégré ici -->
    <CybersecuriteMenaces />
  </div>
</template>

<script>
import HeroSection from '@/components/cybersecu/HeroSection.vue';
import CybersecuriteServices from '@/components/cybersecu/CybersecuriteServices.vue';
import CybersecuriteMenaces from '@/components/cybersecu/CybersecuriteMenaces.vue';
import CybersecurityCombined from '@/components/cybersecu/CybersecurityCombined.vue'; // Importation du nouveau composant

export default {
  components: {
    HeroSection,
    CybersecuriteServices,
    CybersecurityCombined, // Ajout du composant combiné
    CybersecuriteMenaces,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

.cybersecurite-page {
  font-family: 'Poppins', sans-serif; /* Changement de la police en Poppins */
  color: #333;
  
}

body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
}
</style>
