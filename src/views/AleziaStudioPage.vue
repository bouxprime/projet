<template>
  <section class="hero ma-section">
    <h1>Alezia Studio</h1>
    <p>Alezia Studio vous permet de configurer facilement la messagerie vocale de votre entreprise. Sélectionnez une voix, choisissez une musique d'attente, et personnalisez les messages pour vos clients. Recevez ensuite votre configuration par mail, prête à être intégrée dans votre système de téléphonie.</p>
    <button class="main-button">Commencer</button>
  </section>
</template>

<script>
export default {
  name: 'AleziaStudioPage',
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
  padding: 2rem; /* Ajout de padding */
  background-color: #f7f7f7; /* Couleur de fond */
  font-family: 'Poppins', sans-serif; /* Application de la police à la section */
  position: relative;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #000; /* Couleur noire pour le titre */
}

.ma-section {
  padding-bottom: 40px; /* Augmente l'espace en bas de la section */
}

.ma-section p {
  max-width: 800px; /* Limite la largeur des paragraphes */
  margin-left: auto; /* Centre le paragraphe horizontalement */
  margin-right: auto; /* Centre le paragraphe horizontalement */
  margin-bottom: 20px; /* Ajoute de l'espace entre les paragraphes */
  text-align: justify; /* Aligne le texte de manière justifiée */
  line-height: 1.8; /* Augmente l'espacement entre les lignes pour améliorer la lisibilité */
  color: #333; /* Couleur du texte */
}

.main-button {
  padding: 1rem 2rem;
  background-color: #007BFF;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem; /* Ajoute un espace au-dessus du bouton */
}

.main-button:hover {
  background-color: #0056b3;
}
</style>
