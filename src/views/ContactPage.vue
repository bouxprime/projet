<template>
  <div class="contact-page">
    <FormContact />
  </div>
  <SpacingSection height="100vh" />
</template>

<script>
import FormContact from '@/components/contact/FormContact.vue';
import SpacingSection from '@/components/utilities/SpacingSection.vue' // Assurez-vous que le chemin est correct

export default {
  name: 'ContactPage',
  components: {
    FormContact,
    SpacingSection
  }
}
</script>

<style scoped>
.contact-page {
  background-color: #F7FAFF; /* Ensure the background color matches */
  min-height: 100vh; /* Ensure the background covers the full height */
  padding: 40px; /* Add some padding around the container */
}
</style>
