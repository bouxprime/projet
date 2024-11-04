<template>
  <section id="art-project" class="art-project">
    <div class="content">
      <div class="image">
        <img src="@/assets/à-propos-alezia.jpg" alt="Project Image" />
      </div>
      <div class="text">
        <h2>L'art de faire aboutir votre projet</h2>
        <p>La réussite d'un projet de digitalisation réside dans la faculté à proposer la solution la mieux adaptée à un besoin spécifique et aux contraintes imposées par un contexte.</p>
        <p>Ainsi, la réussite de votre transformation numérique repose sur une compréhension approfondie de votre environnement informatique, une synergie de compétences spécifique que nos experts incarnent parfaitement. Quel que soit le domaine d'activité, la nature ou taille de l’institution, nous proposons une analyse détaillée spécifique aux pratiques relatives à chaque secteur pour repérer les opportunités favorisant votre croissance.</p>
      </div>
    </div>
    <p class="closing-text">Forte d'une expérience probante au cœur de la transformation numérique, ALEZIA manipule avec aisance tous les codes de l’informatique et des télécommunications, ainsi que des systèmes d'information et des innovations. Nous analysons avec minutie le potentiel de chaque composante selon vos besoins spécifiques.</p>
  </section>
</template>

<script>
export default {
  name: 'ConseilsArtComponent',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.art-project {
  padding: 2rem;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif;
}

.content {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 900px;
  width: 100%;
  gap: 2rem;
  margin: 0 auto;
}

.image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  width: 300px;
}

.text {
  text-align: left;
  flex: 1;
  max-width: 500px;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #007BFF;
}

p {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1rem;
}

.closing-text {
  margin-top: 0;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #333;
  max-width: 900px;
  text-align: justify;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
  }

  .image {
    width: 100%;
    text-align: center;
  }

  .text {
    max-width: 100%;
    text-align: center;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  .closing-text {
    padding: 1rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .art-project {
    padding: 1rem;
  }

  h2 {
    font-size: 1.3rem;
  }

  p {
    font-size: 0.95rem;
  }
}
</style>
