<template>
  <section class="integrations-xbees">
    <h2>Intégrations X-Bees</h2>
    <p class="subtitle">À déployer en fonction de vos besoins :</p>
    <div class="carousel-container">
      <button class="carousel-button prev" @click="prevSlide">‹</button>
      <div class="carousel-track-container">
        <ul class="carousel-track" :style="{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }">
          <li class="carousel-slide" v-for="n in totalSlides" :key="n">
            <img :src="getImagePath(n)" :alt="`Intégration X-Bees ${n}`" />
          </li>
        </ul>
      </div>
      <button class="carousel-button next" @click="nextSlide">›</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntegrationsXBees',
  data() {
    return {
      currentSlide: 0, // Commencer à la première diapositive
      totalSlides: 6, // Nombre total de slides
      slidesToShow: 3, // Nombre de slides à afficher en même temps
    };
  },
  computed: {
    maxSlideIndex() {
      return this.totalSlides - this.slidesToShow;
    },
  },
  methods: {
    getImagePath(n) {
      return require(`@/assets/xbees/xbees${n}.webp`); // Ajuster le chemin pour correspondre aux fichiers
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % (this.maxSlideIndex + 1);
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + (this.maxSlideIndex + 1)) % (this.maxSlideIndex + 1);
    },
  },
};
</script>

<style scoped>
/* Import de la police Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

/* Styles pour la section "integrations-xbees" */
.integrations-xbees {
  padding: 2rem;
  padding-top: 6rem;
  padding-bottom: 8rem; /* Ajout de padding en bas */
  font-family: 'Poppins', sans-serif; /* Utilisation de la police Poppins */
}

.integrations-xbees h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Poppins', sans-serif; /* Utilisation de la police Poppins */
}

.integrations-xbees .subtitle {
  text-align: center;
  margin-bottom: 6rem;
  font-size: 2rem;
  color: #007bff; /* Couleur bleue spécifique */
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
  min-width: calc(100% / 3); /* Ajuster pour 3 images visibles */
  box-sizing: border-box;
  padding: 0 5px;
  display: flex;
  justify-content: center;
}

.carousel-slide img {
  max-width: 100%; /* Ajuster la largeur maximale de l'image */
  max-height: 120px; /* Limiter la hauteur des images */
  object-fit: contain; /* Garder les proportions sans déformation */
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
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  font-family: 'Poppins', sans-serif; /* Utilisation de la police Poppins */
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
