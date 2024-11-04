<template>
  <div class="services-manages-page">
    <!-- Section principale contenant la description -->
    <section class="main-section centered-content full-page">
      <!-- Partie centrée avec le texte introductif -->
      <div class="center-content">
        <section class="hero ma-section">
          <h1>Services managés & infogérance</h1>
          <p>La confiance dans l'externalisation IT de proximité</p>
          <p>La fiabilité technique d’une gestion externe de votre parc</p>
        </section>
      </div>
    </section>

    <!-- Inclure le composant CombinedSection -->
    <CombinedSection />
  </div>
</template>

<script>
import CombinedSection from '@/components/manage/CombinedSection.vue';

export default {
  name: 'ServicesManagePage',
  components: {
    CombinedSection
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.services-manages-page {
  font-family: 'Poppins', sans-serif;
  color: #333;
  line-height: 1.6;
}

.main-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);
}

.full-page {
  min-height: 100vh; /* Occupe toute la hauteur de la page */
}

.center-content {
  flex: 1;
  position: relative;
  text-align: center;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  z-index: 1;
  min-height: 100vh; /* La section occupe toute la hauteur de la page */
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #000;
}

.ma-section {
  padding-bottom: 40px;
}

.ma-section p {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  text-align: justify;
  line-height: 1.8;
  color: #000;
}
</style>
