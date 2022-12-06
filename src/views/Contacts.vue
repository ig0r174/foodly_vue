<template>
  <Hero />
  <section class="contacts__row">
    <ContactForm />
    <ContactWays />
  </section>
</template>
<script setup>
import Hero from "../components/pages/contacts/Hero.vue";
import ContactForm from "../components/pages/contacts/ContactForm.vue";
import ContactWays from "../components/pages/contacts/ContactWays.vue";
</script>