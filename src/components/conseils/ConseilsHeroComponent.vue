<template>
  <section class="hero">
    <h1>Conseil & accompagnement</h1>
    <p class="subtitle blue-text">
      ALEZIA vous accompagne dans vos évolutions technologiques en mettant à votre disposition des talents aux compétences reconnues.
    </p>
    <p class="body-text">
      La transformation numérique est désormais incontournable au sein des entreprises, mais la recherche des solutions adéquates devient de plus en plus ardue.
      Les évolutions technologiques, qui renforcent les restructurations au sein des sociétés, représentent un défi majeur pour la majorité des institutions.
      Les nouvelles technologies, ainsi que les normes qui les accompagnent, sont souvent complexes à comprendre et difficiles à maîtriser, ce qui constitue le cœur de l'expertise d'ALEZIA.
      Quel que soit votre besoin, nous capitalisons sur la puissance d'un réseau de partenaires fiables pour dénicher le talent qui répondra avec exactitude à votre demande.
      Ces experts, aux compétences reconnues, sauront vous diriger vers la solution la plus complète et adaptée à vos enjeux.
    </p>
  </section>
</template>

<script>
export default {
  name: 'ConseilsHeroComponent',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Prend toute la hauteur de la fenêtre */
  width: 100vw; /* Prend toute la largeur de la fenêtre */
  padding: 4rem 1rem;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box; /* Assure que le padding est pris en compte dans les dimensions */
  background: url('@/assets/alezia-background-3.png') no-repeat calc(100% + 50px) center;
  background-size: 40%; /* Réduit la taille de l'image à 40% de la largeur */
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.body-text {
  font-size: 1rem;
  line-height: 1.6;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
}

.blue-text {
  color: #007BFF;
}
</style>
