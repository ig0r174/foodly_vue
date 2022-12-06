<script setup>
import {useAppStore} from "@/store";
import {onMounted, onUnmounted, ref} from "vue";
import { useScroll } from '@vueuse/core'
import ScrollComponent from "../components/pages/search/ScrollComponent.vue";

const useStore = useAppStore();

const { x, y, isScrolling, arrivedState, directions } = useScroll(window, {
  offset: {
    bottom: 100
  }
})

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

const handleScroll = (event) => {
  if( arrivedState.bottom && !useStore.isLoading && !useStore.searchLastPage ){
    useStore.searchPage++;
    useStore.getResult();
  }
}
</script>

<template>
  <section class="search">
    <div class="search__top">
      <div class="search__top__left">
        <h1 class="search__title section__title">Результаты поиска</h1>
        <p class="search__results" v-if="useStore.total > 0">Найдено продуктов: <span>{{ useStore.total }}</span></p>
      </div>
      <div class="search__top__right">
        <div class="search__top__right__field">
          <label for="query-field">
            <img alt="" src="/src/assets/img/search.svg">
          </label>
          <input class="form__input" id="query-field" :value="useStore.searchQuery" placeholder="Введите штрихкод или название товара">
          <button class="btn btn-primary">Найти</button>
        </div>
      </div>
    </div>

    <div class="search__loading" v-if="useStore.isLoading && useStore.searchPage === 1">
      <div class="search__loading__item" v-for="index in 4" :key="index">
        <div class="search__loading__item__image"></div>
        <div class="search__loading__item__name"></div>
      </div>
    </div>

    <ScrollComponent ref="scrollComponent"/>

    <div class="search__empty" v-if="!useStore.isLoading && useStore.total === 0">
      <div class="search__empty__emoji">😥</div>
      <div class="search__empty__text">По Вашему запросу ничего не найдено</div>
    </div>
  </section>

</template>


