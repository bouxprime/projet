<template>
  <section class="what-we-do">
    <div class="container">
      <div class="content">
        <h2>Nos services</h2>
        <p>Chez <strong>Alezia</strong>, nous proposons des solutions informatiques et de téléphonie VoIP pour accompagner avec précision les entreprises dans leur croissance. Avec notre expertise, nous garantissons des services de haute qualité pour répondre à tous vos besoins technologiques.</p>
      </div>
      <div class="cards-wrapper">
        <!-- Section Title -->
        <div id="section-title" class="section-title">
          <h3>Téléphonie</h3> <!-- Default section title -->
        </div>

        <!-- Navigation Arrows -->
<div class="navigation">
  <button id="prev" class="arrow">‹</button> <!-- Use the '‹' symbol -->
  <button id="next" class="arrow">›</button> <!-- Use the '›' symbol -->
</div>



        <div class="cards">
          <!-- First Set: Téléphonie -->
          <div class="card">
            <router-link :to="{ name: 'SolutionPage' }">
              <div class="card-icon">📞</div>
              <h3>Solution</h3>
              <p>Découvrez nos solutions téléphoniques adaptées à vos besoins.</p>
            </router-link>
          </div>
          <div class="card">
            <router-link :to="{ name: 'IntegrationPage' }">
              <div class="card-icon">🔧</div>
              <h3>Intégration</h3>
              <p>Nous intégrons vos systèmes de téléphonie avec expertise.</p>
            </router-link>
          </div>
          <div class="card">
            <router-link :to="{ name: 'XBeesPage' }">
              <div class="card-icon">🐝</div>
              <h3>X-Bees</h3>
              <p>Communication unifiée avec X-Bees, la solution flexible.</p>
            </router-link>
          </div>
          <div class="card">
            <router-link :to="{ name: 'XHopperPage' }">
              <div class="card-icon">📡</div>
              <h3>X-Hopper</h3>
              <p>Optimisez votre réseau téléphonique avec X-Hopper.</p>
            </router-link>
          </div>
          <div class="card">
            <router-link :to="{ name: 'AleziaStudioPage' }">
              <div class="card-icon">🎥</div>
              <h3>Alezia Studio</h3>
              <p>Créez des expériences de communication innovantes avec Alezia .</p>
            </router-link>
          </div>

          <!-- Second Set: IT -->
          <div class="card hidden">
            <router-link :to="{ name: 'CloudPage' }">
              <div class="card-icon">☁️</div>
              <h3>Cloud</h3>
              <p>Migrez vers le cloud avec nos solutions sécurisées et flexibles.</p>
            </router-link>
          </div>
          <div class="card hidden">
            <router-link :to="{ name: 'ConseilsPage' }">
              <div class="card-icon">💼</div>
              <h3>Conseils</h3>
              <p>Recevez des conseils stratégiques pour votre infrastructure IT.</p>
            </router-link>
          </div>
          <div class="card hidden">
            <router-link :to="{ name: 'CybersecuritePage' }">
              <div class="card-icon">🔒</div>
              <h3>Cybersécurité</h3>
              <p>Protégez vos données avec nos solutions de cybersécurité.</p>
            </router-link>
          </div>
          <div class="card hidden">
            <router-link :to="{ name: 'ServicesManagePage' }">
              <div class="card-icon">⚙️</div>
              <h3>Services managés</h3>
              <p>Optimisez la gestion de votre infrastructure avec nos services managés.</p>
            </router-link>
          </div>
          <div class="card hidden">
            <router-link :to="{ name: 'MaterielPage' }">
              <div class="card-icon">💻</div>
              <h3>Matériels et solutions</h3>
              <p>Obtenez le meilleur équipement pour vos besoins informatiques.</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'WhatWeDo',
  mounted() {
    const cardsContainer = document.querySelector('.cards');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const sectionTitle = document.getElementById('section-title');

    let showingFirstSet = true;

    nextButton.addEventListener('click', () => {
      if (showingFirstSet) {
        cardsContainer.classList.add('showing-second-set');
        sectionTitle.innerHTML = '<h3>IT</h3>'; // Change title to IT
      } else {
        cardsContainer.classList.remove('showing-second-set');
        sectionTitle.innerHTML = '<h3>Téléphonie</h3>'; // Change title to Téléphonie
      }
      showingFirstSet = !showingFirstSet;
    });

    prevButton.addEventListener('click', () => {
      if (!showingFirstSet) {
        cardsContainer.classList.remove('showing-second-set');
        sectionTitle.innerHTML = '<h3>Téléphonie</h3>'; // Change title to Téléphonie
      } else {
        cardsContainer.classList.add('showing-second-set');
        sectionTitle.innerHTML = '<h3>IT</h3>'; // Change title to IT
      }
      showingFirstSet = !showingFirstSet;
    });
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Poppins:wght@400;700&display=swap'); /* Import Roboto and Poppins fonts */

.what-we-do {
  padding-bottom: 5em!important; /* Ajout du padding en bas */
  position: relative;
  padding: 0; /* Remove padding to eliminate extra space */
  text-align: left;
  background: #efeded;
  margin-top: 0;
  display: flex;
  justify-content: center;
  background-image: url('@/assets/test.png'); /* Chemin vers votre image */
  background-size: contain; /* Ensure the background image fits within the container */
  background-position: top center; /* Adjust position to bring the image up */
  background-repeat: no-repeat;
  overflow: hidden; /* Assure que l'image ne dépasse pas */
}

.container {
  max-width: 1200px;
  width: 100%;
  margin-top: -50px; /* Adjust margin to bring content up */
}

.content {
  position: relative;
  z-index: 1;
  text-align: left;
  max-width: 800px;
  margin: 50px auto 0 0; /* Adjusted margin to add space above and move left */
  padding: 20px; /* Ajout de padding pour le texte */
  font-family: 'Poppins', sans-serif; /* Apply Poppins font */
  padding-top: 150px; /* Add padding to push the text down */
}

.what-we-do h2 {
  font-size: 4em; /* Adjusted title size */
  font-weight: 700; /* Bolder font weight for better visibility */
  margin-bottom: 0.5em;
  color: #333; /* Darker color for better visibility */
  font-family: 'Poppins', sans-serif; /* Apply Poppins font */
}

.what-we-do p {
  font-size: 18px; /* Adjusted text size */
  font-weight: 400; /* Regular font weight for better visibility */
  margin-bottom: 2em; /* Increased margin-bottom for better spacing */
  color: #333; /* Darker color for better visibility */
  line-height: 1.6em; /* Adjusted line height for better readability */
  font-family: 'Poppins', sans-serif; /* Apply Poppins font */
  max-width: 100%; /* Ensure text doesn't exceed container width */
}

.cards-wrapper {
  position: relative;
}

.section-title {
  text-align: center;
  margin-bottom: 20px;
}

.section-title h3 {
  font-size: 2em;
  color: #333;
  font-family: 'Poppins', sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5em;
  justify-content: center;
  margin-top: 2em; /* Added margin-top for spacing between text and cards */
}

.card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: calc(33.33% - 1em); /* Adjusted width to fit three cards per row */
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  font-family: 'Roboto', sans-serif; /* Apply Roboto font */
}

.card a {
  display: block;
  padding: 2em;
  text-decoration: none;
  color: inherit;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-icon {
  font-size: 2.5em;
  margin-bottom: 0.5em;
}

.card h3 {
  font-size: 1.8em; /* Adjusted card title size */
  margin-bottom: 0.5em;
}

.card p {
  font-size: 1.2em; /* Adjusted card text size */
  color: #666;
}

.hidden {
  display: none; /* Hide the additional cards */
}

.arrow {
  background: #007bff; /* Blue background color */
  color: white; /* White arrow color */
  border: none; /* Remove border */
  padding: 10px; /* Adjust padding for arrow size */
  margin: 0 10px;
  cursor: pointer;
  font-size: 1.5em; /* Adjust size for better visibility */
  border-radius: 50%; /* Make the button round */
  width: 50px; /* Define a fixed width and height for a perfect circle */
  height: 50px;
  text-align: center; /* Center the text horizontally */
  display: inline-flex; /* Ensure the button behaves as an inline element */
  align-items: center; /* Center the text vertically */
  justify-content: center; /* Center the text horizontally */
  transition: background 0.3s, transform 0.3s; /* Add transitions for smooth changes */
}

.arrow:hover {
  background: #0056b3; /* Darker blue background on hover */
  transform: scale(1.1); /* Slightly enlarge the button on hover */
}

.navigation {
  display: flex;
  justify-content: center;
  margin-bottom: 20px; /* Adjust margin to ensure spacing above the cards */
}


/* Additional CSS for handling visibility */
.cards.showing-second-set .card.hidden {
  display: block;
}

.cards.showing-second-set .card:not(.hidden) {
  display: none;
}


@media (max-width: 1024px) {
  .cards {
    flex-direction: column;
    align-items: center;
  }

  .card {
    max-width: 80%;
    margin: 1em auto; /* Center cards with margin */
  }
}

@media (max-width: 768px) {
  .what-we-do p {
    font-size: 20px; /* Increase text size for smaller screens */
    max-width: 90%; /* Reduce width for better readability */
  }

  .cards {
    flex-direction: column;
    align-items: center;
  }

  .card {
    max-width: 90%;
    margin: 1em auto; /* Center cards with margin */
  }
}

@media (max-width: 480px) {
  .content {
    padding-top: 50px; /* Adjust padding for smaller screens */
  }

  .what-we-do h2 {
    font-size: 2.5em; /* Adjust title size for smaller screens */
  }

  .what-we-do p {
    font-size: 22px; /* Increase text size for smaller screens */
    max-width: 90%; /* Reduce width for better readability */
  }

  .cards {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
    margin: 1em auto; /* Center cards with margin */
  }
}
</style>
