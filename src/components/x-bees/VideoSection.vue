<template>
  <section id ="video-section" class="video-section">
    <h2>Découvrez X-Bees en Vidéo</h2>
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/6bXZX6C4FjM" frameborder="0" allowfullscreen></iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VideoSection',
};
</script>

<style scoped>
/* Import de la police Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

/* Appliquer la police Poppins à l'ensemble de la section */
.video-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f7f7f7, #e9ecef);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.video-section:hover {
  transform: translateY(-5px);
}

.video-section h2 {
  margin-bottom: 2rem;
  color: #007bff;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
}

.video-container {
  width: 768px;
  height: 432px;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.3s ease;
}

.video-container:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.video-container iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

/* Media queries pour la résponsivité */
@media (max-width: 768px) {
  .video-section {
    padding: 3rem 1.5rem;
  }

  .video-section h2 {
    font-size: 1.75rem;
  }

  .video-container {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
  }
}

@media (max-width: 480px) {
  .video-section {
    padding: 2rem 1rem;
  }

  .video-section h2 {
    font-size: 1.5rem;
  }
}
</style>
