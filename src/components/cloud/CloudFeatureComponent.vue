<template>
  <section class="cloud-features-section">
    <h2>Pourquoi avoir recours au Cloud ?</h2>
    <div class="features-container">
      <div
        class="feature-item"
        v-for="(feature, index) in features"
        :key="index"
      >
        <img :src="feature.icon" :alt="feature.title + ' icon'" class="feature-icon" />
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CloudFeatureComponent',
  data() {
    return {
      features: [
        {
          title: 'Accessible',
          description: "Le cloud est accessible à tous, sans prérequis spécifiques. Que vous soyez une PME ou une grande entreprise, le cloud présente des avantages pour tous les types d’organisations. Il permet de réduire les coûts, d'ajuster facilement les ressources, de simplifier la maintenance, et d'améliorer la sécurité.",
          icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
        },
        {
          title: 'Flexible',
          description: "Le cloud permet de créer rapidement des serveurs sur mesure, parfaitement adaptés à vos envies, et de modifier leurs particularités à tout moment. Selon vos exigences, vous pouvez augmenter ou diminuer le stockage disponible.",
          icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png'
        },
        {
          title: 'Local',
          description: "Le cloud est omniprésent, et toute machine connectée à internet peut être considérée comme faisant partie du cloud. Pour les serveurs, nous utilisons des Data Centers situés en Belgique.",
          icon: 'https://cdn-icons-png.flaticon.com/512/684/684908.png'
        },
        {
          title: 'Sécurisé',
          description: "Le cloud offre une flexibilité remarquable en adaptant les serveurs à vos besoins spécifiques. Il assure également une sécurité accrue grâce à des datacenters où le matériel est protégé contre les accès non autorisés.",
          icon: 'https://cdn-icons-png.flaticon.com/512/3197/3197158.png'
        }
      ]
    };
  }
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

.cloud-features-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #cce7ff, #e0f8ff);
  text-align: center;
}

.cloud-features-section h2 {
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #0056b3;
  font-weight: 600;
}

.features-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-items: center;
}

.feature-item {
  background-color: #fff;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.feature-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
}

.feature-item h3 {
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #007BFF;
  font-weight: 600;
}

.feature-item p {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
}
</style>
