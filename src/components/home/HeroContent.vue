<template>
  <div class="hero-content">
    <h2 class="hero-subtitle">Nous sommes Alezia</h2>
    <h1 class="hero-title">Experts en IT.<br>Solutions VoIP.<br>Votre croissance assurée.</h1>
    <router-link to="/contact" class="contact-button-hero">Contact</router-link>
  </div>
</template>

<script>
export default {
  name: 'HeroContent'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.hero-content {
  padding: 2em;
  text-align: left;
  max-width: 1100px;
  margin-left: 100px;
  margin-top: 100px;
}

.hero-subtitle {
  font-size: 24px;
  color: #94A3B8;
  margin-bottom: 0.5em;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
}

.hero-title {
  font-size: 60px;
  color: #FFFFFF;
  font-weight: bold;
  margin-bottom: 1em;
  line-height: 1.2;
  font-family: 'Poppins', sans-serif;
}

.contact-button-hero {
  padding: 0.5em 2em;
  border: 2px solid #1e90ff;
  border-radius: 50px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2em;
  font-family: 'Poppins', sans-serif;
  background: transparent;
  transition: background 0.3s, color 0.3s;
  display: inline-block;
}

.contact-button-hero:hover {
  background: #1e90ff;
  color: white;
}

@media (max-width: 768px) {
  .hero-content {
    padding: 1.5em;
    margin-left: 50px;
    margin-top: 50px;
  }
  
  .hero-subtitle {
    font-size: 20px;
  }
  
  .hero-title {
    font-size: 40px;
  }
  
  .contact-button-hero {
    font-size: 1em;
    padding: 0.5em 1.5em;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 1em;
    margin-left: 20px;
    margin-top: 30px;
  }
  
  .hero-subtitle {
    font-size: 18px;
  }
  
  .hero-title {
    font-size: 30px;
  }
  
  .contact-button-hero {
    font-size: 0.9em;
    padding: 0.5em 1em;
  }
}
</style>
