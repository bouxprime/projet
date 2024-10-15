<template>
  <section class="connectivite-gestion-parc">
    <h2 class="section-title">Profitez d’une connectivité d’entreprise stable</h2>

    <!-- Section de connectivité -->
    <section class="additional-content">
      <div class="content-wrapper">
        <div class="image-container reverse-animation">
          <img src="@/assets/services/manage1.png" alt="Connectivité d'entreprise stable et sécurisée" class="overflow-image reduced-size" />
        </div>
        <div class="text-content">
          <h2 class="sub-section-title">Connectivité d'entreprise</h2>
          <p>
            Profiter d’une connectivité d’entreprise stable, ultra performante et sécurisée tout en maîtrisant ses coûts est un véritable défi pour une grande partie des sociétés, surtout lorsqu’on prend en compte l’augmentation exponentielle des services IT disponibles et des données échangées.
          </p>
          <p>
            Avec ALEZIA, expert en services managés à la carte, trouver cet équilibre parfait ne relève plus de l’impossible.
          </p>
          <p>
            Infogérance totale ou partielle, nous avons la solution qui correspond à vos besoins et vos systèmes d’information. Que vous décidiez d’opter pour des services spécifiques, ou bien pour une offre complète d’infogérance, de la conception à la maintenance, ALEZIA met en place le service le plus adapté à votre cahier des charges sur la base d’un audit pointu et d’une compréhension profonde de vos défis actuels.
          </p>
        </div>
      </div>
      
    </section>

    <!-- Nouvelle section 1 : Services managés -->
    <section class="additional-content reverse">
      <div class="content-wrapper">
        <div class="text-content">
          <h2 class="sub-section-title">Services managés : une solution proactive</h2>
          <p>
            Avec l’émergence des offres Cloud, les services managés ont introduit une approche plus flexible que l'infogérance. Ce modèle proactif utilise des outils de monitoring pour identifier et résoudre les anomalies avant qu'elles ne se transforment en incidents.
          </p>
          <p>
            Contrairement à l'infogérance, les services managés adoptent une approche basée sur la location : le client paie une redevance mensuelle tout inclus pour bénéficier de ces services.
          </p>
        </div>
        <div class="image-container animated-image">
          <img src="@/assets/services/infogerence/manage2.png" alt="Services managés proactifs" class="overflow-image" />
        </div>
      </div>
      
    </section>

    <!-- Nouvelle section 2 : Infogérance -->
    <section class="additional-content reverse">
      <div class="content-wrapper">
        <div class="image-container reverse-animation">
          <img src="@/assets/services/infogerence/manage3.png" alt="Infogérance réactive pour entreprises" class="overflow-image" />
        </div>
        <div class="text-content">
          <h2 class="sub-section-title">Infogérance : une solution réactive</h2>
          <p>
            L'infogérance se concentre sur la résolution rapide des problèmes plutôt que sur leur anticipation. Vous bénéficiez de l'expertise et de la réactivité de nos équipes pour traiter les incidents de manière efficace.
          </p>
          <p>
            Ce service est encadré par un contrat de prestation qui précise la durée, la nature, les modalités et le coût total. Pour chaque demande en dehors du cadre initial de l’infogérance, un devis ou un avenant est requis.
          </p>
        </div>
      </div>
      
    </section>

  </section>
</template>

<script>
export default {
  name: 'CombinedSection'
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.connectivite-gestion-parc {
  padding: 4rem 2rem;
  background: #f9f9f9;
}

.section-title {
  font-size: 2.5rem;
  color: #1e90ff;
  margin-bottom: 1.5rem;
  text-align: center;
}

.sub-section-title {
  font-size: 2rem;
  color: #007BFF;
  margin-bottom: 1.5rem;
  text-align: center;
}

.additional-content {
  padding: 4rem 2rem;
  background: #ffffff;
  margin-bottom: 4rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.text-content {
  width: 55%;
  text-align: left;
  flex: 1;
}

.image-container {
  width: 45%;
  display: flex;
  justify-content: center;
  overflow: visible;
  flex: 1;
}

.image-container img {
  max-width: 100%;
  max-height: 400px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.image-container img:hover {
  transform: scale(1.05);
}

.reverse-animation {
  transform: perspective(800px) rotateY(5deg);
}

.animated-image {
  transform: perspective(800px) rotateY(-5deg);
}

.reverse {
  flex-direction: row-reverse;
}

.text-content p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #555;
}

.cta-button {
  text-align: center;
  margin-top: 1.5rem;
}

.cta-button button {
  background-color: #1e90ff;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button button:hover {
  background-color: #1c86ee;
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    gap: 1rem;
  }

  .text-content,
  .image-container {
    width: 100%;
  }

  .text-content {
    text-align: center;
  }
}
</style>
