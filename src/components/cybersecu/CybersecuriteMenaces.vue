<template>
  <section class="anticipez-menaces">
    <h2>Anticipez les Menaces Informatiques et Automatisez la Mise à Jour de Vos Systèmes</h2>
    
    <div class="menaces-container">
      <!-- Menace Item 1 -->
      <div class="menace-item item1">
        <img src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png" alt="Surveillance Continue" class="menace-icon">
        <h3>Surveillance Continue</h3>
        <p>Suivi en temps réel de l’activité de votre parc et de votre SI.</p>
      </div>

      <!-- Menace Item 2 -->
      <div class="menace-item item2">
        <img src="https://cdn-icons-png.flaticon.com/512/2991/2991135.png" alt="Évaluation des Vulnérabilités" class="menace-icon">
        <h3>Évaluation des Vulnérabilités</h3>
        <p>Identification des correctifs nécessaires à l’aide d’outils spécialisés.</p>
      </div>

      <!-- Menace Item 3 -->
      <div class="menace-item item3">
        <img src="https://cdn-icons-png.flaticon.com/512/2990/2990526.png" alt="Planification des Correctifs" class="menace-icon">
        <h3>Planification des Correctifs</h3>
        <p>Mise à jour et remplacement de matériel en fonction de leur priorité.</p>
      </div>

      <!-- Menace Item 4 -->
      <div class="menace-item item4">
        <img src="https://cdn-icons-png.flaticon.com/512/4248/4248676.png" alt="Déploiement Automatisé" class="menace-icon">
        <h3>Déploiement Automatisé</h3>
        <p>Installation des correctifs pour réduire les interventions manuelles et limiter l’impact sur votre activité.</p>
      </div>

      <!-- Menace Item 5 -->
      <div class="menace-item item5">
        <img src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png" alt="Reporting" class="menace-icon">
        <h3>Reporting</h3>
        <p>Documentation des actions effectuées et des résultats obtenus.</p>
      </div>
    </div>
    
    <p class="solution">ALEZIA propose une solution de sécurité informatique adaptée à toutes les structures, protégeant contre divers types de menaces (attaques, virus, intrusions, spams, phishing, etc.).</p>
  </section>
</template>

<script>
export default {
  name: 'CybersecuriteMenaces',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.anticipez-menaces {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #cce7ff, #e0f8ff);
  text-align: center;
}

.anticipez-menaces h2 {
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #0056b3;
  padding-top: 2rem;
  padding-bottom: 2rem;
  font-weight: 600;
}

.menaces-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.menace-item {
  background-color: #fff;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  width: 100%;
  max-width: 400px;
}

.menace-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.menace-item h3 {
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #007BFF;
  font-weight: 600;
}

.menace-item p {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
}

.menace-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
}

.solution {
  text-align: center;
  padding-top: 3rem;
  font-style: italic;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Ajustement pour les petits écrans */
@media (max-width: 768px) {
  .anticipez-menaces {
    padding: 3rem 1rem;
  }

  .menaces-container {
    gap: 1.5rem;
  }
}
</style>