<template>
  <div>
    <section id="x-bees" class="collaboration">
      <h2>X-bees Features</h2>
      <p class="description">Découvrez les fonctionnalités de X-bees propulsées par l'IA :</p>

      <!-- Section 1: Analyse des conversations avec l'IA -->
      <section id="section-analyse" class="additional-content" style="background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);">
        <div class="content-wrapper">
          <div class="image-container animate-from-top rotate-left">
            <img src="@/assets/xbees/x-bees-analyse-des-conversations-avec-IA.webp" alt="Analyse des conversations avec l'IA" class="overflow-image reduced-size" />
          </div>
          <div class="text-content">
            <h2>Analyse des conversations avec l'IA</h2>
            <p>X-bees utilise l'IA pour analyser en temps réel les conversations avec les clients, que ce soit par chat, email ou appel. L'intelligence artificielle peut fournir des recommandations automatiques aux agents sur les réponses à donner, en s'appuyant sur des modèles de conversation et des informations contextuelles, améliorant ainsi la rapidité et la pertinence des réponses.</p>
          </div>
        </div>
      </section>

      <!-- Section 2: Automatisation des tâches -->
      <section id="section-automatisation" class="additional-content reverse" style="background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);">
        <div class="content-wrapper">
          <div class="text-content">
            <h2>Automatisation des tâches</h2>
            <p>Grâce à l'intégration de l'IA, X-bees peut automatiser certaines tâches répétitives, telles que la gestion des tickets de support ou la classification des demandes clients. Cela permet aux équipes de se concentrer sur des tâches à plus forte valeur ajoutée et d'optimiser la gestion du temps.</p>
          </div>
          <div class="image-container animate-scale-up">
            <img src="@/assets/xbees/x-bees-automatisation-des-tâches.webp" alt="Automatisation des tâches" class="overflow-image reduced-size" />
          </div>
        </div>
      </section>

      <!-- Section 3: Analyse prédictive -->
      <section class="additional-content" style="background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);">
        <div class="content-wrapper">
          <div class="image-container animate-from-top rotate-left">
            <img src="@/assets/xbees/x-bees-analyse-prédictive.webp" alt="Analyse prédictive" class="overflow-image" />
          </div>
          <div class="text-content">
            <h2>Analyse prédictive</h2>
            <p>X-bees utilise l'IA pour analyser les données clients et interactions passées, afin de prédire les comportements futurs ou les besoins des clients. Cette fonctionnalité permet d’anticiper les demandes, de personnaliser les interactions et d’offrir une expérience client proactive.</p>
          </div>
        </div>
      </section>

      <!-- Section 4: Sentiment Analysis -->
      <section class="additional-content reverse" style="background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);">
        <div class="content-wrapper">
          <div class="text-content">
            <h2>Sentiment Analysis</h2>
            <p>L'IA de X-bees peut analyser le ton et l'émotion dans les conversations écrites ou vocales pour détecter l'humeur des clients (positif, neutre, négatif). Cette analyse des sentiments permet aux agents de mieux adapter leur approche en fonction de l'état émotionnel des clients, augmentant ainsi la satisfaction et la qualité du service.</p>
          </div>
          <div class="image-container animate-scale-up">
            <img src="@/assets/xbees/x-bees-sentiment-analysis.webp" alt="Sentiment Analysis" class="overflow-image reduced-size" />
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'XBeesComponent',
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

.collaboration {
  padding: 4rem 2rem;
  padding-top: 8rem;
}

.collaboration h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #333;
}

.collaboration .description {
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 1.75rem;
  color: #007BFF;
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

.image-container.animate-from-top.in-view,
.image-container.animate-scale-up.in-view {
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

.image-container img.reduced-size {
  max-width: 70%;
}

/* Section 1: Réduire la taille de l'image */
#section-analyse .image-container img.reduced-size {
  max-width: 50%; /* Réduction de la taille de l'image */
}

/* Section 2: Agrandir légèrement la taille de l'image */
#section-automatisation .image-container img.reduced-size {
  max-width: 80%; /* Agrandir légèrement la taille de l'image */
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
