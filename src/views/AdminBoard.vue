<template>
    <div class="admin-board-container">
      <h2>Tableau de bord administrateur</h2>
      <div class="selector">
        <button @click="currentSection = 'colleagues'">Colleagues</button>
        <button @click="currentSection = 'news'">News</button>
      </div>
      <div v-if="currentSection === 'colleagues'" class="crud-container">
        <h3>Gérer les collègues</h3>
        <form @submit.prevent="addItem">
          <input v-model="newItem.name" placeholder="Nom" required />
          <input v-model="newItem.role" placeholder="Rôle" required />
          <input v-model="newItem.image" placeholder="URL de l'image" required />
          <textarea v-model="newItem.description" placeholder="Description" required></textarea>
          <input v-model="newItem.currentProject" placeholder="Projet Actuel" required />
          <input v-model="newItem.skills" placeholder="Compétences" required />
          <input v-model="newItem.experience" placeholder="Expérience" required />
          <button type="submit">Ajouter</button>
        </form>
        <div class="cards-container">
          <div
            v-for="(item, index) in eventBus.items"
            :key="index"
            class="card-item"
          >
            <div class="card">
              <img :src="item.image" :alt="item.name" />
              <div class="card-info">
                <h3>{{ item.name }}</h3>
                <p>{{ item.role }}</p>
              </div>
              <button @click="editItem(index)">Modifier</button>
              <button @click="deleteItem(index)">Supprimer</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentSection === 'news'" class="crud-container">
        <h3>Gérer les news</h3>
        <form @submit.prevent="addNews">
          <input v-model="newNews.title" placeholder="Titre" required />
          <input v-model="newNews.image" placeholder="URL de l'image" required />
          <textarea v-model="newNews.description" placeholder="Description" required></textarea>
          <button type="submit">Ajouter</button>
        </form>
        <div class="cards-container">
          <div
            v-for="(newsItem, index) in eventBus.news"
            :key="index"
            class="card-item"
          >
            <div class="card">
              <img :src="newsItem.image" :alt="newsItem.title" />
              <div class="card-info">
                <h3>{{ newsItem.title }}</h3>
                <p>{{ newsItem.description }}</p>
              </div>
              <button @click="editNews(index)">Modifier</button>
              <button @click="deleteNews(index)">Supprimer</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="editingIndex !== null && currentSection === 'colleagues'" class="popup-overlay" @click="closeEdit">
        <div class="popup-content" @click.stop>
          <form @submit.prevent="updateItem">
            <input v-model="editItemData.name" placeholder="Nom" required />
            <input v-model="editItemData.role" placeholder="Rôle" required />
            <input v-model="editItemData.image" placeholder="URL de l'image" required />
            <textarea v-model="editItemData.description" placeholder="Description" required></textarea>
            <input v-model="editItemData.currentProject" placeholder="Projet Actuel" required />
            <input v-model="editItemData.skills" placeholder="Compétences" required />
            <input v-model="editItemData.experience" placeholder="Expérience" required />
            <button type="submit">Mettre à jour</button>
          </form>
        </div>
      </div>
      <div v-if="editingNewsIndex !== null && currentSection === 'news'" class="popup-overlay" @click="closeEditNews">
        <div class="popup-content" @click.stop>
          <form @submit.prevent="updateNews">
            <input v-model="editNewsData.title" placeholder="Titre" required />
            <input v-model="editNewsData.image" placeholder="URL de l'image" required />
            <textarea v-model="editNewsData.description" placeholder="Description" required></textarea>
            <button type="submit">Mettre à jour</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { eventBus } from '../eventBus';
  
  export default {
    name: 'AdminBoard',
    data() {
      return {
        currentSection: 'colleagues',
        newItem: {
          name: '',
          role: '',
          image: '',
          description: '',
          currentProject: '',
          skills: '',
          experience: ''
        },
        newNews: {
          title: '',
          image: '',
          description: ''
        },
        editingIndex: null,
        editItemData: {
          name: '',
          role: '',
          image: '',
          description: '',
          currentProject: '',
          skills: '',
          experience: ''
        },
        editingNewsIndex: null,
        editNewsData: {
          title: '',
          image: '',
          description: ''
        },
        eventBus
      };
    },
    methods: {
      addItem() {
        this.eventBus.items.push({ ...this.newItem });
        this.resetNewItem();
      },
      deleteItem(index) {
        this.eventBus.items.splice(index, 1);
      },
      editItem(index) {
        this.editingIndex = index;
        this.editItemData = { ...this.eventBus.items[index] };
      },
      updateItem() {
        if (this.editingIndex !== null) {
          Object.assign(this.eventBus.items[this.editingIndex], this.editItemData);
          this.closeEdit();
        }
      },
      closeEdit() {
        this.editingIndex = null;
        this.resetEditItemData();
      },
      resetNewItem() {
        this.newItem = {
          name: '',
          role: '',
          image: '',
          description: '',
          currentProject: '',
          skills: '',
          experience: ''
        };
      },
      resetEditItemData() {
        this.editItemData = {
          name: '',
          role: '',
          image: '',
          description: '',
          currentProject: '',
          skills: '',
          experience: ''
        };
      },
      addNews() {
        this.eventBus.news.push({ ...this.newNews });
        this.resetNewNews();
      },
      deleteNews(index) {
        this.eventBus.news.splice(index, 1);
      },
      editNews(index) {
        this.editingNewsIndex = index;
        this.editNewsData = { ...this.eventBus.news[index] };
      },
      updateNews() {
        if (this.editingNewsIndex !== null) {
          Object.assign(this.eventBus.news[this.editingNewsIndex], this.editNewsData);
          this.closeEditNews();
        }
      },
      closeEditNews() {
        this.editingNewsIndex = null;
        this.resetEditNewsData();
      },
      resetNewNews() {
        this.newNews = {
          title: '',
          image: '',
          description: ''
        };
      },
      resetEditNewsData() {
        this.editNewsData = {
          title: '',
          image: '',
          description: ''
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .admin-board-container {
    background-color: #F7FAFF;
    min-height: 100vh;
    padding: 100px 20px 40px; /* Ajout de padding top pour éviter que l'interface soit sous la navbar */
    text-align: center;
    font-family: 'Poppins', sans-serif;
  }
  
  h2 {
    font-weight: 700;
    font-size: 2.5em;
    margin-bottom: 40px;
  }
  
  .selector {
    margin-bottom: 20px;
  }
  
  .selector button {
    padding: 10px 20px;
    margin: 0 10px;
    font-size: 1em;
    cursor: pointer;
  }
  
  .crud-container {
    margin-bottom: 40px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  form input, form textarea {
    margin-bottom: 10px;
    padding: 10px;
    font-size: 1em;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  form button {
    padding: 10px;
    font-size: 1em;
    border-radius: 5px;
    border: none;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
  }
  
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .card-item {
    flex: 0 1 calc(25% - 40px);
    box-sizing: border-box;
    margin: 10px;
    cursor: pointer;
  }
  
  .card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    width: 100%;
    position: relative;
  }
  
  .card img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .card-info h3 {
    margin: 10px 0 5px;
    font-size: 1.5em;
  }
  
  .card-info p {
    margin: 0 0 10px;
    font-size: 1.2em;
  }
  
  .card button {
    margin-top: 10px;
    padding: 5px 10px;
    font-size: 0.9em;
    border-radius: 5px;
    border: none;
    background-color: #FF5722;
    color: white;
    cursor: pointer;
  }
  
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .popup-content {
    background: white;
    padding: 40px;
    border-radius: 10px;
    max-width: 900px;
    width: 90%;
    display: flex;
    flex-direction: column;
    z-index: 1001;
  }
  
  @media (max-width: 1024px) {
    .card-item {
      flex: 0 1 calc(33.33% - 40px);
    }
  
    .popup-content {
      padding: 30px;
    }
  }
  
  @media (max-width: 768px) {
    .card-item {
      flex: 0 1 calc(50% - 40px);
    }
  
    .popup-content {
      padding: 20px;
    }
  }
  
  @media (max-width: 480px) {
    .card-item {
      flex: 0 1 100%;
    }
  
    .popup-content {
      padding: 10px;
    }
  }
  </style>
  