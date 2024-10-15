<template>
  <section class="vision-future full-height">
    <h1>Le regard tourné vers l'avenir</h1>
    <div class="description">
      <p>En tant que partenaire IT et expert en télécommunication, ALEZIA se positionne au centre de l'innovation pour aider les entreprises à maximiser leur potentiel technologique et la valeur de leurs actifs.</p>
      <p>Quel que soit le secteur ou le public visé, l'innovation doit apporter des solutions concrètes pour simplifier ou améliorer le quotidien de chacun.</p>
      <p>Quel que soit le projet, les valeurs d’ALEZIA sont portées par des équipes passionnées capables de rendre accessibles des technologies encore avant-gardistes à des entreprises de toutes tailles.</p>
    </div>
  </section>

  <!-- Nouvelle section sur la philosophie d'ALEZIA -->
  <section class="about-content">
    <h2 class="aleziah2">Notre Engagement chez ALEZIA</h2>
    
    <!-- Conteneur avec deux colonnes -->
    <div class="content-wrapper">
      <div class="text-content">
        <p>Chez ALEZIA, nous croyons que les nouvelles technologies doivent avant tout être au service des utilisateurs, des patients, des collaborateurs et des consommateurs. Engagée en faveur de l'intégrité, de l'inclusion et de la diversité, ALEZIA adopte une politique de responsabilité sociale des entreprises (RSE) fondée sur des valeurs humaines solides visant le bien-être de nos collaborateurs et le développement durable de nos activités et projets.</p>
      </div>
      <div class="image-container">
        <img src="@/assets/about-alezia.jpg" alt="Engagement d'ALEZIA" />
      </div>
    </div>
  </section>

  <!-- Section des cartes interactives -->
  <section class="voip-features">
    <h2 class="features-title">Découvrez nos fonctionnalités</h2>
    <div class="content-wrapper">
      <div class="features-grid">
        <div
          class="feature-box"
          v-for="(feature, index) in features"
          :key="index"
          @click="selectFeature(index)"
          :class="{ active: selectedFeatureIndex === index }"
        >
          <h3>{{ feature.title }}</h3>
        </div>
      </div>

      <!-- Description à droite -->
      <div class="feature-description" v-if="selectedFeature">
        <h3>{{ selectedFeature.title }}</h3>
        <p>{{ selectedFeature.description }}</p>
      </div>
    </div>
  </section>

  <!-- Nouvelle section sur A6K -->
  <section class="additional-content">
    <h2 class="aleziah2">ALEZIA au cœur de l'innovation</h2>
    
    <!-- Conteneur avec deux colonnes -->
    <div class="content-wrapper">
      <div class="text-content">
        <p>ALEZIA a choisi d'installer ses bureaux au sein d'A6K, un écosystème dynamique en Belgique qui stimule l'innovation en ingénierie.</p>
        <p>L’objectif principal d’A6K est de favoriser une croissance collaborative dans les domaines de l'énergie, des communications et de la transformation vers l'Industrie 4.0.</p>
      </div>
      <div class="image-container">
        <img src="@/assets/A6K-alezia.jpg" alt="Bureaux ALEZIA au sein d'A6K" />
      </div>
    </div>
  </section>

<!-- Section de téléchargement -->
<section class="download-section">
  <h2 class="download-title">Comment se rendre à nos bureaux ?</h2>
  <div class="download-container">
    <a href="/bureaux-A6K.pdf" download class="download-button">Télécharger le plan</a>
  </div>
</section>

</template>

<script>
export default {
  name: 'VisionFuture',
  data() {
    return {
      selectedFeatureIndex: 0,
      features: [
        {
          title: 'Innovation',
          description: 'ALEZIA se positionne comme un acteur clé dans l\'innovation, apportant des solutions adaptées à chaque secteur.'
        },
        {
          title: 'Expertise',
          description: 'Nos équipes passionnées sont prêtes à rendre accessibles des technologies avant-gardistes.'
        },
        {
          title: 'Accompagnement',
          description: 'Nous vous accompagnons tout au long de votre transformation digitale.'
        },
        {
          title: 'Engagement',
          description: 'Notre engagement pour l\'innovation durable est au cœur de toutes nos initiatives.'
        }
      ]
    };
  },
  computed: {
    selectedFeature() {
      return this.features[this.selectedFeatureIndex];
    }
  },
  methods: {
    selectFeature(index) {
      this.selectedFeatureIndex = index;
    }
  }
};
</script>

<style scoped>
/* Style pour la première section pleine hauteur */
.vision-future.full-height {
  min-height: 100vh; /* Prend toute la hauteur de la fenêtre */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centre verticalement */
  align-items: center; /* Centre horizontalement */
  text-align: center;
  padding: 2rem;
  background-color: #f4f4f4; /* Couleur de fond */
}

.vision-future h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #007bff; /* Couleur du texte */
}

.description {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Nouvelle section sur la philosophie d'ALEZIA */
.about-content {
  text-align: center;
  padding: 4rem 1rem; /* Ajoute 4rem en haut et en bas, 1rem à gauche et à droite */
  font-family: 'Poppins', sans-serif;
  background-color: #f9f9f9;
}

.aleziah2 {
  font-size: 2rem;
  color: #1e90ff;
  margin-bottom: 1.5rem;
}

/* Conteneur pour la division 60/40 */
.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Centre verticalement le texte par rapport à l'image */
  gap: 1.5rem; /* Espace entre les colonnes */
  margin-top: 1.5rem;
}

.text-content {
  width: 60%;
  text-align: center; /* Centre le texte */
}

.image-container {
  width: 40%; /* Limite la largeur de la colonne contenant l'image */
  display: flex;
  justify-content: center; /* Centre l'image */
}

.image-container img {
  width: 60%; /* Réduisez la taille de l'image (réduction d'environ un tiers) */
  max-width: 300px; /* Limite la largeur maximale de l'image */
  height: auto; /* Maintient le ratio d'aspect de l'image */
  border-radius: 8px; /* Arrondi des coins de l'image */
}

/* Section pour les cartes et leur description */
.voip-features {
  padding: 2rem;
  background-color: white;
}

/* Titre en noir */
.features-title {
  font-size: 1.8rem;
  color: black; /* Titre en noir */
  margin-bottom: 1.5rem;
  text-align: center;
}

/* Wrapper pour organiser les cartes et la description */
.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Cartes disposées en deux colonnes */
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Deux colonnes */
  gap: 1rem;
  width: 40%; /* Cartes à gauche occupant 40% de la largeur */
}

.feature-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #f7f7f7;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
}

.feature-box h3 {
  color: #1e90ff;
  font-size: 1.2rem;
  margin: 0;
}

.feature-box.active {
  background-color: #e0f7fa;
}

.feature-box:hover {
  background-color: #e0f7fa;
}

/* Description à droite */
.feature-description {
  width: 55%; /* Texte occupant 55% de la largeur à droite */
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.feature-description h3 {
  color: #1e90ff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.feature-description p {
  line-height: 1.6;
  font-size: 1rem;
  text-align: left;
}

/* Nouvelle section sur A6K */
.additional-content {
  text-align: center;
  padding: 4rem 1rem; /* Ajoute 4rem en haut et en bas, 1rem à gauche et à droite */
  font-family: 'Poppins', sans-serif;
  background-color: #f9f9f9;
}

.additional-content h2 {
  font-size: 2rem;
  color: #1e90ff;
  margin-bottom: 1.5rem;
}

.additional-content .text-content {
  text-align: center; /* Centre le texte */
}

.additional-content .image-container img {
  width: 70%; /* Taille de l'image de la section A6K */
  max-width: 600px; /* Limite la largeur maximale de l'image */
  height: auto; /* Maintient le ratio d'aspect de l'image */
}
.download-section {
  text-align: center;
  padding: 2rem 1rem; /* Ajustez le padding selon vos préférences */
  background-color: #f9f9f9; /* Couleur de fond pour la section */
}

.download-title {
  font-size: 2rem;
  color: #1e90ff; /* Couleur du texte */
  margin-bottom: 1rem;
}

.download-container {
  margin-top: 1rem; /* Ajoute un espace au-dessus du bouton */
}

.download-button {
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #007bff; /* Couleur du bouton */
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.download-button:hover {
  background-color: #0056b3; /* Couleur du bouton au survol */
}

</style>
