<template>
  <div class="x-hoppers-page">
    <div class="content-wrapper">
      <div class="main-section">
        <!-- Brève Explication -->
        <section id="hero" class="hero left-content">
          <h1>X-Hoppers</h1>
          <div class="description">
            <p>X-Hoppers est une solution de communication unifiée développée par Wildix spécifiquement pour le secteur du commerce de détail.</p>
            <p>Elle combine des casques sans fil "push-to-talk" avec un système de communication basé sur le cloud, conçu pour améliorer l'expérience en magasin et accroître les ventes.</p>
          </div>
        </section>

        <!-- Table des Matières -->
        <section class="table-of-contents">
          <h2>Table des Matières</h2>
          <ul>
            <li><a href="#hero" @click.prevent="smoothScroll('#hero')">Introduction à X-Hoppers</a></li>
            <li><a href="#cloud-features" @click.prevent="smoothScroll('#cloud-features')">Fonctionnalités de X-Hoppers</a></li>
            <li><a href="#xhoppers-full" @click.prevent="smoothScroll('#xhoppers-full')">Détails Complémentaires</a></li>
            <li><a href="#video-section" @click.prevent="smoothScroll('#video-section')">Vidéo Explicative</a></li>
          </ul>
        </section>
      </div>
    </div>

    <!-- Fonctionnalités en Cartes avec le même CSS que l'autre section -->
    <section id="cloud-features" class="cloud-features">
      <h2 class="features-title">X-Hoppers, c'est aussi :</h2>
      <div class="features-content">
        <div class="features-grid">
          <div
            class="feature-box"
            v-for="(feature, index) in features"
            :key="index"
            @click="selectFeature(index)"
            :class="{ active: selectedFeatureIndex === index }"
          >
            <h3>{{ feature.title }}</h3>
          </div>
        </div>

        <div class="feature-description" v-if="selectedFeature">
          <h3>{{ selectedFeature.title }}</h3>
          <p>{{ selectedFeature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Ajout du composant XHoppersFull -->
    <section id="xhoppers-full">
      <XHoppersFull />
    </section>

    <!-- Vidéo Explicative -->
    <section id="video-section" class="video-section">
      <h2 class="titre-bleu">Découvrez X-Hoppers en vidéo</h2>
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/H6LNPkmXdow" frameborder="0" allowfullscreen></iframe>
      </div>
    </section>
  </div>
</template>

<script>
import XHoppersFull from '@/components/x-hoppers/XHoppersFull.vue';

export default {
  name: 'XHoppersPage',
  components: {
    XHoppersFull,
  },
  data() {
    return {
      selectedFeatureIndex: 0,
      features: [
        {
          title: 'Communication centralisée',
          description: 'Avec les casques sans fil connectés à un canal vocal unique, les employés peuvent communiquer rapidement pour une meilleure gestion en magasin.'
        },
        {
          title: 'QR Codes interactifs',
          description: "Les clients peuvent scanner des QR codes pour obtenir des informations sur les produits ou demander de l'aide, ce qui améliore l'expérience client."
        },
        {
          title: 'Surveillance automatisée des vols',
          description: 'Des caméras intelligentes surveillent les vols en magasin, intégrées avec les systèmes de caisse pour une gestion efficace de la sécurité.'
        },
        {
          title: 'Intégration avec systèmes de caisse',
          description: "X-Hoppers s'intègre parfaitement avec les systèmes de caisse pour faciliter la gestion des transactions et améliorer le service client."
        },
      ],
    };
  },
  computed: {
    selectedFeature() {
      return this.features[this.selectedFeatureIndex];
    }
  },
  methods: {
    selectFeature(index) {
      this.selectedFeatureIndex = index;
    },
    smoothScroll(target) {
      const element = document.querySelector(target);
      if (element) {
        const navbarHeight = document.querySelector('.navbar') ? document.querySelector('.navbar').offsetHeight : 0;
        window.scrollTo({
          top: element.offsetTop - navbarHeight - 20,
          behavior: 'smooth'
        });
      }
    }
  },
};
</script>

<style scoped>
/**** Styles inspirés du deuxième code fourni ****/
.main-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: stretch;
  background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);
  padding: 2rem;
}

@media (min-width: 768px) {
  .main-section {
    flex-direction: row;
  }
}

.left-content {
  flex: 2;
  position: relative;
}

.table-of-contents {
  flex: 1;
  background-color: #f0f0f0;
  padding: 1.5rem;
  border-radius: 8px;
  position: relative;
  align-self: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: auto;
}

.table-of-contents h2 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #1e90ff;
}

.table-of-contents ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.table-of-contents li {
  margin: 0.5rem 0;
}

.table-of-contents a {
  color: #1e90ff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #1e90ff;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.table-of-contents a:hover {
  text-decoration: none;
  background-color: #1e90ff;
  color: #ffffff;
}

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);
  padding: 2rem;
  border-radius: 10px;
}

.hero h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: black;
}

@media (min-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
}

.description {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: black;
}

.cloud-features {
  padding: 4rem 2rem;
  background-color: #f9fafc;
}

.features-title {
  font-size: 1.8rem;
  color: black;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
}

@media (min-width: 768px) {
  .features-title {
    font-size: 2rem;
  }
}

.features-title::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;
  width: 50px;
  height: 4px;
  background-color: #1e90ff;
  transform: translateX(-50%);
}

.features-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

@media (min-width: 768px) {
  .features-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    width: 40%;
  }
}

.feature-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.feature-box h3 {
  color: #1e90ff;
  font-size: 1.2rem;
  margin: 0;
}

@media (min-width: 768px) {
  .feature-box h3 {
    font-size: 1.3rem;
  }
}

.feature-box.active {
  background-color: #e0f7fa;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.feature-box:hover {
  background-color: #e0f7fa;
  transform: scale(1.05);
}

.feature-description {
  width: 100%;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
  .feature-description {
    width: 55%;
    padding-left: 2rem;
  }
}

.feature-description h3 {
  color: #1e90ff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

@media (min-width: 768px) {
  .feature-description h3 {
    font-size: 1.8rem;
  }
}

.feature-description p {
  line-height: 1.6;
  font-size: 0.9rem;
  text-align: left;
}

@media (min-width: 768px) {
  .feature-description p {
    font-size: 1rem;
  }
}

.video-section {
  padding: 2rem;
  background-color: #f7f7f7;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 768px) {
  .video-section {
    padding: 4rem;
  }
}

.video-section h2 {
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
}

@media (min-width: 768px) {
  .video-section h2 {
    font-size: 2.5rem;
  }
}

.video-container {
  width: 100%;
  max-width: 768px;
  height: auto;
  aspect-ratio: 16 / 9;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.video-container iframe {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.titre-bleu {
  color: #1e90ff;
}
</style>