<template>
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-content">
        <h1>Alezia s'occupe de vous</h1>
        <div class="progress-bar">
          <div class="progress" :style="{ width: progress + '%' }"></div>
        </div>
        <p>{{ progress }}%</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoading: true,
        progress: 0,
      };
    },
    methods: {
      simulateLoading() {
        if (this.progress < 100) {
          this.progress += 1;
          setTimeout(this.simulateLoading, 50);
        } else {
          this.isLoading = false;
          this.$emit('loading-complete');
        }
      },
    },
    mounted() {
      this.simulateLoading();
    },
  };
  </script>
  
  <style scoped>
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    flex-direction: column;
    text-align: center;
  }
  
  .loading-content {
    width: 80%;
    max-width: 400px;
  }
  
  .loading-content h1 {
    font-size: 2em;
    color: #1E90FF;
    margin-bottom: 20px;
  }
  
  .progress-bar {
    width: 100%;
    background-color: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    margin: 20px 0;
    height: 20px;
  }
  
  .progress {
    height: 100%;
    background-color: #1E90FF;
    transition: width 0.3s;
  }
  
  p {
    margin: 0;
    font-size: 1.2em;
    color: #1E90FF;
  }
  </style>
  