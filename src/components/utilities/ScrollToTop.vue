<template>
  <div>
    <button @click="scrollToTop" class="scroll-to-top">
      &#8679; <!-- Vous pouvez remplacer cela par une icône de flèche -->
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #1e90ff; /* Couleur de fond modifiée */
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease-in-out;
  z-index: 1000; /* Assurez-vous que ce z-index soit suffisamment élevé */
  overflow: visible; /* Assurez-vous que l'aura soit visible */
}

.scroll-to-top::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(30, 144, 255, 0.6);
  transform: translate(-50%, -50%) scale(1); /* Début de l'aura au niveau du bouton */
  z-index: -1;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1); /* Aura commence au niveau du bouton */
  }
  50% {
    transform: translate(-50%, -50%) scale(1.5); /* Aura s'agrandit */
  }
  100% {
    transform: translate(-50%, -50%) scale(1); /* Aura revient à la taille du bouton */
  }
}
</style>
