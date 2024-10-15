<template>
  <section class="hero ma-section" :style="{ backgroundImage: `url(${randomImage})` }">
    <h1>X-Bees</h1>
    <p>
      X-Bees est une plateforme de communication unifiée conçue pour optimiser les processus de vente et de collaboration. Elle permet de maintenir une trace complète des interactions avec les prospects, y compris la possibilité de réécouter les conversations et consulter des résumés manuscrits, même après plusieurs mois sans contact.
    </p>
    <p>
      La plateforme intègre des fonctionnalités de traduction simultanée, permettant de communiquer facilement avec des interlocuteurs de différentes langues. X-Bees est également dotée d'outils d'intelligence artificielle pour analyser les conversations de vente et fournir des conseils en temps réel.
    </p>
  </section>
</template>

<script>
export default {
  name: 'XBeesIntro',
  data() {
    return {
      images: [
        require('@/assets/bk/bk1.png'),
        require('@/assets/bk/bk2.png'),
        require('@/assets/bk/bk3.png'),
        require('@/assets/bk/bk4.png'),
        require('@/assets/bk/bk5.png'),
      ],
      randomImage: ''
    };
  },
  mounted() {
    this.selectRandomImage();
  },
  methods: {
    selectRandomImage() {
      const randomIndex = Math.floor(Math.random() * this.images.length);
      this.randomImage = this.images[randomIndex];
    }
  }
};
</script>

<style scoped>
/* Importation de la police depuis Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.hero {
  text-align: center;
  min-height: 100vh; /* Section prend toute la hauteur de la fenêtre */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centre le contenu verticalement */
  align-items: center; /* Centre le contenu horizontalement */
  padding: 2rem;
  background-size: 550px; /* Ajuster la taille de l'image */
  background-position: bottom right; /* Positionner l'image en bas à droite */
  background-repeat: no-repeat; /* Empêcher la répétition de l'image */
  font-family: 'Poppins', sans-serif; /* Application de la police à la section */
  position: relative;
  z-index: 1; /* Garder le texte au-dessus de l'image */
}

/* Style pour le titre */
.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  z-index: 2; /* Assure que le texte passe devant */
  color: #000; /* Couleur noire pour le titre */
}

/* Ajout du padding en bas et espacement supplémentaire pour les paragraphes */
.ma-section {
  padding-bottom: 40px; /* Augmente l'espace en bas de la section */
  z-index: 2;
}

/* Ciblage des paragraphes dans cette section */
.ma-section p {
  max-width: 800px; /* Limite la largeur des paragraphes */
  margin-left: auto; /* Centre le paragraphe horizontalement */
  margin-right: auto; /* Centre le paragraphe horizontalement */
  margin-bottom: 20px; /* Ajoute de l'espace entre les paragraphes */
  text-align: justify; /* Aligne le texte de manière justifiée */
  line-height: 1.8; /* Augmente l'espacement entre les lignes pour améliorer la lisibilité */
  z-index: 2; /* Assure que le texte passe devant */
  color: #000; /* Texte en noir */
}
</style>
