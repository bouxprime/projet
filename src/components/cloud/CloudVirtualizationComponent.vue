<template>
  <div>
    <section class="virtualization">
      <h2 class="virtualization-title">{{ mainTitle }}</h2>

      <!-- Section 1: Virtualisation de vos machines -->
      <section class="additional-content">
        <div class="content-wrapper">
          <div class="image-container tilted-image">
            <img src="@/assets/34b9b5e9-b0e5-4264-aaf6-49bae7ba081c.jpg" alt="Virtualisation de vos machines" class="first-image" />
          </div>
          <div class="text-content">
            <h2 class="section-title">Virtualisation de vos machines</h2>
            <p>La virtualisation de votre serveur permet d’ajuster facilement les ressources et de sauvegarder ou restaurer rapidement l’ensemble de votre système. Hébergée dans un DataCenter sécurisé, votre machine virtuelle bénéficie d’une haute disponibilité grâce à du matériel redondant, à une connectivité internet fiable, et à des sauvegardes quotidiennes. Même en cas de panne internet au bureau, vous pouvez accéder à vos données depuis chez vous ou à l'étranger, avec une sécurité renforcée grâce à l'authentification à deux facteurs.</p>
          </div>
        </div>
      </section>

      <!-- Section 2: Les avantages -->
      <section class="additional-content reverse">
        <div class="content-wrapper">
          <div class="text-content">
            <h2 class="section-title">Les avantages</h2>
            <p>Votre serveur virtualisé offre la flexibilité d'ajuster les ressources et de restaurer rapidement le système. Il est accessible depuis divers appareils, garantissant une flexibilité maximale, que vous utilisiez un PC, un Mac, une tablette ou un smartphone.</p>
          </div>
          <div class="image-container tilted-image">
            <img src="@/assets/cloud/cloud2.jpg" alt="Avantages de la virtualisation" />
          </div>
        </div>
      </section>

      <!-- Section 3: Accessibilité & Sauvegarde -->
      <section class="additional-content">
        <div class="content-wrapper">
          <div class="image-container tilted-image">
            <img src="@/assets/cloud/cloud3.png" alt="Accessibilité & Sauvegarde" />
          </div>
          <div class="text-content">
            <h2 class="section-title">Accessibilité & Sauvegarde</h2>
            <p>Un serveur cloud permet à tous vos collaborateurs d’accéder aux programmes, peu importe leur emplacement. Nous répliquons vos données dans un autre DataCenter belge et proposons des sauvegardes sur 14 jours, extensibles jusqu'à 13 mois. Un espace de stockage supplémentaire est disponible selon vos besoins, et l'interface Veeam Enterprise Manager vous permet de gérer et restaurer vos fichiers en toute autonomie.</p>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CloudVirtualizationComponent',
  props: {
    mainTitle: {
      type: String,
      default: 'Avec le Cloud, découvrez un monde de possibilités',
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

.virtualization {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f7f7f7;
}

.virtualization-title {
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #007BFF;
}

.additional-content {
  padding: 3rem 1rem;
  position: relative;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
}

.additional-content.reverse {
  flex-direction: row-reverse;
}

.additional-content:hover {
  transform: translateY(-10px);
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;
}

.text-content {
  width: 55%;
  text-align: left;
}

.text-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #007BFF;
}

.text-content p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #555;
}

.image-container {
  width: 45%;
  display: flex;
  justify-content: center;
  overflow: visible;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.tilted-image {
  transform: perspective(800px) rotateY(5deg);
}

.reverse .tilted-image {
  transform: perspective(800px) rotateY(-5deg);
}
</style>