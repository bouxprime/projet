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
      <div class="text-content centered-text">
        <p>Chez ALEZIA, nous croyons que les nouvelles technologies doivent avant tout être au service des utilisateurs, des patients, des collaborateurs et des consommateurs. Engagée en faveur de l'intégrité, de l'inclusion et de la diversité, ALEZIA adopte une politique de responsabilité sociale des entreprises (RSE) fondée sur des valeurs humaines solides visant le bien-être de nos collaborateurs et le développement durable de nos activités et projets.</p>
      </div>
      <div class="image-container">
        <img src="@/assets/about-alezia.jpg" alt="Engagement d'ALEZIA" />
      </div>
    </div>
  </section>

  <!-- Nouvelle section des cartes de fonctionnalités -->
  <section class="features-section">
    <h2 class="aleziah2">Nos Fonctionnalités Clés :</h2>
    <div class="features-container">
      <!-- Fonctionnalité 1 -->
      <div class="feature-item item1">
        <img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" alt="Innovation" class="feature-icon">
        <h3>Innovation</h3>
        <p>ALEZIA se positionne comme un acteur clé dans l'innovation, apportant des solutions adaptées à chaque secteur.</p>
      </div>

      <!-- Fonctionnalité 2 -->
      <div class="feature-item item2">
        <img src="https://cdn-icons-png.flaticon.com/512/3176/3176369.png" alt="Expertise" class="feature-icon">
        <h3>Expertise</h3>
        <p>Nos équipes passionnées sont prêtes à rendre accessibles des technologies avant-gardistes.</p>
      </div>

      <!-- Fonctionnalité 3 -->
      <div class="feature-item item3">
        <img src="https://cdn-icons-png.flaticon.com/512/2840/2840614.png" alt="Accompagnement" class="feature-icon">
        <h3>Accompagnement</h3>
        <p>Nous vous accompagnons tout au long de votre transformation digitale.</p>
      </div>

      <!-- Fonctionnalité 4 -->
      <div class="feature-item item4">
        <img src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" alt="Engagement" class="feature-icon">
        <h3>Engagement</h3>
        <p>Notre engagement pour l'innovation durable est au cœur de toutes nos initiatives.</p>
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
};
</script>

<style scoped>
/* Style pour la première section pleine hauteur */
.vision-future.full-height {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f4f4f4, #ffffff);
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.05);
}

.vision-future h1 {
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  color: #007bff;
  transition: color 0.3s ease;
}

.vision-future h1:hover {
  color: #0056b3;
}

.description {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  font-size: 1.1rem;
  color: #333;
}

.about-content {
  text-align: center;
  padding: 4rem 1rem;
  font-family: 'Poppins', sans-serif;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;
}

.aleziah2 {
  font-size: 2.8rem; /* Augmenter la taille de la police */
  color: #1e90ff;
  margin-bottom: 1rem; /* Réduire l'espacement sous le titre */
  text-transform: uppercase;
}

.content-wrapper {
  display: flex;
  flex-wrap: nowrap; /* Assurer que le texte et l'image restent sur la même ligne */
  justify-content: center;
  align-items: center;
  gap: 1rem; /* Réduire l'espacement entre le texte et l'image */
  margin-top: 1.5rem; /* Réduire l'espacement au-dessus du conteneur */
}

.text-content {
  flex: 1;
  min-width: 45%; /* Réduire la largeur minimale pour rapprocher davantage les éléments */
  text-align: center; /* Centrer le texte */
  line-height: 1.6;
  transition: transform 0.3s ease;
  font-size: 1.4rem; /* Augmenter la taille de la police */
  margin-right: 2rem; /* Ajouter plus d'espace à droite */
}

.text-content:hover {
  transform: translateY(-5px);
}

.image-container {
  flex: 1;
  min-width: 45%; /* Assurer que l'image prend le même espace que le texte */
  display: flex;
  justify-content: center;
}

.image-container img {
  width: 80%;
  max-width: 350px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-container img:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
}

.features-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #cce7ff, #e0f8ff);
  text-align: center;
}

.features-section h2 { color: #1e90ff;
  padding-top: 2rem;
  padding-bottom: 2rem;
  font-weight: 600;
}

.features-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.feature-item {
  background-color: #fff;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  width: 100%;
  max-width: 400px;
}

.feature-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.feature-item h3 {
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #007BFF;
  font-weight: 600;
}

.feature-item p {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
}

.additional-content {
  text-align: center;
  padding: 4rem 1rem;
  font-family: 'Poppins', sans-serif;
  background-color: #f4f4f4;
  transition: background-color 0.3s ease;
}

.additional-content h2 {
  font-size: 2.2rem;
  color: #007bff;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.download-section {
  text-align: center;
  padding: 2rem 1rem;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;
}

.download-title {
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 1rem;
}

.download-button {
  padding: 12px 25px;
  font-size: 1.1rem;
  color: white;
  background: linear-gradient(135deg, #007bff, #0056b3);
  border: none;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.download-button:hover {
  background: linear-gradient(135deg, #0056b3, #004085);
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
}
</style>
