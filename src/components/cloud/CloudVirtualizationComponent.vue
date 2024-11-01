<template>
  <div>
    <section id="cloud-virtualization" class="virtualization">
      <h2>{{ mainTitle }}</h2>
      <p class="description">Découvrez les possibilités de la virtualisation :</p>

      <!-- Section 1: Virtualisation de vos machines -->
      <section class="additional-content" style="background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);">
        <div class="content-wrapper">
          <div class="image-container animate-from-top rotate-left">
            <img src="@/assets/34b9b5e9-b0e5-4264-aaf6-49bae7ba081c.jpg" alt="Virtualisation de vos machines" class="overflow-image reduced-size" />
          </div>
          <div class="text-content">
            <h2>Virtualisation de vos machines</h2>
            <p>La virtualisation de votre serveur permet d’ajuster facilement les ressources et de sauvegarder ou restaurer rapidement l’ensemble de votre système. Hébergée dans un DataCenter sécurisé, votre machine virtuelle bénéficie d’une haute disponibilité grâce à du matériel redondant, à une connectivité internet fiable, et à des sauvegardes quotidiennes. Même en cas de panne internet au bureau, vous pouvez accéder à vos données depuis chez vous ou à l'étranger, avec une sécurité renforcée grâce à l'authentification à deux facteurs.</p>
          </div>
        </div>
      </section>

      <!-- Section 2: Les avantages -->
      <section class="additional-content reverse" style="background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);">
        <div class="content-wrapper">
          <div class="text-content">
            <h2>Les avantages</h2>
            <p>Votre serveur virtualisé offre la flexibilité d'ajuster les ressources et de restaurer rapidement le système. Il est accessible depuis divers appareils, garantissant une flexibilité maximale, que vous utilisiez un PC, un Mac, une tablette ou un smartphone.</p>
          </div>
          <div class="image-container animate-scale-up">
            <img src="@/assets/cloud/cloud2.jpg" alt="Avantages de la virtualisation" class="overflow-image reduced-size" />
          </div>
        </div>
      </section>

      <!-- Section 3: Accessibilité & Sauvegarde -->
      <section class="additional-content" style="background: linear-gradient(180deg, #cde8ff 0%, #a5d3ff 100%);">
        <div class="content-wrapper">
          <div class="image-container animate-from-top rotate-left">
            <img src="@/assets/cloud/cloud3.png" alt="Accessibilité & Sauvegarde" class="overflow-image" />
          </div>
          <div class="text-content">
            <h2>Accessibilité & Sauvegarde</h2>
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
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.8 });

    const animatedElements = document.querySelectorAll('.image-container');
    animatedElements.forEach((el) => observer.observe(el));
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

.virtualization {
  padding: 4rem 2rem;
  padding-top: 8rem;
}

.virtualization h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #333;
}

.virtualization .description {
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 1.75rem;
  color: #007BFF;
}

.additional-content {
  padding: 4rem 2rem;
  position: relative;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 4rem;
  transition: transform 0.3s ease;
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

.image-container.animate-from-top {
  opacity: 0;
  transform: translateY(-100%);
  transition: opacity 1.5s ease, transform 1.5s ease;
}

.image-container.animate-scale-up {
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 1.5s ease, transform 1.5s ease;
}

.image-container.animate-from-top.in-view,
.image-container.animate-scale-up.in-view {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  transform: perspective(1000px) rotateY(-10deg);
  transition: transform 1s ease;
}

.image-container.rotate-left img {
  transform: perspective(1000px) rotateY(10deg);
}

.image-container.in-view img {
  transform: perspective(1000px) rotateY(-10deg);
}

.image-container.rotate-left.in-view img {
  transform: perspective(1000px) rotateY(10deg);
}

.image-container img.reduced-size {
  max-width: 70%;
}

.overflow-image {
  position: relative;
  width: 100%;
  left: 0;
}

.reverse {
  flex-direction: row-reverse;
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    gap: 1rem;
  }

  .text-content, .image-container {
    width: 100%;
  }

  .text-content {
    text-align: center;
  }
}
</style>
