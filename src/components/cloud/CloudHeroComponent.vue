<template>
  <section class="cloud-hero">
    <div class="hero-content">
      <h1>{{ title }}</h1>
      <p>{{ description1 }}</p>
      <p>{{ description2 }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CloudHeroComponent',
  props: {
    title: {
      type: String,
      default: 'Le Cloud',
    },
    description1: {
      type: String,
      default: "Intégré au paysage entrepreneurial depuis quelques années, le Cloud propose une vaste gamme de services et ouvre aux entreprises un éventail infini de possibilités."
    },
    description2: {
      type: String,
      default: "Dans ce contexte, ALESIA permet à ses clients de saisir ces opportunités tout en hébergeant leurs données dans un datacenter situé en Belgique."
    }
  }
};
</script>

<style scoped>
.cloud-hero {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh; /* Prend toute la hauteur de la fenêtre */
  padding: 0 40px;
  background-image: url('@/assets/BK-logo.png'); /* Ajout de l'image de fond */
  background-size: 550px; /* Ajuster la taille de l'image */
  background-position: bottom right; /* Positionner l'image en bas à droite */
  background-repeat: no-repeat; /* Empêcher la répétition de l'image */
}

.hero-content {
  text-align: center;
  max-width: 1200px; /* Limiter la largeur du texte */
  z-index: 2; /* Assurer que le texte est au-dessus de l'image */
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #000; /* Texte en noir */
}

p {
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #000; /* Texte en noir pour une meilleure lisibilité */
}
</style>
