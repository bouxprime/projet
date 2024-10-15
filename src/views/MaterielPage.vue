<template>
  <div class="materiel-page">
    <!-- Inclure le composant combiné -->
    
    <MaterielEtReseau />

  </div>
</template>

<script>
import MaterielEtReseau from '@/components/materiel/MaterielEtReseau.vue';


export default {
  name: 'MaterielPage',
  components: {
    MaterielEtReseau,

  },
};
</script>

<style scoped>
.materiel-page {
  color: #333;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif; 
}
</style>
