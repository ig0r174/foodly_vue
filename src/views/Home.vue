<script setup>
import Hero from "../components/pages/home/Hero.vue";
import HowItWorks from "../components/pages/home/HowItWorks.vue";
import WithCare from "../components/pages/home/WithCare.vue";
import WhatFoodlyKnows from "../components/pages/home/WhatFoodlyKnows.vue";
import Application from "../components/common/Application.vue";
import FAQ from "../components/common/FAQ.vue";

import {onMounted} from "vue"
import {useAppStore} from "@/store";

const useStore = useAppStore();

onMounted(() => {
  useStore.$patch((state) => {
    state.searchQuery = "";
    state.searchPage = 1;
    state.searchLastPage = false;
    state.total = 0;
    state.data = [];
  });
})

</script>

<template>
  <Hero/>
  <HowItWorks/>
  <WithCare/>
  <WhatFoodlyKnows/>
  <Application/>
  <FAQ/>
</template>
