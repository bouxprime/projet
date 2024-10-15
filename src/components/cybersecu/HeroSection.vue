<template>
  <section class="hero">
    <h1>Cybersécurité</h1>
    <p>Attention, aucune offre disponible pour la ‘cybersécurité’.</p>
    <p>
      Chez ALEZIA, nous pensons que la sécurité ne devrait jamais être une option, mais plutôt une composante fondamentale de tous vos services.
    </p>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

.hero {
  text-align: center;
  padding: 2rem;
  background-color: #ffffff; /* Fond blanc pour la section */
  height: 100vh; /* Assure que la section prend toute la hauteur de l'écran */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif; /* Utilise la police Poppins */
  background-image: url('@/assets/BK-logo.png'); /* Ajout de l'image de fond */
  background-size: 550px; /* Taille de l'image */
  background-position: bottom right; /* Positionner l'image en bas à droite */
  background-repeat: no-repeat; /* Empêcher la répétition de l'image */
}

.hero h1 {
  font-size: 40px; /* Taille du titre */
  font-weight: 600; /* Gras pour le titre */
  color: #333; /* Couleur du titre */
  margin-bottom: 1.5rem;
}

.hero p {
  font-size: 18px; /* Taille des paragraphes */
  color: #555; /* Couleur des paragraphes */
  margin-bottom: 1.5rem;
  line-height: 1.8; /* Espacement entre les lignes */
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 30px; /* Réduction du titre sur mobile */
  }

  .hero p {
    font-size: 16px; /* Réduction de la taille des paragraphes sur mobile */
  }
}
</style>
