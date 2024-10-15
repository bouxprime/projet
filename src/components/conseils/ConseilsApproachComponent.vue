<template>
  <section class="approach">
    <h2>Une approche personnalisée</h2>
    <div class="content">
      <div class="text">
        <p>De l’identification de la solution adéquate à votre problématique jusqu’à sa mise en œuvre, ALEZIA s’assure que vos ressources digitales sont en parfaite adéquation avec vos objectifs de croissance.</p>
        <p>Quelle que soit votre problématique, ALEZIA vous propose une consultance complète.</p>
      </div>
      <div class="image">
        <img :src="require('@/assets/à-propos-alezia-2.jpg')" :alt="imageAlt" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ConseilsApproachComponent',
  props: {
    imageAlt: {
      type: String,
      default: 'Image of personalized approach',
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.approach {
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 6rem;
  font-family: 'Poppins', sans-serif;
  background: url('@/assets/alezia-background-3.png') no-repeat left center; /* Image déplacée à gauche */
  background-size: 25%; /* Taille réduite à 25% pour s'ajuster à la mise en page */
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.content {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
  gap: 5rem;
  position: relative;
  z-index: 1; /* Assure que le texte et l'image du contenu restent devant */
}

.text {
  font-size: 1.125rem;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 1rem;
}

.image img {
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  transform: rotate(-90deg);
}

@media (min-width: 768px) {
  .content {
    flex-direction: row;
    gap: 5rem;
  }

  .text {
    margin-right: 2rem;
  }
}
</style>
