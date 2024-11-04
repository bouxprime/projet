<template>
  <div class="blog-home">
    <div class="blog-header">
      <h2 class="news-title">Les nouvelles de Alezia</h2>
      <div class="navigation-buttons">
        <button @click="prevSlide" class="nav-button" aria-label="Previous Slide">&#8249;</button>
        <button @click="nextSlide" class="nav-button" aria-label="Next Slide">&#8250;</button>
      </div>
    </div>
    <p class="subheader">Lisez nos derniers articles</p>
    <div class="blog-cards-wrapper">
      <div class="blog-cards" :style="transformStyle">
        <div v-for="(card, index) in eventBus.news" :key="index" class="blog-card">
          <!-- Lien autour de la carte -->
          <a :href="card.link" target="_blank" rel="noopener noreferrer">
            <div class="card-image-wrapper">
              <img :src="require(`@/assets/${card.image}`)" alt="Card image" loading="lazy">
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
  padding: 40px 20px;
  font-family: 'Poppins', sans-serif;
}

.blog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-right: 20px;
  margin-top: 75px;
}

.news-title {
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  color: #1E90FF;
  padding-left: 20px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.subheader {
  margin: 0 0 20px 0;
  color: #ccc;
  text-align: left;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
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
  transition: all 0.3s ease;
}

.nav-button:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
  flex: 0 0 366px;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
}

.blog-card a {
  text-decoration: none;
  color: inherit;
}

.blog-card a:hover {
  color: #1E90FF;
}

.card-image-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.blog-card img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.card-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.card-content h2 {
  font-size: 18px;
  margin: 0 0 10px 0;
  text-align: left;
}

.card-content p {
  font-size: 14px;
  color: #444;
  line-height: 1.6;
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
    font-size: 24px;
  }

  .subheader {
    padding-left: 0;
    text-align: left;
    font-size: 16px;
  }

  .navigation-buttons {
    margin-top: 10px;
  }

  .blog-cards-wrapper {
    overflow-x: visible;
  }

  .blog-cards {
    flex-direction: column;
    width: 100%;
  }

  .blog-card {
    flex: 0 0 auto;
    height: auto;
    width: 100%;
    margin-bottom: 20px;
  }

  .card-image-wrapper {
    display: none;
  }

  .card-content h2 {
    font-size: 20px;
  }

  .card-content p {
    font-size: 16px;
  }

  .nav-button {
    display: none;
  }
}
</style>
