<template>
  <div>
    <section id="xhoppers-full" class="xhoppers-full">
      <h2>X-hoppers</h2>
      <p class="description">Optimisation de l'expérience client :</p>

      <div class="sections-container">
        <section class="xhoppers-content" style="background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);">
          <div class="content-wrapper">
            <div class="image-container animate-from-top rotate-left">
              <img src="@/assets/x-hoppers/x-hoppers-casques-connectes.png" alt="Casques connectés" class="overflow-image reduced-size-1" />
            </div>
            <div class="text-content">
              <h2>Casques connectés</h2>
              <p>Les employés peuvent utiliser des casques DECT connectés pour rester en contact tout au long de leur shift. Cela leur permet de répondre aux questions des clients ou d’obtenir de l’aide d’autres collègues sans quitter leur poste ou interrompre leurs tâches.</p>
            </div>
          </div>
        </section>

        <section class="xhoppers-content reverse" style="background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);">
          <div class="content-wrapper">
            <div class="text-content">
              <h2>Intégration avec les systèmes de caisse</h2>
              <p>X-hoppers s’intègre avec les systèmes de caisse enregistreuse (POS), permettant aux employés d’accéder rapidement à des informations sur les produits, de vérifier la disponibilité en stock, et de répondre efficacement aux demandes des clients sans quitter leur poste.</p>
            </div>
            <div class="image-container animate-scale-up">
              <img src="@/assets/x-hoppers/x-hoppers-integration-caisse.png" alt="Intégration avec les systèmes de caisse" class="overflow-image reduced-size-2" />
            </div>
          </div>
        </section>

        <section class="xhoppers-content" style="background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);">
          <div class="content-wrapper">
            <div class="image-container animate-from-top rotate-left">
              <img src="@/assets/x-hoppers/x-hoppers-annonce-automatique-des-promotions.webp" alt="Annonce automatique des promotions" class="overflow-image reduced-size-3" />
            </div>
            <div class="text-content">
              <h2>Annonce automatique des promotions</h2>
              <p>La solution permet de diffuser automatiquement des annonces promotionnelles ou des messages à travers les haut-parleurs du magasin, ce qui aide à informer les clients des offres spéciales et à augmenter les ventes.</p>
            </div>
          </div>
        </section>

        <section class="xhoppers-content reverse" style="background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);">
          <div class="content-wrapper">
            <div class="text-content">
              <h2>Analyse des performances</h2>
              <p>X-hoppers fournit des rapports sur la performance des employés et les interactions avec les clients. Cela permet aux managers d’analyser la productivité des équipes et d’identifier les points d’amélioration pour une meilleure gestion du personnel.</p>
            </div>
            <div class="image-container animate-scale-up">
              <img src="@/assets/x-hoppers/x-hoppers-analyse-des-performances.webp" alt="Analyse des performances" class="overflow-image reduced-size-5" />
            </div>
          </div>
        </section>

        <section class="xhoppers-content" style="background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);">
          <div class="content-wrapper">
            <div class="image-container animate-from-top rotate-left">
              <img src="@/assets/x-hoppers/x-hoppers-reduction-des-files-d-attente.png" alt="Réduction des files d’attente" class="overflow-image reduced-size-6" />
            </div>
            <div class="text-content">
              <h2>Réduction des files d’attente</h2>
              <p>Grâce à la communication instantanée, les employés peuvent être rapidement redirigés pour aider à réduire les files d’attente, accélérant le service en caisse ou aux comptoirs d’information, améliorant ainsi l’expérience client.</p>
            </div>
          </div>
        </section>

        <section class="xhoppers-content reverse" style="background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);">
          <div class="content-wrapper">
            <div class="text-content">
              <h2>Communication multi-canaux</h2>
              <p>En plus de la communication interne, X-hoppers permet d’intégrer la communication avec les clients via des canaux comme les appels et les messages, facilitant une approche omnicanal pour répondre aux demandes en magasin.</p>
            </div>
            <div class="image-container animate-scale-up">
              <img src="@/assets/x-hoppers/x-hoppers-communication-multi-canaux.webp" alt="Communication multi-canaux" class="overflow-image reduced-size-7" />
            </div>
          </div>
        </section>

        <section class="xhoppers-content" style="background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);">
          <div class="content-wrapper">
            <div class="image-container animate-from-top rotate-left">
              <img src="@/assets/x-hoppers/x-hoppers-gestion-taches.jpg" alt="Gestion des tâches en temps réel" class="overflow-image reduced-size-8" />
            </div>
            <div class="text-content">
              <h2>Gestion des tâches en temps réel</h2>
              <p>Les managers peuvent assigner des tâches aux employés en temps réel et suivre leur progression via la plateforme, améliorant l’efficacité des opérations quotidiennes en magasin.</p>
            </div>
          </div>
        </section>

        <section class="xhoppers-content reverse" style="background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);">
          <div class="content-wrapper">
            <div class="text-content">
              <h2>Caméra intelligente</h2>
              <p>Grâce à l’intégration des caméras intelligentes dans X-hoppers, vous pouvez suivre en temps réel les activités en magasin, analyser les comportements des clients et assurer une meilleure sécurité. Les équipes peuvent être alertées instantanément en cas d’anomalies, permettant une réaction rapide et efficace.</p>
            </div>
            <div class="image-container animate-scale-up">
              <img src="@/assets/x-hoppers/x-hoppers-camera-intelligente.png" alt="Caméra intelligente" class="overflow-image reduced-size-9" />
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'XHoppersFull',
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

body {
  font-family: 'Poppins', sans-serif;
}

.xhoppers-full {
  padding: 4rem 2rem;
  padding-top: 8rem;
}

.xhoppers-full h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #333;
}

.xhoppers-full .description {
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 1.75rem;
  color: #007BFF;
}

.xhoppers-content {
  padding: 4rem 2rem;
  position: relative;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 4rem;
  transition: transform 0.3s ease;
}

.xhoppers-content:hover {
  transform: translateY(-10px);
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;
}

.text-content {
  width: 55%;
  text-align: left;
}

.text-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #007BFF;
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

.image-container.in-view {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  transform: perspective(1000px) rotateY(-10deg);
  transition: transform 1s ease;
  background-color: white;
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

/* CSS for unique reductions per section */
.image-container img.reduced-size-1 {
  max-width: 60%;
}

.image-container img.reduced-size-2 {
  max-width: 65%;
}

.image-container img.reduced-size-3 {
  max-width: 70%;
}

.image-container img.reduced-size-5 {
  max-width: 50%;
}

.image-container img.reduced-size-6 {
  max-width: 45%;
}

.image-container img.reduced-size-7 {
  max-width: 50%;
}

.image-container img.reduced-size-8 {
  max-width: 55%;
}

.image-container img.reduced-size-9 {
  max-width: 45%;
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

  .text-content, .image-container {
    width: 100%;
  }

  .text-content {
    text-align: center;
  }
}
</style>
