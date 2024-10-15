<template>
  <section class="spacing-section">
    <div class="container">
      <div class="left-logos">
        <div class="logo" v-for="(partner, index) in leftPartners" :key="index" :class="{'in-view': isInView, 'delayed': index >= 1}">
          <img :src="getPartnerLogo(partner.logo)" :alt="`Logo de ${partner.name}`" />
        </div>
      </div>
      <div class="divider"></div>
      <div class="text-container">
        <h2>Nos Marques</h2>
        <p>Notre société collabore avec les meilleurs standards du marché pour garantir la qualité et la fiabilité de nos solutions. Nous assurons à nos clients une technologie de pointe, une innovation continue et une performance optimale pour leurs besoins spécifiques.</p>
      </div>
      <div class="divider"></div>
      <div class="right-logos">
        <div class="logo" v-for="(partner, index) in rightPartners" :key="index" :class="{'in-view': isInView, 'delayed': index >= 1}">
          <img :src="getPartnerLogo(partner.logo)" :alt="`Logo de ${partner.name}`" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SpacingSection',
  data() {
    return {
      leftPartners: [
        { name: 'Partner 1', logo: 'partner1.png' },
        { name: 'Partner 2', logo: 'partner2.png' }
      ],
      rightPartners: [
        { name: 'Partner 3', logo: 'partner3.png' },
        { name: 'Partner 4', logo: 'partner4.png' }
      ],
      isInView: false
    };
  },
  methods: {
    handleScroll() {
      const elements = document.querySelectorAll('.logo');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add('in-view');
        } else {
          el.classList.remove('in-view');
        }
      });
    },
    getPartnerLogo(logo) {
      return require(`@/assets/${logo}`);
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Vérification initiale
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'); /* Importation de Poppins */

.spacing-section {
  position: relative;
  background-color: #192544; /* Changement de la couleur de fond */
  color: #fff; /* Texte en blanc */
  padding: 2em 2em; /* Diminuer le padding en haut et en bas */
  overflow: hidden; /* Assurer qu'il n'y a pas de débordement */
  min-height: auto; /* Supprimer la hauteur minimale */
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap; /* Allow elements to wrap on small screens */
}

.left-logos, .right-logos {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1; /* Prendre l'espace disponible */
}

.logo {
  opacity: 0;
  transition: all 1s ease-in-out; /* Ajuster la durée de la transition à 1s */
}

.logo.delayed {
  transition-delay: 0.3s; /* Délai pour les logos inférieurs */
}

.logo.in-view {
  opacity: 1;
}

.left-logos .logo.in-view {
  transform: translateX(0);
}

.left-logos .logo {
  transform: translateX(-100%);
}

.right-logos .logo.in-view {
  transform: translateX(0);
}

.right-logos .logo {
  transform: translateX(100%);
}

.logo img {
  width: 150px; /* Taille des logos */
  margin: 2em 0; /* Espace autour des logos */
  max-width: 100%; /* Assurer que les logos ne dépassent pas */
  height: auto; /* Maintenir le ratio de l'image */
}

.divider {
  width: 1px;
  background-color: #fff; /* Couleur de la barre verticale */
  margin: 0 2em; /* Espace autour de la barre */
  align-self: stretch; /* S'assurer que la barre prend toute la hauteur disponible */
}

.text-container {
  text-align: center;
  margin: 0 2em; /* Espace autour du texte */
  flex: 4; /* Prendre plus d'espace */
  max-width: 1000px; /* Définir une largeur maximale */
}

.text-container h2 {
  font-size: 60px;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0.5em;
}

.text-container p {
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
}

@media (max-width: 1024px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .divider {
    width: 80%;
    height: 1px;
    margin: 2em 0;
  }

  .text-container {
    margin: 2em 0;
  }
}

@media (max-width: 768px) {
  .text-container h2 {
    font-size: 40px;
  }

  .text-container p {
    font-size: 18px;
  }

  .logo img {
    width: 120px;
  }
}

@media (max-width: 480px) {
  .text-container h2 {
    font-size: 30px;
  }

  .text-container p {
    font-size: 16px;
  }

  .logo img {
    width: 100px;
  }

  .container {
    padding: 0 1em;
  }
}
</style>
