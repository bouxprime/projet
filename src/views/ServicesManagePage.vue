<template>
  <div class="services-manages-page">
    <!-- Titre Principal -->
    <section class="hero">
      <h1>Services managés & infogérance</h1>
      <p>La confiance dans l'externalisation IT de proximité</p>
      <p>La fiabilité technique d’une gestion externe de votre parc</p>
    </section>

    <!-- Include the CombinedSection Component -->
    <CombinedSection />
  </div>
</template>

<script>
import CombinedSection from '@/components/manage/CombinedSection.vue';

export default {
  name: 'ServicesManagePage',
  components: {
    CombinedSection
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.services-manages-page {
  font-family: 'Poppins', sans-serif; /* Utilisation de la police Poppins */
  color: #333;
  line-height: 1.6;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: #ffffff; /* Fond blanc pour la section */
  min-height: 100vh; /* Occupe toute la hauteur de l'écran */
  background-image: url('@/assets/BK-logo.png'); /* Ajout de l'image de fond */
  background-size: 550px; /* Ajuster la taille de l'image */
  background-position: bottom right; /* Positionner l'image en bas à droite */
  background-repeat: no-repeat; /* Empêcher la répétition de l'image */
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.25rem;
}
</style>
