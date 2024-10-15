<template>
  <div class="x-hoppers-page">
    <!-- Brève Explication -->
    <section class="hero" :style="{ backgroundImage: `url(${randomImage})` }">
      <h1>X-Hoppers</h1>
      <div class="description">
        <p>X-Hoppers est une solution de communication unifiée développée par Wildix spécifiquement pour le secteur du commerce de détail.</p>
        <p>Elle combine des casques sans fil "push-to-talk" avec un système de communication basé sur le cloud, conçu pour améliorer l'expérience en magasin et accroître les ventes.</p>
      </div>
    </section>

    <Wave2Component/>
    <!-- Fonctionnalités en Cartes avec le même CSS que l'autre section -->
    <section class="cloud-features">
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
    <Wave3Component />

    <!-- Ajout du composant XHoppersFull -->
    <XHoppersFull />

    <!-- Vidéo Explicative -->
    <section class="video-section">
      <h2 class="titre-bleu">Découvrez X-Hoppers en vidéo</h2>
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/H6LNPkmXdow" frameborder="0" allowfullscreen></iframe>
      </div>
    </section>
  </div>
</template>

<script>
import XHoppersFull from '@/components/x-hoppers/XHoppersFull.vue';
import Wave3Component from '@/components/utilities/wave3.vue'; // Assurez-vous que le chemin est correct
import Wave2Component from '@/components/utilities/wave2.vue'; // Assurez-vous que le chemin est correct

export default {
  name: 'XHoppersPage',
  components: {
    XHoppersFull,
    Wave3Component, // Enregistrement du composant
    Wave2Component, // Ajoutez le composant ici
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
          description: 'Les clients peuvent scanner des QR codes pour obtenir des informations sur les produits ou demander de l\'aide, ce qui améliore l\'expérience client.'
        },
        {
          title: 'Surveillance automatisée des vols',
          description: 'Des caméras intelligentes surveillent les vols en magasin, intégrées avec les systèmes de caisse pour une gestion efficace de la sécurité.'
        },
        {
          title: 'Intégration avec systèmes de caisse',
          description: 'X-Hoppers s\'intègre parfaitement avec les systèmes de caisse pour faciliter la gestion des transactions et améliorer le service client.'
        }
      ],
      randomImage: '', // Variable pour stocker l'image aléatoire
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
    selectRandomImage() {
      const images = [
        require('@/assets/bk/bk1.png'),
        require('@/assets/bk/bk2.png'),
        require('@/assets/bk/bk3.png'),
        require('@/assets/bk/bk4.png'),
        require('@/assets/bk/bk5.png'),
      ];
      const randomIndex = Math.floor(Math.random() * images.length);
      this.randomImage = images[randomIndex];
    }
  },
  mounted() {
    this.selectRandomImage(); // Appel de la méthode pour sélectionner l'image aléatoire
  }
};
</script>

<style scoped>
/* Styles pour la section Hero (Intro) */
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Occupe toute la hauteur de la fenêtre */
  text-align: center;
  padding: 0 2rem;
  background-size: 550px; /* Taille de l'image */
  background-position: bottom right; /* Positionner l'image en bas à droite */
  background-repeat: no-repeat; /* Empêcher la répétition de l'image */
  position: relative;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  z-index: 2; /* Assure que le texte est au-dessus de l'image */
  color: #000; /* Couleur noire pour le titre */
}

.description {
  max-width: 800px;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  z-index: 2; /* Assure que le texte est visible au-dessus de l'image */
  color: #000; /* Texte en noir */
}

/* Nouveau style pour le titre des fonctionnalités */
.features-title {
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  color: black;
  margin-bottom: 2rem;
}

/* Styles de la section cloud-features */
.cloud-features {
  padding: 4rem 2rem;
  background-color: white;
}

.features-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Deux colonnes pour mettre les cartes deux par deux */
  gap: 1rem;
  width: 40%; /* Ajuste cette valeur pour contrôler la largeur des cartes */
}

.feature-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #f7f7f7;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.feature-box h3 {
  color: #1e90ff;
}

.feature-box.active {
  background-color: #e0f7fa;
}

.feature-box:hover {
  background-color: #e0f7fa;
}

.feature-description {
  width: 55%; /* Ajuste cette valeur pour la largeur de la description à droite */
  padding-left: 2rem;
}

.feature-description h3 {
  color: #1e90ff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.feature-description p {
  line-height: 1.6;
  font-size: 1rem;
}

/* Section vidéo explicative */
.video-section {
  padding: 2rem;
  background-color: #f7f7f7;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-section h2 {
  margin-bottom: 1rem;
}

.video-container {
  width: 678px;
  height: 380px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-container iframe {
  width: 100%;
  height: 100%;
}

.titre-bleu {
  color: #007BFF;
}
</style>
