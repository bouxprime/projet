<template>
  <section class="connectivite-gestion-parc">
    <h2 class="section-title" style="font-size: 2.75rem; margin-bottom: 2rem; color: #333; text-align: center;">Profitez d’une connectivité d’entreprise stable</h2>

    <!-- Section de connectivité -->
    <section class="additional-content" style="background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);">
      <div class="content-wrapper">
        <div class="image-container animate-from-top rotate-left">
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
    <section class="additional-content reverse" style="background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);">
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
        <div class="image-container animate-scale-up">
          <img src="@/assets/services/infogerence/manage2.png" alt="Services managés proactifs" class="overflow-image" />
        </div>
      </div>
    </section>

    <!-- Nouvelle section 2 : Infogérance -->
    <section class="additional-content" style="background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);">
      <div class="content-wrapper">
        <div class="image-container animate-from-top rotate-left">
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
  name: 'CombinedSection',
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.8 });

    const animatedElements = document.querySelectorAll('.image-container');
    animatedElements.forEach((el) => observer.observe(el));
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.connectivite-gestion-parc {
  padding: 4rem 2rem;
  background: #f9f9f9;
}

.section-title {
  font-size: 2.75rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
}

.sub-section-title {
  font-size: 2rem;
  color: #007BFF;
  margin-bottom: 1rem;
  text-align: center;
}

.additional-content {
  padding: 4rem 2rem;
  position: relative;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 4rem;
  transition: transform 0.3s ease;
}

.additional-content:hover {
  transform: translateY(-10px);
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

.text-content p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #555;
}

.image-container {
  width: 45%;
  display: flex;
  justify-content: center;
  overflow: visible;
  flex: 1;
}

.image-container.animate-from-top {
  opacity: 0;
  transform: translateY(-100%);
  transition: opacity 1.5s ease, transform 1.5s ease;
}

.image-container.animate-scale-up {
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 1.5s ease, transform 1.5s ease;
}

.image-container.animate-from-top.in-view,
.image-container.animate-scale-up.in-view {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.image-container img {
  max-width: 100%;
  max-height: 400px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  transform: perspective(1000px) rotateY(-10deg);
  transition: transform 1s ease;
}

.image-container.rotate-left img {
  transform: perspective(1000px) rotateY(10deg);
}

.image-container.in-view img {
  transform: perspective(1000px) rotateY(-10deg);
}

.image-container.rotate-left.in-view img {
  transform: perspective(1000px) rotateY(10deg);
}

.image-container img.reduced-size {
  max-width: 70%;
}

.overflow-image {
  position: relative;
  width: 100%;
  left: 0;
}

.reverse {
  flex-direction: row-reverse;
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
