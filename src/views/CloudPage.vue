<template>
  <div class="cloud-page">
    <!-- Section principale : Le Cloud -->
    <CloudHeroComponent />


      <CloudFeatureComponent />
    <!-- Section Virtualisation -->
    <CloudVirtualizationComponent/>

  </div>
</template>

<script>
import CloudHeroComponent from '@/components/cloud/CloudHeroComponent.vue';
import CloudFeatureComponent from '@/components/cloud/CloudFeatureComponent.vue';
import CloudVirtualizationComponent from '@/components/cloud/CloudVirtualizationComponent.vue';

export default {
  name: 'CloudPage',
  components: {
    CloudHeroComponent,
    CloudFeatureComponent,
    CloudVirtualizationComponent
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.cloud-page {
  font-family: 'Poppins', sans-serif; /* Changement de police ici */
  color: #333;
  line-height: 1.6;
  background-color: white;
  padding: 0;
  margin: 0;
}

/* Bannière */
.banner {
  padding: 2rem;
  text-align: center;
  background-color: white;
}

.banner h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

/* Virtualisation */
.virtualization {
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #f7f7f7;
}

/* Section Avantages */
.advantages {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3rem 0; /* Ajoute du padding en haut et en bas */
  background-color: white;
}

.advantages .feature {
  flex: 1 1 200px;
  margin: 1rem;
  background-color: #fff;
  padding: 2rem; /* Ajoute du padding interne aux cartes */
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centre le contenu verticalement */
  align-items: center; /* Centre le contenu horizontalement */
  text-align: center; /* Centre le texte */
}

/* Style pour les titres des cards (Les avantages et Accessibilité & Sauvegarde) */
.feature-title {
  color: #1e90ff; /* Titre en bleu */
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
</style>
