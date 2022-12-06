<template>
  <router-link :to="`/product/${item.barcode}`" class="search__list__item">
    <div class="search__list__item__img">
      <img :alt="item.name" :src="item.image"/>
    </div>
    <p class="search__list__name">{{item.name}}</p>
  </router-link>
</template>
<script>
export default {
  props: {
    item: Object
  }
}
</script>