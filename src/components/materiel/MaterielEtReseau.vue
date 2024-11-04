<template>
  <div class="materiel-reseau-container">
    <!-- Section principale contenant la description et la table des matières -->
    <section class="main-section">
      <!-- Partie de gauche avec le texte introductif -->
      <div class="left-content">
        <section class="hero ma-section">
          <h1>Matériel Informatique</h1>
          <p>
            Nous offrons une gamme complète de PC, ordinateurs portables et tablettes, adaptés à tous les usages professionnels. Nos équipements sont conçus pour être performants et fiables, permettant à vos collaborateurs de travailler efficacement, où qu’ils se trouvent.
          </p>
        </section>
      </div>
      <!-- Partie de droite avec la table des matières -->
      <div class="solution-voip-toc" style="align-self: center; margin-top: auto; margin-bottom: auto;">
        <h2>Table des matières</h2>
        <ul>
          <li><a href="#peripheriques-connexes" @click.prevent="smoothScroll('#peripheriques-connexes')">Périphériques Connexes</a></li>
          <li><a href="#connexion-internet-section" @click.prevent="smoothScroll('#connexion-internet-section')">Connexion Internet professionnelle</a></li>
          <li><a href="#solutions-it-section" @click.prevent="smoothScroll('#solutions-it-section')">Solutions IT</a></li>
        </ul>
      </div>
    </section>

    <SolutionsIT />
    
    <!-- Partie Connexion Internet professionnelle -->
    <section id="connexion-internet-section" class="connexion-internet-section with-padding">
      <div class="connexion-content-wrapper">
        <div class="connexion-image-container animate-from-top rotate-left">
          <img src="@/assets/materiel/connexion-internet.jpg" alt="Connexion Internet" class="overflow-image" />
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
    <section id="solutions-it-section" class="solutions-it-section reverse with-padding" style="background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);">
      <div class="solutions-content-wrapper">
        <div class="solutions-text-content">
          <h2 class="solutions-title" style="color: #007BFF;">Solutions IT</h2>
          <p>
            Pour répondre précisément à vos besoins en matériel et solutions IT, nous avons choisi de nous spécialiser dans les standards les plus reconnus du marché. Toujours attentifs aux évolutions technologiques et aux nouveaux modèles, nous enrichissons notre gamme de produits en permanence.
          </p>
          <p>
            Cette démarche nous permet de conserver une expertise solide et de vous offrir des solutions innovantes et parfaitement adaptées à vos exigences, grâce à notre connaissance approfondie des produits disponibles chez ALEZIA.
          </p>
        </div>
        <div class="solutions-image-container animate-scale-up">
          <img src="@/assets/materiel/solution-it.png" alt="Solutions IT" class="overflow-image reduced-size" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SolutionsIT from './SolutionsIT.vue';
export default {
  name: 'MaterielEtReseau',
  components: {
    SolutionsIT,
  },
  methods: {
    smoothScroll(target) {
      const element = document.querySelector(target);
      if (!element) {
        console.warn('Element not found:', target);
        return;
      }
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.8 });

    const animatedElements = document.querySelectorAll('.connexion-image-container, .solutions-image-container');
    animatedElements.forEach((el) => observer.observe(el));
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.materiel-reseau-container {
  background-color: #f7f7f7;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

/* Section principale contenant la description et la table des matières */
.main-section {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: stretch;
  padding: 2rem 2rem 0;
  background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);
}

.left-content {
  flex: 2;
  position: relative;
}

.solution-voip-toc {
  flex: 1;
  background-color: #f0f0f0;
  padding: 2rem;
  border-radius: 8px;
  position: sticky;
  top: calc(var(--navbar-height, 80px) + 20px);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: auto;
  height: auto;
  align-self: center;
}

.solution-voip-toc h2 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #1e90ff;
}

.solution-voip-toc ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.solution-voip-toc a {
  color: #1e90ff;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 1px solid #1e90ff;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.solution-voip-toc a:hover {
  background-color: #1e90ff;
  color: #ffffff;
}

.hero {
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  z-index: 2;
  color: #000;
}

.ma-section {
  padding-bottom: 40px;
  z-index: 2;
}

.ma-section p {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  text-align: justify;
  line-height: 1.8;
  z-index: 2;
  color: #000;
}

.connexion-internet-section {
  padding: 3rem 1rem;
  position: relative;
  background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);
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
  opacity: 0;
  transform: translateY(-100%);
  transition: opacity 1.5s ease, transform 1.5s ease;
}

.connexion-image-container.in-view {
  opacity: 1;
  transform: translateY(0);
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

.solutions-it-section {
  padding: 4rem 2rem;
  position: relative;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 4rem;
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
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 1.5s ease, transform 1.5s ease;
}

.solutions-image-container.in-view {
  opacity: 1;
  transform: scale(1);
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

@media (max-width: 768px) {
  .main-section {
    flex-direction: column;
    padding: 1rem;
  }

  .solution-voip-toc {
    position: static;
    width: 100%;
    padding: 1rem;
  }

  .solution-voip-toc ul {
    gap: 1.5rem;
  }

  .connexion-content-wrapper,
  .solutions-content-wrapper {
    flex-direction: column;
    text-align: center;
  }

  .connexion-text-content,
  .solutions-text-content {
    width: 100%;
    max-width: none;
  }

  .connexion-image-container,
  .solutions-image-container {
    width: 100%;
    max-width: none;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2rem;
  }

  .connexion-title,
  .solutions-title {
    font-size: 1.75rem;
  }

  .connexion-text-content p,
  .solutions-text-content p {
    font-size: 1rem;
  }
}
</style>
