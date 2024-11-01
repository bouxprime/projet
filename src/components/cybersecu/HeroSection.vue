<template>
  <div>
    <!-- Section principale contenant la description et la table des matières -->
    <section class="main-section">
      <!-- Partie de gauche avec le texte introductif -->
      <div class="left-content">
        <section class="hero ma-section">
          <h1>Cybersécurité</h1>
          <p>Attention, aucune offre disponible pour la ‘cybersécurité’.</p>
          <p>
            Chez ALEZIA, nous pensons que la sécurité ne devrait jamais être une option, mais plutôt une composante fondamentale de tous vos services.
          </p>
        </section>
      </div>
      <!-- Partie de droite avec la table des matières -->
      <div class="solution-voip-toc" style="align-self: center; margin-top: auto; margin-bottom: auto;">
        <h2>Table des matières</h2>
        <ul>
          <li><a href="#introduction" @click.prevent="smoothScroll('#introduction')">Introduction à la cybersécurité</a></li>
          <li><a href="#importance" @click.prevent="smoothScroll('#importance')">L'importance de la cybersécurité</a></li>
          <li><a href="#solutions" @click.prevent="smoothScroll('#solutions')">Nos solutions de cybersécurité</a></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CyberSecurityComponent',
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
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

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
</style>
