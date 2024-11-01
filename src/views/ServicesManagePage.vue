<template>
  <div class="services-manages-page">
    <!-- Section principale contenant la description et la table des matières -->
    <section class="main-section full-page">
      <!-- Partie de gauche avec le texte introductif -->
      <div class="left-content">
        <section class="hero ma-section">
          <h1>Services managés & infogérance</h1>
          <p>La confiance dans l'externalisation IT de proximité</p>
          <p>La fiabilité technique d’une gestion externe de votre parc</p>
        </section>
      </div>
      <!-- Partie de droite avec la table des matières -->
      <div class="toc centered-toc">
        <h2>Table des matières</h2>
        <ul>
          <li><a href="#introduction" @click.prevent="smoothScroll('#introduction')">Introduction</a></li>
          <li><a href="#services" @click.prevent="smoothScroll('#services')">Nos Services</a></li>
          <li><a href="#support" @click.prevent="smoothScroll('#support')">Support & Maintenance</a></li>
        </ul>
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
  methods: {
    smoothScroll(target) {
      const element = document.querySelector(target);
      if (!element) {
        console.warn('Element not found:', target);
        return;
      }
      window.scrollTo({
        top: element.offsetTop - 100, // Ajustement pour compenser la hauteur de la navbar
        behavior: 'smooth'
      });
    }
  }
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
  flex-direction: row;
  gap: 2rem;
  align-items: center; /* Aligner la table des matières avec le texte */
  padding: 2rem;
  background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%); /* Correction des couleurs de fond */
}

.full-page {
  min-height: 100vh; /* Occupe toute la hauteur de la page */
}

.left-content {
  flex: 2;
  position: relative;
}

.toc {
  flex: 1;
  background-color: #f0f0f0;
  padding: 2rem;
  border-radius: 8px;
  position: sticky;
  top: 20px; /* Ajustement pour compenser la hauteur de la navbar */
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-self: center; /* Centrer verticalement la table des matières */
}

.toc h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1e90ff;
}

.toc ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.toc a {
  color: #1e90ff;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 1px solid #1e90ff;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.toc a:hover {
  background-color: #1e90ff;
  color: #ffffff;
}

.hero {
  text-align: center;
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
