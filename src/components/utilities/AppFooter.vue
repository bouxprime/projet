<template>
  <footer>
    <div class="footer-container" ref="footer">
      <div class="left-section">
        <h3>Nous trouver :</h3>
        <div id="map"></div>
      </div>
      <div class="separator" ref="separator"></div>
      <div class="right-section">
        <div class="social">
          <h3>Nos réseaux</h3>
          <a href="https://fr.linkedin.com/company/alezia" target="_blank">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <i class="fab fa-facebook"></i> Facebook
          </a>
        </div>
        <div class="contact" ref="contactSection">
          <h3>Nous contacter</h3>
          <p><i class="fas fa-phone-alt"></i> 
            <a href="tel:+3271962182" class="phone-link">+32 71 96 21 82</a>
          </p>
          <p><i class="fas fa-envelope"></i> 
            <a href="/contact" class="email-link">info@alezia.be</a>
          </p>
        </div>
        <div class="terms">
          <h3>Conditions générales</h3>
          <a href="/conditions-generales" class="terms-link">Voir nos conditions générales</a>
        </div>
      </div>
    </div>
    <p>&copy; 2024 Alezia</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  mounted() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.$refs.separator.classList.add('animate-growVertical');
        }
      });
    });

    observer.observe(this.$refs.footer);
    // Load Google Maps
    if (typeof google !== 'undefined') {
      this.initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true; // Ajout de defer pour le chargement asynchrone
      document.head.appendChild(script);

      window.initMap = this.initMap;
    }
  },
  methods: {
    /* eslint-disable no-unused-vars */
    initMap() {
      /* eslint-disable no-undef */
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 48.8566, lng: 2.3522 }, // Paris coordinates as an example
        zoom: 12
      });
      /* eslint-enable no-undef */
    }
    /* eslint-enable no-unused-vars */
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

body {
  font-family: 'Poppins', sans-serif;
}

footer {
  width: 100%;
  background-color: #192544;
  color: white;
  text-align: center;
  padding: 1em;
  position: relative;
  font-family: 'Poppins', sans-serif;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1em;
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */
}

.left-section {
  flex: 1;
  max-width: 40%; /* Reduced max-width for left section */
  text-align: left;
  margin-right: 1em; /* Add space between map and text */
}

#map {
  width: 100%;
  height: 200px;
  background-color: grey; /* Placeholder for the map */
  margin-top: 1em; /* Add space between text and map */
}

.separator {
  width: 1px;
  background-color: white;
  height: 150px; /* Final height of the separator bar */
  align-self: center;
  height: 0; /* Start invisible */
}

.right-section {
  flex: 1;
  max-width: 40%; /* Set max-width for right section */
  display: flex;
  justify-content: space-around; /* Reduce space between right sections */
  text-align: left; /* Align text to the left */
  margin-left: 1em; /* Add space between separator and right part */
}

.social, .contact, .terms {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
}

.social {
  margin-right: 1em; /* Reduce space between "Nos réseaux" and "Nous contacter" */
}

.contact h3, .social h3, .terms h3 {
  margin-bottom: 0.5em; /* Add space below titles */
}

.contact p, .social a, .terms a {
  margin-bottom: 0.5em; /* Add space between items */
}

.social a {
  color: white;
  text-decoration: none;
  font-size: 1.2em; /* Increase font size */
}

.social a i {
  font-size: 1.5em; /* Increase icon size */
  margin-right: 0.5em; /* Add space between icon and text */
}

.social a:hover, .terms a:hover {
  text-decoration: underline;
}

.phone-link, .email-link, .terms-link {
  color: white;
  text-decoration: none;
}

.phone-link:hover, .email-link:hover {
  text-decoration: underline;
}

/* Animation for the separator */
@keyframes growVertical {
  from {
    height: 0;
  }
  to {
    height: 150px; /* Final height of your bar */
  }
}

.animate-growVertical {
  animation: growVertical 2s forwards; /* Reduce animation speed */
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
  }

  .left-section, .right-section {
    max-width: 100%;
    margin: 1em 0;
  }

  .separator {
    display: none; /* Hide the separator on small screens */
  }

  .social, .contact, .terms {
    align-items: center;
  }

  .social a, .contact p, .terms a {
    text-align: center;
  }
}
</style>
