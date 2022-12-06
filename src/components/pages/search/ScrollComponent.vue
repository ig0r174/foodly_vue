<script setup>
import { useAppStore } from "@/store";
import ProductItem from "../search/ProductItem.vue";
const useStore = useAppStore();
</script>
<template>
  <div class="search__list">
    <ProductItem v-for="item in useStore.data" :item="item" />
  </div>
</template>