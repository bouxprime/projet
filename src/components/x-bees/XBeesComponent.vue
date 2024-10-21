<template>
  <section class="x-bees">
    <h2>X-bees Features</h2>
    <p class="description">Découvrez les fonctionnalités de X-bees propulsées par l'IA :</p>

    <!-- Section 1: Analyse des conversations avec l'IA -->
    <section class="additional-content">
      <div class="content-wrapper">
        <div class="image-container animated-image-1">
          <img ref="image1" src="@/assets/xbees/x-bees-analyse-des-conversations-avec-IA.webp" alt="Analyse des conversations avec l'IA" class="overflow-image reduced-size" />
        </div>
        <div class="text-content">
          <h2>Analyse des conversations avec l'IA</h2>
          <p>X-bees utilise l'IA pour analyser en temps réel les conversations avec les clients, que ce soit par chat, email ou appel. L'intelligence artificielle peut fournir des recommandations automatiques aux agents sur les réponses à donner, en s'appuyant sur des modèles de conversation et des informations contextuelles, améliorant ainsi la rapidité et la pertinence des réponses.</p>
        </div>
      </div>
    </section>

    <!-- Section 2: Automatisation des tâches -->
    <section class="additional-content reverse">
      <div class="content-wrapper">
        <div class="text-content">
          <h2>Automatisation des tâches</h2>
          <p>Grâce à l'intégration de l'IA, X-bees peut automatiser certaines tâches répétitives, telles que la gestion des tickets de support ou la classification des demandes clients. Cela permet aux équipes de se concentrer sur des tâches à plus forte valeur ajoutée et d'optimiser la gestion du temps.</p>
        </div>
        <div class="image-container animated-image-2">
          <img ref="image2" src="@/assets/xbees/x-bees-automatisation-des-tâches.webp" alt="Automatisation des tâches" class="overflow-image" />
        </div>
      </div>
    </section>

    <!-- Section 3: Analyse prédictive -->
    <section class="additional-content">
      <div class="content-wrapper">
        <div class="image-container animated-image-3">
          <img ref="image3" src="@/assets/xbees/x-bees-analyse-prédictive.webp" alt="Analyse prédictive" class="overflow-image" />
        </div>
        <div class="text-content">
          <h2>Analyse prédictive</h2>
          <p>X-bees utilise l'IA pour analyser les données clients et interactions passées, afin de prédire les comportements futurs ou les besoins des clients. Cette fonctionnalité permet d’anticiper les demandes, de personnaliser les interactions et d’offrir une expérience client proactive.</p>
        </div>
      </div>
    </section>

    <!-- Section 4: Sentiment Analysis -->
    <section class="additional-content reverse">
      <div class="content-wrapper">
        <div class="text-content">
          <h2>Sentiment Analysis</h2>
          <p>L'IA de X-bees peut analyser le ton et l'émotion dans les conversations écrites ou vocales pour détecter l'humeur des clients (positif, neutre, négatif). Cette analyse des sentiments permet aux agents de mieux adapter leur approche en fonction de l'état émotionnel des clients, augmentant ainsi la satisfaction et la qualité du service.</p>
        </div>
        <div class="image-container animated-image-4">
          <img ref="image4" src="@/assets/xbees/x-bees-sentiment-analysis.webp" alt="Sentiment Analysis" class="overflow-image" />
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { nextTick } from 'vue';

export default {
  name: 'XBeesComponent',
  mounted() {
    nextTick(() => {
      const images = [
        this.$refs.image1,
        this.$refs.image2,
        this.$refs.image3,
        this.$refs.image4
      ];

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // Pour éviter de ré-observer une fois l'animation déclenchée
          }
        });
      }, observerOptions);

      images.forEach(image => {
        if (image) {
          observer.observe(image);
        }
      });
    });
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.x-bees {
  padding: 4rem 2rem;
  padding-top: 8rem;
  background-color: #f0f4f8;
}

.x-bees h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #333;
}

.x-bees .description {
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 1.5rem;
  color: #007BFF;
}

.additional-content {
  padding: 4rem 2rem;
  position: relative;
  background-color: #ffffff;
  margin-bottom: 4rem;
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
  transition: transform 1s ease-in-out;
}

.image-container.animated-image-1.in-view {
  transform: translateY(-20px) rotate(5deg);
}

.image-container.animated-image-2.in-view {
  transform: scale(1.1);
}

.image-container.animated-image-3.in-view {
  transform: rotateY(20deg);
}

.image-container.animated-image-4.in-view {
  transform: translateX(20px);
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
