<template>
  <div class="container">
    <Header/>
    <main class="container__content">
      <router-view/>
    </main>
  </div>
  <Footer />
</template>
<script setup>
import {RouterView, RouterLink} from 'vue-router'
import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";
</script>