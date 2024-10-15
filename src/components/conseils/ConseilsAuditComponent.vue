<template>
  <Wave2Component class="full-width-wave" />
  <section class="audit-features">
    <h2>Audit & Accompagnement</h2> <!-- Titre de la section -->

    <div class="features-container">
      <div class="features-grid">
        <div
          class="feature-box"
          v-for="(advantage, index) in advantages"
          :key="index"
          @click="selectAdvantage(index)"
          :class="{ active: selectedAdvantageIndex === index }"
        >
          <h3>{{ advantage.title }}</h3>
        </div>
      </div>

      <div class="feature-description" v-if="selectedAdvantage">
        <h3>{{ selectedAdvantage.title }}</h3>
        <p>{{ selectedAdvantage.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import Wave2Component from '@/components/utilities/wave2.vue';

export default {
  name: 'AuditFeaturesComponent',
  components: {
    Wave2Component,
  },
  data() {
    return {
      selectedAdvantageIndex: 0,
      advantages: [
        { title: 'Performance', description: 'Optimisez vos workflows en automatisant les processus.' },
        { title: 'Optimisation des coûts', description: 'Profitez de solutions numériques ajustées pour réduire vos coûts.' },
        { title: 'Évolution des perspectives', description: 'Découvrez le potentiel de vos données grâce à des solutions évolutives.' },
        { title: 'Conseils et assistance', description: 'ALEZIA vous accompagne avec une approche de proximité.' },
      ],
    };
  },
  computed: {
    selectedAdvantage() {
      return this.advantages[this.selectedAdvantageIndex];
    }
  },
  methods: {
    selectAdvantage(index) {
      this.selectedAdvantageIndex = index;
    }
  }
};
</script>

<style scoped>
.audit-features {
  padding: 2rem;
  background-color: #f9f9f9;
  font-family: 'Poppins', sans-serif;
}

.audit-features h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.features-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Les cartes sont maintenant sur deux colonnes */
  gap: 1rem;
  width: 40%; /* Les cartes prennent 40% de l'espace */
}

.feature-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.feature-box h3 {
  color: #007BFF;
  text-align: center;
}

.feature-box.active {
  background-color: #e0f7fa;
}

.feature-box:hover {
  background-color: #e0f7fa;
}

.feature-description {
  width: 55%; /* Le texte prend 55% de l'espace */
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left; /* Aligner le texte à gauche */
}

.feature-description h3 {
  color: #007BFF;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.feature-description p {
  line-height: 1.6;
  font-size: 1rem;
}

.full-width-wave.no-bottom-margin {
  margin-bottom: 0;
}
</style>
