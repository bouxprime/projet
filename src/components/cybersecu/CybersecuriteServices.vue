<template>
    <Wave2Component />
  <section class="cloud-features">
    <h2 class="section-title">Nos services</h2>
    <div class="features-container"> <!-- Nouveau conteneur pour la disposition -->
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
</template>

<script>

import Wave2Component from '@/components/utilities/wave2.vue';

export default {
  name: 'CybersecuriteServices',
  components: {

    Wave2Component,
  },
  data() {
    return {
      selectedFeatureIndex: 0,
      features: [
        {
          title: 'Veille, Prévention et Réactivité',
          description: "Nous surveillons en temps réel votre sécurité informatique et intervenons immédiatement, des correctifs aux mesures d'urgence pour les vulnérabilités zero-day."
        },
        {
          title: 'Réduction des Coûts et de la Charge de Travail',
          description: "Externalisez pour diminuer vos coûts de gestion et alléger la charge de travail de vos équipes tout en accédant à une expertise avancée."
        },
        {
          title: 'Gestion des Risques et Conformité',
          description: "Nous vous aidons à gérer les risques informatiques et à respecter les régulations telles que le RGPD et les normes industrielles."
        },
        {
          title: 'Sensibilisation et Bonnes Pratiques',
          description: "Nous veillons à ce que vos équipes soient formées aux meilleures pratiques en cybersécurité."
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
.cloud-features {
  padding: 3rem 2rem; /* Ajout de padding haut et bas, avec padding latéral */
  background-color: white;
  font-family: 'Poppins', sans-serif; /* Appliquer la police à toute la section */
}

.section-title {
  text-align: center;
  color: black;
  margin-bottom: 2rem;
  font-size: 32px; /* Taille du titre mise à jour */
}

.features-container {
  display: flex; /* Utilisation de flex pour aligner les éléments */
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 colonnes */
  gap: 1rem;
  width: 60%; /* Ajustez la largeur de la grille */
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
  text-align: center;
}

.feature-box.active {
  background-color: #e0f7fa;
}

.feature-box:hover {
  background-color: #e0f7fa;
}

.feature-description {
  width: 40%; /* Ajustez la largeur du texte descriptif */
  padding-left: 2rem; /* Espacement à gauche */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.feature-description h3 {
  color: #1e90ff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.feature-description p {
  line-height: 1.6;
  font-size: 1rem;
  text-align: center;
}
</style>
