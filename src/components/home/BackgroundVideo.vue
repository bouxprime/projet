<template>
  <div class="video-container">
    <video autoplay muted loop class="video">
      <source src="@/assets/background-hero-alezia.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="overlay">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundVideo'
}
</script>

<style>
.video-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  top: 0;
  margin-top: 0;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .overlay {
    font-size: 0.9rem; /* Ajuste la taille de la police pour les petits écrans */
    padding: 0.5rem; /* Réduit le padding pour les petits écrans */
  }
}

@media (max-width: 480px) {
  .overlay {
    font-size: 0.8rem; /* Réduit encore la taille de la police pour les très petits écrans */
    padding: 0.3rem; /* Réduit encore le padding pour les très petits écrans */
  }
}
</style>
