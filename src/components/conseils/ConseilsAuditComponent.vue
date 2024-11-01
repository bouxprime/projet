<template>
  <section class="audit-features">
    <h2>Audit & Accompagnement</h2> <!-- Titre de la section -->

    <div class="features-container">
      <div class="features-grid">
        <div class="feature-box" v-for="(advantage, index) in advantages" :key="index">
          <img :src="advantage.icon" :alt="advantage.title" class="feature-icon" />
          <h3>{{ advantage.title }}</h3>
          <p>{{ advantage.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AuditFeaturesComponent',
  data() {
    return {
      advantages: [
        { title: 'Performance', description: 'Optimisez vos workflows en automatisant les processus.', icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828640.png' },
        { title: 'Optimisation des coûts', description: 'Profitez de solutions numériques ajustées pour réduire vos coûts.', icon: 'https://cdn-icons-png.flaticon.com/512/2331/2331966.png' },
        { title: 'Évolution des perspectives', description: 'Découvrez le potentiel de vos données grâce à des solutions évolutives.', icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' },
        { title: 'Conseils et assistance', description: 'ALEZIA vous accompagne avec une approche de proximité.', icon: 'https://cdn-icons-png.flaticon.com/512/1946/1946406.png' },
      ],
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.audit-features {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #cce7ff, #e0f8ff);
  text-align: center;
}

.audit-features h2 {
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #0056b3;
  font-weight: 600;
}

.features-container {
  display: flex;
  justify-content: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-items: center;
  width: 100%;
}

.feature-box {
  background-color: #fff;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  max-width: 300px;
}

.feature-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
}

.feature-box h3 {
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #007BFF;
  font-weight: 600;
}

.feature-box p {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
}

/* Ajustement pour les petits écrans */
@media (max-width: 768px) {
  .audit-features {
    padding: 3rem 1rem;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}
</style>
