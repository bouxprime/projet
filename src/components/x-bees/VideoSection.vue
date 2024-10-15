<template>
  <section class="video-section">
    <h2>Découvrez X-Bees en vidéo</h2>
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/6bXZX6C4FjM" frameborder="0" allowfullscreen></iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VideoSection',
};
</script>

<style scoped>
/* Import de la police Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

/* Appliquer la police Poppins à l'ensemble de la section */
.video-section {
  padding: 2rem;
  padding-top: 6rem;
  padding-bottom: 8rem; /* Ajout de padding en bas */
  background-color: #f7f7f7;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif; /* Utilisation de la police Poppins */
}

.video-section h2 {
  margin-bottom: 1rem;
  color: #007bff; /* Couleur bleue spécifique */
  font-family: 'Poppins', sans-serif; /* Utilisation de la police Poppins */
}

.video-container {
  width: 678px; /* Largeur spécifiée */
  height: 380px; /* Hauteur spécifiée */
  background-color: #ccc; /* Couleur de fond grise */
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-container iframe {
  width: 100%;
  height: 100%;
}
</style>
