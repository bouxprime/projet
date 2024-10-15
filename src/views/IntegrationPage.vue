<template>
  <div class="integration-page">
    <!-- Titre Principal -->
    <section class="hero">
      <h1>Intégration</h1>
      <div class="hero-text">
        <p>Wildix se distingue par ses nombreuses intégrations, qui permettent d'améliorer la productivité et de simplifier les processus métier.</p>
        <p>Le système s'intègre facilement avec des CRM, des ERP, et d'autres outils de gestion utilisés par les entreprises. Ces intégrations permettent de synchroniser les données en temps réel, d'automatiser des tâches courantes, et d'améliorer la communication interne et externe.</p>
        <p>Par exemple, les appels entrants peuvent automatiquement afficher les fiches clients dans un CRM, ce qui facilite la gestion des interactions et améliore l'efficacité du service client. Grâce à ces intégrations, Wildix s'adapte parfaitement aux besoins spécifiques de chaque entreprise.</p>
      </div>
    </section>

    <!-- Texte d'intégrations disponibles -->
    <section class="integrations-available">
      <p class="integrations-text">Nos intégrations disponibles</p>
    </section>

    <!-- Section: Classements -->
    <section class="classifications">
      <div class="classification-item">ALL</div>
      <div class="classification-item">hopital</div>
      <div class="classification-item">logiciel</div>
      <div class="classification-item">hardware</div>
      <div class="classification-item">carrière</div>
    </section>

    <!-- Grille des cadres gris -->
    <div class="integrations-grid">
      <div class="integration-item">
        <img src="@/assets/integration/integration1.png" alt="Integration Image 1" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration2.png" alt="Integration Image 2" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration3.png" alt="Integration Image 3" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration4.png" alt="Integration Image 4" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration5.png" alt="Integration Image 5" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration6.png" alt="Integration Image 6" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration7.png" alt="Integration Image 7" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration8.png" alt="Integration Image 8" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration9.png" alt="Integration Image 9" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration10.png" alt="Integration Image 10" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration11.png" alt="Integration Image 11" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration12.png" alt="Integration Image 12" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration13.png" alt="Integration Image 13" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration14.png" alt="Integration Image 14" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration15.png" alt="Integration Image 15" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration16.png" alt="Integration Image 16" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration17.png" alt="Integration Image 17" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration18.png" alt="Integration Image 18" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration19.png" alt="Integration Image 19" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration20.png" alt="Integration Image 20" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration21.png" alt="Integration Image 21" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration22.png" alt="Integration Image 22" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration23.png" alt="Integration Image 23" class="integration-image" />
      </div>
      <div class="integration-item">
        <img src="@/assets/integration/integration24.png" alt="Integration Image 24" class="integration-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntegrationPage',
};
</script>

<style scoped>
/* Import de la police Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

/* Appliquer la police Poppins */
body {
  font-family: 'Poppins', sans-serif;
}

.integration-page {
  padding: 0;
  margin: 0;
}

.hero {
  text-align: center;
  height: 100vh; /* Section prend toute la hauteur de la fenêtre */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centrer verticalement */
  align-items: center; /* Centrer horizontalement */
  padding: 0 2rem;
  background-image: url('@/assets/BK-logo.png'); /* Image de fond comme dans le code d'inspiration */
  background-size: 550px; /* Ajuster la taille de l'image */
  background-position: bottom right; /* Positionner l'image en bas à droite */
  background-repeat: no-repeat; /* Empêcher la répétition de l'image */
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif; /* Utilisation de la police Poppins */
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #000; /* Couleur noire pour le titre */
}

.hero-text {
  max-width: 1000px; /* Élargir la zone de texte */
  margin: 0 auto;
  text-align: left;
  color: #000; /* Texte en noir pour rester cohérent avec le reste */
}

.hero p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #000;
}

/* Texte d'intégrations disponibles */
.integrations-available {
  text-align: center;
  margin-bottom: 2rem;
}

.integrations-text {
  color: #007bff; /* Couleur bleue spécifique */
  font-size: 2.5rem; /* Taille de la police identique à celle du titre "Intégration" */
  font-weight: bold;
}

/* Section de classifications */
.classifications {
  display: flex;
  justify-content: center; /* Centrer les boutons au centre de la page */
  gap: 2rem; /* Espacement entre les boutons */
  margin-bottom: 2rem;
}

.classification-item {
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #333;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
}

.classification-item:hover {
  color: #007bff; /* Changer la couleur du texte au survol */
}

/* Grille des cadres gris */
.integrations-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Grille de 5 colonnes */
  gap: 1rem; /* Espace entre les éléments de la grille */
  width: 100%;
  justify-items: center; /* Centrer les éléments horizontalement */
  align-items: center; /* Centrer les éléments verticalement */
}

.integration-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px; /* Largeur fixe pour chaque élément contenant l'image */
  height: 150px; /* Hauteur fixe pour chaque élément contenant l'image */
  overflow: hidden; /* Masquer tout débordement d'image */
}

.integration-image {
  width: 100%; /* Largeur à 100% pour remplir le conteneur */
  height: auto; /* Hauteur automatique pour garder le ratio */
  max-height: 100%; /* Limitez la hauteur maximale à celle du conteneur */
  object-fit: contain; /* Maintient les proportions tout en remplissant le conteneur */
  border-radius: 10px; /* Coins arrondis pour les images */
}
</style>
