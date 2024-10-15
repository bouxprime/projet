<template>
  <div class="materiel-reseau-container">
    <!-- Partie Matériel Informatique -->
    <section class="section-materiel">
      <h1>Matériel Informatique</h1>
      <p>
        Nous offrons une gamme complète de PC, ordinateurs portables et tablettes, adaptés à tous les usages professionnels. Nos équipements sont conçus pour être performants et fiables, permettant à vos collaborateurs de travailler efficacement, où qu’ils se trouvent.
      </p>
    </section>

    <Wave2Component  />
    <SolutionsIT />
    <Wave3Component  />
    <!-- Partie Connexion Internet professionnelle -->
    <section class="connexion-internet-section with-padding">
      <div class="connexion-content-wrapper">
        <div class="connexion-image-container tilted-image">
          <img src="@/assets/materiel/connexion-internet.jpg" alt="Connexion Internet" class="animated-image" />
        </div>
        <div class="connexion-text-content">
          <h2 class="connexion-title">Connexion Internet professionnelle</h2>
          <p>
            Choisissez une connexion Internet haute performance, parfaitement adaptée aux exigences de votre entreprise. Nous fournissons des solutions fiables et rapides, indispensables au bon déroulement de vos activités professionnelles.
          </p>
          <p>
            Nous proposons des solutions complètes pour vos infrastructures réseau, qu’il s’agisse de réseaux filaires ou sans fil (WiFi). De la phase de conseil à l’étude avancée sur site, notre expertise garantit une installation optimale et performante, adaptée aux besoins spécifiques de votre entreprise.
          </p>
          <p>
            Nous vous aidons à connecter tous vos périphériques au réseau de manière efficace et sécurisée. Nos solutions permettent d’isoler certaines zones ou de segmenter virtuellement votre réseau pour une meilleure gestion et une sécurité renforcée.
          </p>
          <p>
            En tant qu’experts, nous vous accompagnons pour que votre infrastructure réseau vous offre une expérience utilisateur fluide et répond à vos exigences.
          </p>
        </div>
      </div>
    </section>

    <!-- Partie Solutions IT -->
    <section class="solutions-it-section reverse with-padding">
      <div class="solutions-content-wrapper">
        <div class="solutions-text-content">
          <h2 class="solutions-title">Solutions IT</h2>
          <p>
            Pour répondre précisément à vos besoins en matériel et solutions IT, nous avons choisi de nous spécialiser dans les standards les plus reconnus du marché. Toujours attentifs aux évolutions technologiques et aux nouveaux modèles, nous enrichissons notre gamme de produits en permanence.
          </p>
          <p>
            Cette démarche nous permet de conserver une expertise solide et de vous offrir des solutions innovantes et parfaitement adaptées à vos exigences, grâce à notre connaissance approfondie des produits disponibles chez ALEZIA.
          </p>
        </div>
        <div class="solutions-image-container tilted-image">
          <img src="@/assets/materiel/solution-it.png" alt="Solutions IT" class="animated-image" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import SolutionsIT from './SolutionsIT.vue';
import Wave3Component from '@/components/utilities/wave3.vue';
import Wave2Component from '@/components/utilities/wave2.vue';
export default {
  name: 'MaterielEtReseau',
  components: {
    SolutionsIT,
    Wave3Component,
    Wave2Component,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.materiel-reseau-container {
  background-color: #f7f7f7;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

/* Partie Matériel Informatique */
.section-materiel {
  height: 100vh; /* Hauteur ajustée pour prendre toute la page */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ffffff; /* Fond blanc */
}

.section-materiel h1 {
  font-size: 2rem;
  margin-bottom: 0.3rem;
}

.section-materiel p {
  margin-bottom: 0;
}

/* Section Connexion Internet */
.connexion-internet-section {
  padding: 3rem 1rem;
  position: relative;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
}

.connexion-internet-section:hover {
  transform: translateY(-10px);
}

.connexion-title {
  font-size: 2rem;
  color: #007BFF;
  margin-bottom: 1.5rem;
  text-align: center;
}

.connexion-content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;
}

.connexion-text-content {
  width: 55%;
  text-align: left;
}

.connexion-image-container {
  width: 45%;
  display: flex;
  justify-content: center;
  overflow: visible;
}

.connexion-image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.connexion-text-content p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
}

/* Partie Solutions IT */
.solutions-it-section {
  padding: 3rem 1rem;
  position: relative;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
}

.solutions-it-section:hover {
  transform: translateY(-10px);
}

.solutions-title {
  font-size: 2rem;
  color: #007BFF;
  margin-bottom: 1.5rem;
  text-align: center;
}

.solutions-content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;
}

.solutions-text-content {
  width: 55%;
  text-align: left;
}

.solutions-image-container {
  width: 45%;
  display: flex;
  justify-content: center;
  overflow: visible;
}

.solutions-image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.solutions-text-content p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
}

.tilted-image {
  transform: perspective(800px) rotateY(5deg);
}

.reverse .tilted-image {
  transform: perspective(800px) rotateY(-5deg);
}

.animated-image {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.animated-image:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}

.with-padding {
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>