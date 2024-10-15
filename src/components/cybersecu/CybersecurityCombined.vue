<template>
  <section class="cybersecurity">
    <h2 class="cybersecurity-title">ALEZIA : Votre partenaire en Cybersécurité</h2>

    <!-- Section 1 -->
    <section class="additional-content">
      <div class="content-wrapper">
        <div class="text-content">
          <h2 class="sub-section-title">Votre sécurité est notre priorité</h2>
          <p>
            Face à des menaces cybercriminelles de plus en plus sophistiquées, à la complexité croissante des systèmes d'information et aux exigences légales strictes en sécurité informatique, ALEZIA est là pour vous accompagner.
          </p>
          <p>
            En confiant votre cybersécurité à ALEZIA, vous pouvez vous concentrer sereinement sur votre activité principale tout en bénéficiant des avantages de l'externalisation et de l'infogérance.
          </p>
        </div>
        <div class="image-container">
          <img src="@/assets/cyber/cyber1.png" alt="Image pour Cybersécurité" />
        </div>
      </div>
    </section>

    <!-- Composant Wave -->
    <WaveComponent class="wave-fullwidth" />

    <!-- Section 2 -->
    <section class="additional-content reverse">
      <div class="content-wrapper">
        <div class="image-container">
          <img src="@/assets/cyber/cyber2.png" alt="Image cybersécurité" />
        </div>
        <div class="text-content">
          <h2 class="vulnerability-title">Identifiez les Vulnérabilités et Renforcez la Sécurité Informatique de Votre Entreprise</h2>
          <p>
            Êtes-vous sûr que votre système d'information protège efficacement vos données sensibles ? Vos collaborateurs suivent-ils les bonnes pratiques de sécurité, ou pourraient-ils être des points faibles ?
          </p>
          <p>
            Évaluez la vulnérabilité de votre TPE, PME ou ASBL en demandant un audit technique de sécurité informatique à notre équipe. Nous identifions les faiblesses de votre infrastructure, les erreurs de configuration et les logiciels malveillants éventuels.
          </p>
          <p>
            À la demande de votre DG ou RH, ALEZIA réalise également des tests de vulnérabilité pour détecter les failles potentielles dans vos réseaux, applications et équipements.
          </p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import WaveComponent from '@/components/utilities/Wave.vue'; // Assurez-vous que le chemin est correct

export default {
  name: 'CybersecurityCombined',
  components: {
    WaveComponent,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.cybersecurity {
  padding: 2rem;
  background-color: #f9f9f9;
  overflow: hidden;
  text-align: center; /* Aligner tout le contenu, y compris le titre */
}

.cybersecurity-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block; /* Assurer que la largeur du titre soit ajustée au texte */
  margin-left: auto; /* Centrer le titre */
  margin-right: auto; /* Centrer le titre */
}

.cybersecurity-title::after {
  content: '';
  display: block;
  width: 100%;
  height: 3px;
  background-color: #1e90ff;
  margin-top: 0.5rem;
}

.sub-section-title,
.vulnerability-title { 
  font-size: 2rem; 
  color: #333; 
  margin-bottom: 1.5rem; 
  text-align: center; 
}

.additional-content {
  padding: 4rem 1rem;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.text-content {
  width: 60%;
  text-align: left;
}

.image-container {
  width: 40%;
  display: flex;
  justify-content: flex-end;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.reverse {
  flex-direction: row-reverse;
}

.text-content p {
  font-size: 18px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
}

.wave-fullwidth {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
</style>
