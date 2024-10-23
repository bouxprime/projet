<template>
  <section id="materiel-wildix" class="materiel-wildix">
    <h2>Le matériel Wildix</h2>
    <p class="subtitle">A déployer en fonction de vos besoins :</p>
    <div class="carousel-container">
      <button class="carousel-button prev" @click="prevSlide">‹</button>
      <div class="carousel-track-container">
        <ul class="carousel-track" :style="{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }">
          <li class="carousel-slide" v-for="n in totalSlides" :key="n">
            <img :src="getImagePath(n)" :alt="`Matériel Wildix ${n}`" />
          </li>
        </ul>
      </div>
      <button class="carousel-button next" @click="nextSlide">›</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SolutionMateriel',
  data() {
    return {
      currentSlide: 0,
      totalSlides: 10, // Nombre total de slides
      slidesToShow: 5, // Nombre de slides à afficher en même temps
    };
  },
  computed: {
    maxSlideIndex() {
      return this.totalSlides - this.slidesToShow;
    },
  },
  methods: {
    getImagePath(n) {
      return require(`@/assets/wildix${n}.png`);
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % (this.totalSlides + 1 - this.slidesToShow);
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + (this.totalSlides + 1 - this.slidesToShow)) % (this.totalSlides + 1 - this.slidesToShow);
    },
  },
};
</script>

<style scoped>
/* Import de la police Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

/* Styles généraux pour la police Poppins et sans-serif */
body {
  font-family: 'Poppins', sans-serif;
}

/* Styles pour la section "materiel-wildix" */
.materiel-wildix {
  padding: 2rem;
  padding-top: 4rem; /* Ajouter du padding en haut */
}

.materiel-wildix h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Poppins', sans-serif; /* Utilisation de la police Poppins */
}

.materiel-wildix .subtitle {
  text-align: center;
  margin-bottom: 6rem; /* Ajouter du padding en bas */
  font-size: 2rem;
  color: #007BFF; /* Couleur bleue spécifique */
  font-family: 'Poppins', sans-serif; /* Utilisation de la police Poppins */
}

/* Style pour le carrousel */
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
  min-width: calc(100% / 5); /* Ajustement pour afficher 5 slides */
  box-sizing: border-box;
  padding: 0 5px; /* Réduire l'espace entre les images */
  display: flex;
  justify-content: center;
}

.carousel-slide img {
  width: 120px; /* Ajustement pour rapprocher les images */
  height: 120px;
  border-radius: 10px;
  display: block;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #007bff;
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%; /* Rond */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Ajout d'une ombre pour un effet plus esthétique */
  font-family: 'Poppins', sans-serif; /* Utilisation de la police Poppins */
}

.carousel-button:hover {
  background-color: #0056b3; /* Changer le fond au survol */
}

.carousel-button.prev {
  left: 0;
}

.carousel-button.next {
  right: 0;
}
</style>
