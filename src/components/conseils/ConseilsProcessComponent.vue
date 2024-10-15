<template>
  <section class="process-carousel">
    <h2>Le processus ALEZIA</h2>
    <p class="subtitle highlight">Dans tout projet, c'est avant tout la nature du problème qui détermine la solution.</p>
    <div class="carousel-container">
      <button class="carousel-button prev" @click="prevSlide">‹</button>
      <div class="carousel-track-container">
        <ul class="carousel-track" :style="{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }">
          <li class="carousel-slide" v-for="(step, index) in steps" :key="index">
            <div class="card">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </li>
        </ul>
      </div>
      <button class="carousel-button next" @click="nextSlide">›</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ConseilsProcessCarousel',
  data() {
    return {
      currentSlide: 0,
      slidesToShow: 3, // Nombre de slides à afficher en même temps
      steps: [
        { title: 'Gestion de projet', description: 'Nous assurons une gestion de projet rigoureuse pour garantir la réussite.' },
        { title: 'Dématérialisation', description: 'Nous vous aidons à dématérialiser vos processus pour plus d\'efficacité.' },
        { title: 'Gestion e-CRM', description: 'Optimisez la relation client avec des solutions CRM adaptées à vos besoins.' },
        { title: 'Cloud', description: 'Profitez de la flexibilité et de la sécurité des solutions cloud pour vos infrastructures.' },
        { title: 'Cybersécurité', description: 'Renforcez la sécurité de vos données avec des stratégies avancées.' },
        { title: 'Infogérance', description: 'Nous prenons en charge la gestion de votre infrastructure IT.' },
        { title: 'Matériel IT', description: 'Nous fournissons du matériel IT de haute qualité pour répondre à vos besoins.' },
      ],
    };
  },
  computed: {
    totalSlides() {
      return this.steps.length;
    },
    maxSlideIndex() {
      return this.totalSlides - this.slidesToShow;
    },
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.maxSlideIndex) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.maxSlideIndex;
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* Styles pour la section "process-carousel" */
.process-carousel {
  padding: 2rem;
  text-align: center;
  padding-bottom: 3rem; /* Ajout de padding en bas */
  font-family: 'Poppins', sans-serif; /* Appliquer la police Poppins */
}

.process-carousel h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.process-carousel .subtitle {
  font-size: 1.5rem; /* Augmentation de la taille */
  margin-bottom: 2rem;
  color: #007BFF; /* Mettre la couleur en bleu */
  font-weight: bold; /* Optionnel pour accentuer */
}

.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
}

.carousel-track-container {
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: calc(100% / 3); /* 3 cards visibles en même temps */
  box-sizing: border-box;
  padding: 0 15px;
  display: flex;
  justify-content: center;
}

.card {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Ombre légère */
  text-align: center; /* Centrer le texte dans les cartes */
  width: 100%;
}

.card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  text-align: center; /* Centrer le titre des cartes */
}

.card p {
  font-size: 1rem;
  line-height: 1.4;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #007bff; /* Mettre la couleur en #007BFF */
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.carousel-button:hover {
  background-color: #0056b3;
}

.carousel-button.prev {
  left: 0;
}

.carousel-button.next {
  right: 0;
}
</style>
