<template>
  <section id="ia-wildix" class="ia-wildix">
    <h2>Intelligence Artificielle</h2>
    <p class="description">
      Alezia propose une gamme complète de matériel de téléphonie d'entreprise, permettant d'installer une téléphonie fixe sur IP (via Internet). Ce système, qui ne nécessite qu'une connexion Internet professionnelle, élimine le besoin de serveurs téléphoniques traditionnels (PBX). Alezia s'appuie sur des technologies fiables et performantes offertes par Wildix pour garantir une solution de qualité.
    </p>
    <div class="ia-links">
      <div class="link-box">
        <router-link to="/x-bees">
          <img src="@/assets/x-bees-logo-1.png" alt="X-Bees" />
          <p>X-Bees</p>
        </router-link>
      </div>
      <div class="link-box">
        <router-link to="/x-hopper">
          <img src="@/assets/x-hoppers-logo.png" alt="X-Hoppers" />
          <p>X-Hoppers</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SolutionIA',
};
</script>

<style scoped>
/* Import de la police Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

/* Styles généraux pour la police Poppins */
body {
  font-family: 'Poppins', sans-serif;
}

.ia-wildix {
  text-align: center;
  padding: 6rem 2rem;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 2rem auto;
  position: relative;
  overflow: hidden;
}

.ia-wildix h2 {
  font-size: 2rem;
  font-size: 32px;
  margin-bottom: 1.5rem;
  color: #333;
}

.description {
  margin: 0 auto;
  max-width: 600px;
  text-align: center;
  line-height: 1.8;
  font-size: 18px;
  color: #555;
}

.ia-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.link-box {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 15px;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.link-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  background-color: #007BFF;
  color: #fff;
}

.link-box img {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.link-box:hover img {
  transform: scale(1.05);
}

.link-box p {
  font-weight: bold;
  color: inherit;
  margin: 0;
  font-size: 1.1rem;
}

.link-box a {
  text-decoration: none;
  color: inherit;
}
</style>
