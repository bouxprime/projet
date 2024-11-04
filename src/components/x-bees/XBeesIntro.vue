<template>
  <div>
    <!-- Section principale contenant la description et la table des matières -->
    <section class="main-section">
      <!-- Partie de gauche avec le texte introductif -->
      <div class="left-content">
        <section class="hero ma-section">
          <h1>X-Bees</h1>
          <p>
            X-Bees est une plateforme de communication unifiée conçue pour optimiser les processus de vente et de collaboration. Elle permet de maintenir une trace complète des interactions avec les prospects, y compris la possibilité de réécouter les conversations et consulter des résumés manuscrits, même après plusieurs mois sans contact.
          </p>
          <p>
            La plateforme intègre des fonctionnalités de traduction simultanée, permettant de communiquer facilement avec des interlocuteurs de différentes langues. X-Bees est également dotée d'outils d'intelligence artificielle pour analyser les conversations de vente et fournir des conseils en temps réel.
          </p>
        </section>
      </div>
      <!-- Partie de droite avec la table des matières -->
      <div class="solution-voip-toc">
        <h2>Table des matières</h2>
        <ul>
          <li><a href="#x-bees-features" @click.prevent="smoothScroll('#x-bees-features')">Fonctionnalités avancées de X-Bees</a></li>
          <li><a href="#integrations-xbees" @click.prevent="smoothScroll('#integrations-xbees')">Intégrations X-Bees</a></li>
          <li><a href="#x-bees" @click.prevent="smoothScroll('#x-bees')">X-Bees Features</a></li>
          <li><a href="#video-section" @click.prevent="smoothScroll('#video-section')">Découvrez X-Bees en Vidéo</a></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'XBeesIntro',
  data() {
    return {
      randomImage: ''
    };
  },
  mounted() {
    this.selectRandomImage();
  },
  methods: {
    selectRandomImage() {
      // Random image selection removed as per new request
    },
    smoothScroll(target) {
      const element = document.querySelector(target);
      if (!element) {
        console.warn('Element not found:', target);
        return;
      }
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.main-section {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: stretch;
  padding: 2rem 2rem 0;
  background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);
}

.left-content {
  flex: 2;
  position: relative;
}

.solution-voip-toc {
  flex: 1;
  background-color: #f0f0f0;
  padding: 2rem;
  border-radius: 8px;
  position: sticky;
  top: calc(var(--navbar-height, 80px) + 20px);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: auto;
  height: auto;
  align-self: center;
}

.solution-voip-toc h2 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #1e90ff;
}

.solution-voip-toc ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.solution-voip-toc a {
  color: #1e90ff;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 1px solid #1e90ff;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.solution-voip-toc a:hover {
  background-color: #1e90ff;
  color: #ffffff;
}

.hero {
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  z-index: 2;
  color: #000;
}

.ma-section {
  padding-bottom: 40px;
  z-index: 2;
}

.ma-section p {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  text-align: justify;
  line-height: 1.8;
  z-index: 2;
  color: #000;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .main-section {
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
  }

  .solution-voip-toc {
    position: relative;
    top: auto;
    width: 100%;
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .solution-voip-toc h2 {
    font-size: 1.25rem;
  }

  .solution-voip-toc a {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 1.75rem;
  }

  .ma-section p {
    font-size: 0.875rem;
  }

  .solution-voip-toc ul {
    gap: 1.5rem;
  }

  .solution-voip-toc a {
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
  }
}
</style>
