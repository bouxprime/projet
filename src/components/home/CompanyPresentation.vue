<template>
  <section class="company-presentation">
    <div class="container">
      <div class="image-container">
        <img src="@/assets/histoire-alezia.png" alt="Person Image" class="person-image" />
      </div>
      <div class="text-container">
        <h2>L'histoire d'Alezia</h2>
        <p class="description">En 52 avant notre ère, Gaulois et Romains s'affrontent lors du siège d'<strong>Alésia</strong>, un épisode décisif de la guerre des Gaules. Malgré une situation critique, encerclés par deux armées gauloises et en infériorité numérique, les troupes romaines remportent pourtant cette bataille finale. Et attribuer cette victoire à la chance ou au hasard serait une erreur d’appréciation. Jules César, fin observateur, exploite les spécificités du terrain pour inverser le cours des événements, révélant ainsi son talent exceptionnel pour la stratégie, l'innovation et sa détermination sans faille.

Plus de 2000 ans plus tard, bien loin des champs de bataille, la société Alezia mène son propre combat pour accompagner au mieux ses partenaires. C’est en s’appuyant sur ces mêmes valeurs – observation, stratégie, innovation et détermination – qu’Alezia puise la force nécessaire pour mener à bien ses missions.</p>
        <p class="founder-info"> Alezia, Co-Fondateur</p>
      </div>
    </div>
  </section>
  <section class="spacingsection">
    <!-- Your spacing section content -->
  </section>
</template>

<script>
export default {
  name: 'CompanyPresentation',
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      setTimeout(() => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      }, 200);
    });
    const image = this.$el.querySelector('.person-image');
    if (image) {
      observer.observe(image);
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.company-presentation {
  background-color: #efeded;
  color: #000000;
  padding: 3em 1em;
  text-align: center;
  position: relative;
  overflow: visible;
  z-index: 2;
}
.company-presentation::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 10%;
  width: 100%;
  height: 100%;
  background-size: contain;
  opacity: 0.6;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.company-presentation .container {
  display: flex;
  align-items: flex-end;
  max-width: 1400px;
  margin: 0 auto;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  padding: 0 3em;
}
.image-container {
  flex: 1;
  max-width: 40%;
  text-align: center;
  position: relative;
  z-index: 3;
  margin-left: -2em; /* Déplace l'image plus vers la gauche */
}
.person-image {
  width: 100%;
  max-width: 800px;
  height: auto;
  margin-top: 20px;
  margin-bottom: -50px; /* Assure que l'image touche la section suivante */
  border: none;
  z-index: 4;
  position: relative;
  border-radius: 5%;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease-in-out;
}
.person-image.show {
  opacity: 1;
  transform: translateY(0);
}
.text-container {
  flex: 2;
  max-width: 55%;
  padding: 1em;
  text-align: left;
  margin-left: 1em; /* Ajuste le décalage du texte */
}
.text-container h2 {
  font-size: 2.8em;
  margin-bottom: 1em;
  font-family: 'Poppins', sans-serif;
}
.text-container .description {
  font-size: 18px;
  line-height: 1.8;
  font-family: 'Poppins', sans-serif;
  width: 100%;
}
.founder-info {
  font-size: 20px;
  font-weight: bold;
  color: #1e90ff;
  margin-top: 1em;
  font-family: 'Poppins', serif;
}

/* Animation Trigger on Scroll */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Media Queries */
@media (max-width: 768px) {
  .company-presentation {
    padding: 2em 1em;
  }
  .company-presentation::before {
    display: none; /* Hide the background image for small screens */
  }
  .company-presentation .container {
    padding: 0 1em;
    flex-direction: column;
    align-items: center;
  }
  .image-container {
    max-width: 100%;
    margin-left: 0;
    order: 1; /* Ensure the image appears first */
  }
  .person-image {
    margin-bottom: 20px; /* Ensure space between the image and text */
  }
  .text-container {
    max-width: 100%;
    margin-left: 0;
    text-align: center;
    order: 2; /* Ensure the text appears after the image */
  }
  .text-container h2 {
    font-size: 2em;
  }
  .text-container .description {
    font-size: 16px;
  }
  .founder-info {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .company-presentation {
    padding: 1.5em 0.5em;
  }
  .company-presentation::before {
    display: none; /* Hide the background image for small screens */
  }
  .company-presentation .container {
    padding: 0 0.5em;
  }
  .image-container {
    max-width: 100%;
    margin-left: 0;
    order: 1; /* Ensure the image appears first */
  }
  .person-image {
    margin-bottom: 20px; /* Ensure space between the image and text */
  }
  .text-container {
    max-width: 100%;
    margin-left: 0;
    text-align: center;
    order: 2; /* Ensure the text appears after the image */
  }
  .text-container h2 {
    font-size: 1.8em;
  }
  .text-container .description {
    font-size: 14px;
  }
  .founder-info {
    font-size: 16px;
  }
}
.spacingsection {
  position: relative;
  z-index: 1;
  background-color: #000;
}
</style>

