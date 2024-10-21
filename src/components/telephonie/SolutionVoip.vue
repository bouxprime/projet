<template>
  <div>
    <section class="solution-voip full-height" ref="solutionVoip">
      <h1>Solutions VoIP</h1>
      <div class="description">
        <p>Alezia propose une gamme complète de matériel de téléphonie d'entreprise, permettant d'installer une téléphonie fixe sur IP (via internet).</p>
        <p>Ce système, qui ne nécessite qu'une connexion internet professionnelle, élimine le besoin de serveurs téléphoniques traditionnels (PABX). Alezia s'appuie sur des technologies fiables et performantes offertes par Wildix pour garantir une solution de qualité.</p>
      </div>
    </section>
    <!-- Section des cartes interactives avec texte associé -->
    <section class="voip-features">
      <h2 class="features-title">Découvrez nos fonctionnalités :</h2>
      <div class="content-wrapper">
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
  </div>
</template>

<script>
export default {
  name: 'SolutionVoip',
  data() {
    return {
      selectedFeatureIndex: 0,
      features: [
        {
          title: 'Flexibilité',
          description: 'Avec une téléphonie d\'entreprise hébergée dans le cloud, vous pouvez déplacer vos téléphones où que vous soyez : dans n\'importe quel bureau, sur n\'importe quel site, et dans n\'importe quel pays. Votre système de téléphonie d\'entreprise reste entièrement fonctionnel, tout en conservant son organisation intacte.'
        },
        {
          title: 'Sécurité',
          description: 'Chez Wildix, la sécurité est une priorité absolue. Labellisé "Secure by Design", nos solutions de téléphonie intègrent des protocoles de sécurité avancés pour protéger vos communications. Chaque appel, chaque donnée est chiffré de bout en bout, assurant une confidentialité totale.'
        },
        {
          title: 'Système complet',
          description: 'Wildix est un système complet de communication qui intègre téléphonie, vidéoconférence, messagerie instantanée et collaboration en ligne. Il se distingue par sa compatibilité avec tous types d\'interfaces, offrant une flexibilité maximale pour les utilisateurs.'
        },
        {
          title: 'Facile',
          description: 'L\'application est conçue pour être intuitive et accessible, avec une interface simple qui facilite l\'utilisation des fonctionnalités comme les appels, les vidéoconférences et la messagerie. Compatible avec divers appareils, elle s\'installe facilement.'
        }
      ]
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
    }
  },
  mounted() {
    // Ajoute la classe pour déclencher l'animation une fois que la section est montée
    setTimeout(() => {
      this.$refs.solutionVoip.classList.add('animate-bg');
    }, 100); // Délai pour s'assurer que la section est bien montée
  }
};
</script>

<style scoped>
.solution-voip.full-height {
  position: relative;
  min-height: 100vh; /* Prend toute la hauteur de la fenêtre */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centre verticalement */
  align-items: center; /* Centre horizontalement */
  text-align: center;
  overflow: hidden; /* Pour cacher les débordements pendant l'animation */
  background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%); /* Ajoute un gradient comme fond de la section */
}

.solution-voip.full-height::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('@/assets/Alezia-Background-solution-voip.png');
  background-size: 25%;
  background-position: right bottom;
  background-repeat: no-repeat;
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 1.5s ease, transform 1.5s ease;
}

.solution-voip.full-height.animate-bg::after {
  opacity: 1;
  transform: scale(1);
}

.solution-voip h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: black; /* Texte en noir */
}

.description {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: black; /* Texte en noir */
}

/* Section pour les cartes et leur description */
.voip-features {
  padding: 4rem 2rem; /* Augmente le padding pour un espacement plus aéré */
  background-color: #f9fafc; /* Change la couleur de fond pour une meilleure distinction de section */
}

/* Titre en noir */
.features-title {
  font-size: 2rem;
  color: black; /* Titre en noir */
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
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

/* Wrapper pour organiser les cartes et la description */
.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

@media (min-width: 768px) {
  .content-wrapper {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

/* Cartes disposées en deux colonnes */
.features-grid {
  display: grid;
  grid-template-columns: 1fr; /* Une colonne par défaut */
  gap: 1.5rem;
  width: 100%;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr); /* Deux colonnes à partir de la tablette */
    width: 40%; /* Cartes à gauche occupant 40% de la largeur */
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
  font-size: 1.3rem;
  margin: 0;
}

.feature-box.active {
  background-color: #e0f7fa;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.feature-box:hover {
  background-color: #e0f7fa;
  transform: scale(1.05); /* Agrandit légèrement la carte au survol */
}

/* Description à droite */
.feature-description {
  width: 100%;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
  .feature-description {
    width: 55%; /* Texte occupant 55% de la largeur à droite */
    padding-left: 2rem;
  }
}

.feature-description h3 {
  color: #1e90ff;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
}

.feature-description p {
  line-height: 1.6;
  font-size: 1rem;
  text-align: left;
}
</style>
