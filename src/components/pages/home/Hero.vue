<script setup>
import {useRouter} from "vue-router";
import { useAppStore } from "@/store";

const router = useRouter();
const useStore = useAppStore();

function searchProduct() {
  if(!useStore.searchQuery) return false;
  useStore.getResult();
  router.push({ path: '/search'});
}
</script>

<template>
  <section class="hero">
    <div class="hero__text">
      <h1 class="hero__text-title">Начните выбирать полезные<br>продукты на полках магазина</h1>
      <p class="hero__text-info">Foodly помогает найти хорошие по составу продукты,<br>а также предоставляет список аллергенов всего лишь по штрихкоду</p>
      <div class="hero__text-form hero__search">
        <label for="query-field">
          <img alt="" src="/src/assets/img/search.svg" />
        </label>
        <input v-on:keyup.enter="searchProduct" class="form__input" v-model="useStore.searchQuery" id="query-field" placeholder="Введите штрихкод или название товара">
        <button @click="searchProduct" class="btn btn-primary">Найти</button>
      </div>
    </div>
    <div class="hero__image"><img src="/src/assets/img/hero.jpg" alt="" /></div>
  </section>
</template>