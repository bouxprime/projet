<template>
  <div class="contact-container">
    <div class="contact-left">
      <img src="@/assets/contact-alezia.png" alt="Alezia - Solutions Innovantes" class="contact-image" />
      <h1>Solutions Innovantes pour Votre Entreprise</h1>
      <ul>
        <li>Nous offrons des solutions informatiques adaptées à vos besoins.</li>
        <li>Expertise en téléphonie VoIP avec les technologies les plus avancées.</li>
        <li>Services personnalisés pour optimiser votre infrastructure IT.</li>
        <li>Support et maintenance pour assurer la continuité de vos opérations.</li>
      </ul>
    </div>
    <div class="contact-right">
      <div class="form-wrapper">
        <form @submit.prevent="submitForm">
          <div class="contact-form-group">
            <label for="name">Nom</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>
          <div class="contact-form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
          <div class="contact-form-group">
            <label for="description">Description</label>
            <textarea id="description" v-model="form.description" required></textarea>
          </div>
          <div class="contact-form-group">
            <label for="source">Comment avez-vous entendu parler de nous ?</label>
            <input type="text" id="source" v-model="form.source" />
          </div>
          <button type="submit" class="submit-button">SOUMETTRE</button>
        </form>
        <div v-if="status.message" :class="['status-message', status.success ? 'success' : 'error']">
          {{ status.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        description: '',
        source: ''
      },
      status: {
        message: '',
        success: false
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        console.log("[DEBUG] Début de la soumission du formulaire...");
        const formData = new URLSearchParams();
        formData.append('name', this.form.name);
        formData.append('email', this.form.email);
        formData.append('description', this.form.description);
        formData.append('source', this.form.source);

        console.log("[DEBUG] Données du formulaire prêtes à être envoyées :", formData.toString());
        const response = await axios.post('https://alezia.be/send-email.php', formData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });

        console.log("[DEBUG] Réponse reçue :", response);
        if (response.status === 200) {
          console.log("[DEBUG] Email envoyé avec succès.");
          this.status = {
            message: 'Votre message a bien été envoyé.',
            success: true
          };
        }
      } catch (error) {
        console.error("[ERROR] Erreur lors de la soumission du formulaire :", error);
        this.status = {
          message: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.",
          success: false
        };
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  background-color: #F7FAFF;
  padding: 40px;
  min-height: calc(100vh - 200px);
}

.contact-left {
  width: 45%;
  margin-right: 5%;
}

.contact-right {
  width: 45%;
}

.contact-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 40px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

li::before {
  content: '✔️';
  margin-right: 10px;
  color: #3498db;
}

.form-wrapper {
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.contact-form-group {
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
select,
textarea {
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #FFFFFF;
}

textarea {
  height: 120px;
}

button.submit-button {
  padding: 10px 20px;
  border: 2px solid #1e90ff;
  border-radius: 50px;
  color: white;
  background-color: #1e90ff;
  transition: background-color 0.3s, color 0.3s;
  font-size: 1.2em;
  font-family: 'Poppins', sans-serif;
  align-self: flex-start;
  margin-top: 10px;
}

button.submit-button:hover {
  background-color: transparent;
  color: #1e90ff;
}

.status-message {
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
}

.success {
  background-color: #d4edda;
  color: #155724;
}

.error {
  background-color: #f8d7da;
  color: #721c24;
}

@media (max-width: 1024px) {
  .contact-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .contact-left,
  .contact-right {
    width: 100%;
    margin-right: 0;
  }

  .contact-left {
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 26px;
  }

  ul {
    font-size: 18px;
  }

  button.submit-button {
    font-size: 1.4em;
  }

  .form-wrapper {
    padding: 40px;
  }

  input[type="text"],
  input[type="email"],
  select,
  textarea {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 28px;
  }

  ul {
    font-size: 20px;
  }

  .form-wrapper {
    padding: 50px;
  }

  input[type="text"],
  input[type="email"],
  select,
  textarea {
    padding: 25px;
  }

  button.submit-button {
    font-size: 1.6em;
  }
}
</style>