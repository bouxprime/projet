<template>
  <div>
    <section class="solution-voip full-height">
      <h1>Solutions VoIP</h1>
      <div class="description">
        <p>Alezia propose une gamme complète de matériel de téléphonie d'entreprise, permettant d'installer une téléphonie fixe sur IP (via internet).</p>
        <p>Ce système, qui ne nécessite qu'une connexion internet professionnelle, élimine le besoin de serveurs téléphoniques traditionnels (PABX). Alezia s'appuie sur des technologies fiables et performantes offertes par Wildix pour garantir une solution de qualité.</p>
      </div>
    </section>
    <Wave2Component />
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
import Wave2Component from '@/components/utilities/wave2.vue';

export default {
  name: 'SolutionVoip',
  components: {
    Wave2Component,
  },
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
  }
};
</script>

<style scoped>
.solution-voip.full-height {
  min-height: 100vh; /* Prend toute la hauteur de la fenêtre */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centre verticalement */
  align-items: center; /* Centre horizontalement */
  text-align: center;
  background-image: url('@/assets/Alezia-Background-solution-voip.png'); /* Ajoute l'image en arrière-plan */
  background-size: 25%; /* Réduit la taille de l'image à 50% de sa taille originale */
  background-position: right bottom; /* Positionne l'image en bas à droite */
  background-repeat: no-repeat; /* Évite de répéter l'image */
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
  padding: 2rem;
  background-color: white;
}

/* Titre en noir */
.features-title {
  font-size: 1.8rem;
  color: black; /* Titre en noir */
  margin-bottom: 3.5rem;
  text-align: center;
}

/* Wrapper pour organiser les cartes et la description */
.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

/* Cartes disposées en deux colonnes */
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Deux colonnes */
  gap: 1rem;
  width: 40%; /* Cartes à gauche occupant 40% de la largeur */
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
  text-align: center;
}

.feature-box h3 {
  color: #1e90ff;
  font-size: 1.2rem;
  margin: 0;
}

.feature-box.active {
  background-color: #e0f7fa;
}

.feature-box:hover {
  background-color: #e0f7fa;
}

/* Description à droite */
.feature-description {
  width: 55%; /* Texte occupant 55% de la largeur à droite */
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.feature-description h3 {
  color: #1e90ff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.feature-description p {
  line-height: 1.6;
  font-size: 1rem;
  text-align: left;
}
</style>
