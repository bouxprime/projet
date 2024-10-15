<template>
  <div class="blog-home">
    <div class="blog-header">
      <h2 class="news-title">Les nouvelles de Alezia</h2>
      <div class="navigation-buttons">
        <button @click="prevSlide" class="nav-button">&#8249;</button>
        <button @click="nextSlide" class="nav-button">&#8250;</button>
      </div>
    </div>
    <p class="subheader">Lisez nos derniers articles</p>
    <div class="blog-cards-wrapper">
      <div class="blog-cards" :style="transformStyle">
        <div v-for="(card, index) in eventBus.news" :key="index" class="blog-card">
          <!-- Lien autour de la carte -->
          <a :href="card.link" target="_blank" rel="noopener noreferrer">
            <div class="card-image-wrapper">
              <img :src="require(`@/assets/${card.image}`)" alt="Card image">
            </div>
            <div class="card-content">
              <h2>{{ card.title }}</h2>
              <p>{{ card.description }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/eventBus';

export default {
  name: 'BlogHome',
  data() {
    return {
      eventBus,
      currentIndex: 0,
      cardWidth: 366, // Largeur d'une carte
      cardHeight: 480, // Hauteur d'une carte
      cardsPerPage: 3
    };
  },
  computed: {
    transformStyle() {
      return {
        transform: `translateX(-${this.currentIndex * this.cardWidth}px)`,
        transition: 'transform 0.5s ease'
      };
    }
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.eventBus.news.length - this.cardsPerPage) {
        this.currentIndex += 1;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.blog-home {
  background-color: #192544;
  color: white;
  padding: 40px 20px; /* Padding en haut et en bas */
  font-family: 'Poppins', sans-serif;
}

.blog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px; /* Réduire la marge en bas */
  padding-right: 20px; /* Ajouter un padding à droite pour aligner le titre */
  margin-top: 75px;
}

.news-title {
  margin: 0;
  font-size: 24px;
  padding-left: 20px; /* Ajouter un padding à gauche pour aligner le titre */
}

.subheader {
  margin: 0 0 20px 0;
  color: #ccc;
  text-align: left;
  padding-left: 20px; /* Ajouter un padding à gauche pour aligner le sous-titre */
}

.navigation-buttons {
  display: flex;
}

.nav-button {
  background-color: #1E90FF;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

.blog-cards-wrapper {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.blog-cards {
  display: flex;
  transition: transform 0.5s ease;
}

.blog-card {
  background: white;
  color: black;
  border-radius: 10px;
  padding: 20px;
  margin-right: 20px;
  flex: 0 0 366px; /* Largeur fixe pour les cartes */
  height: 480px; /* Hauteur fixe pour les cartes */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Aligner le contenu à gauche */
  box-sizing: border-box;
}

/* Enlève le surlignage du texte dans les liens */
.blog-card a {
  text-decoration: none;
  color: inherit; /* Hérite de la couleur du texte */
}

.blog-card a:hover {
  color: #1E90FF; /* Change la couleur lors du survol */
}

.card-image-wrapper {
  width: 100%;
  display: flex;
  justify-content: center; /* Centrer l'image horizontalement */
}

.blog-card img {
  width: 150px; /* Taille fixe pour les images */
  height: 150px; /* Taille fixe pour les images */
  object-fit: contain;
  margin-bottom: 20px; /* Ajouter un espace en bas de l'image */
}

.card-content {
  display: flex;
  flex-direction: column;
  width: 100%; /* Assurez-vous que le contenu prend toute la largeur disponible */
}

.card-content h2 {
  font-size: 18px;
  margin: 0 0 10px 0;
  text-align: left;
}

.card-content p {
  font-size: 14px;
  color: #666;
  margin: 0;
  text-align: left;
}

/* Responsive styles */
@media (max-width: 768px) {
  .blog-header {
    flex-direction: column;
    align-items: flex-start;
    padding-right: 0;
  }

  .news-title {
    padding-left: 0;
    margin-bottom: 10px;
  }

  .subheader {
    padding-left: 0;
    text-align: left;
  }

  .navigation-buttons {
    margin-top: 10px;
  }

  .blog-cards-wrapper {
    overflow-x: visible; /* Permet le défilement horizontal pour les petits écrans */
  }

  .blog-cards {
    flex-direction: column;
    width: 100%; /* Largeur adaptée au contenu */
  }

  .blog-card {
    flex: 0 0 auto; /* Largeur réduite pour les petites écrans */
    height: auto; /* Hauteur auto pour les petites écrans */
    width: 100%; /* Prendre toute la largeur de l'écran */
    margin-bottom: 20px;
  }

  .card-image-wrapper {
    display: none; /* Cacher les images pour les petits écrans */
  }

  .card-content h2 {
    font-size: 20px;
  }

  .card-content p {
    font-size: 16px;
  }

  .nav-button {
    display: none; /* Cacher les boutons de navigation sur les petits écrans */
  }
}
</style>
