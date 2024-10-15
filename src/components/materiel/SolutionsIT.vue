<template>
    <section class="peripheriques-connexes">
      <h2>Périphériques Connexes</h2>
      <p class="description">
        Nous répondons à l’ensemble de vos besoins en périphériques grâce à une large gamme de produits, incluant des imprimantes, téléphones, casques, et bien plus encore. Avec ALEZIA, vous disposez de tous les équipements nécessaires pour garantir une expérience utilisateur optimale et une productivité accrue.
      </p>
      <div class="carousel-container">
        <button class="carousel-button prev" @click="prevSlide">‹</button>
        <div class="carousel-track-container">
          <ul class="carousel-track" :style="{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }">
            <li class="carousel-slide" v-for="n in totalSlides" :key="n">
              <img :src="getImagePath(n)" :alt="`Périphérique Connexe ${n}`" />
            </li>
          </ul>
        </div>
        <button class="carousel-button next" @click="nextSlide">›</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'PeripheriquesConnexes',
    data() {
      return {
        currentSlide: 0,
        totalSlides: 4, // Nombre total de slides
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
        return require(`@/assets/wildix${n}.png`); // Ajuster le chemin vers vos images
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
  .peripheriques-connexes {
    background-color: white; /* Background color blanc */
    padding: 3rem 0; /* Padding top et bottom */
  }
  
  .peripheriques-connexes h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
    color: black;
  }
  
  .peripheriques-connexes .description {
    text-align: center;
    margin-bottom: 3rem; /* Espacement entre le texte et le carrousel */
    font-size: 1.2rem;
    color: #333;
  }
  
  /* Styles pour le carrousel */
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
    min-width: calc(100% / 3); /* Ajustement pour afficher 3 slides */
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    justify-content: center;
  }
  
  .carousel-slide img {
    width: 120px;
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
    border-radius: 50%;
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
  