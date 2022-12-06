<script setup>
import {useRoute} from "vue-router";
import {useAppStore} from "@/store";
import {onBeforeMount, onMounted, ref} from "vue";
import {RouterLink} from "vue-router";
import SupplementModal from "../components/pages/product/SupplementModal.vue";

const route = useRoute();
const useStore = useAppStore();
let showModal = ref(false);

onBeforeMount(() => {
  useStore.getProduct(route.params.id);
});

function getDataLevel(name) {
  const mass = useStore.openedProduct.supplements.find((sup) => sup.name === name);
  return mass.data.level
}

function getSupplement(name) {
  let supplementId = useStore.openedProduct.supplements.find((sup) => sup.name === name).data.id;
  showModal.value = true;
  useStore.getSupplement(supplementId);
}
</script>

<template>

  <Teleport to="body">
    <SupplementModal :show="showModal" @close="showModal = false"></SupplementModal>
  </Teleport>

  <section class="product product-empty" v-if="useStore.isLoading">
    <div class="product__main">
      <div class="product__block product__block-main">
        <h5 class="product__block-main__title"></h5>
        <div class="product__block-main__img"></div>
        <div class="product__block-main__rows">
          <div class="product__block-main__rows-item"></div>
          <div class="product__block-main__rows-item"></div>
        </div>
      </div>
    </div>
    <div class="product__analysis">
      <div class="product__block product__block-analysis">
        <div class="product__block__header">
          <h5 class="product__block__header-text"></h5>
        </div>
        <div class="product__block__body">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </section>

  <section v-else class="product">
    <div class="product__main">
      <div class="product__block product__block-main">
        <h5 class="product__block-main__title">{{ useStore.openedProduct.name }}</h5>
        <div class="product__block-main__img">
          <img :src="useStore.openedProduct.image" :alt="useStore.openedProduct.name"/>
        </div>
        <div class="product__block-main__rows">
          <div class="product__block-main__rows-item">
            <div class="product__block-main__rows-item__name">Штрихкод</div>
            <div class="product__block-main__rows-item__value">{{ useStore.openedProduct.barcode }}</div>
          </div>
          <div class="product__block-main__rows-item">
            <div class="product__block-main__rows-item__name">Страна</div>
            <div class="product__block-main__rows-item__value">{{ useStore.openedProduct.country }}</div>
          </div>
        </div>
        <div class="product__block-main__rating">
          <img src="/src/assets/img/rating.svg" alt=""/>
          <div class="product__block-main__rating-value">4,9</div>
        </div>
      </div>
      <div class="product__block product__block-perishable" v-if="useStore.openedProduct.isPerishable">
        Данный продукт относится к категории скоропортящихся, поэтому уделяйте особое внимание сроку годности!
      </div>
    </div>
    <div class="product__analysis">
      <div class="product__block product__block-analysis">
        <div class="product__block__header">
          <h5 class="product__block__header-text">Состав</h5>
        </div>
        <div class="product__block__body">
          <p class="product__block__body-text">
            <template v-for="text in useStore.textSupplements">
          <template v-if="text.isSupplement === false">{{text.text}}</template>
          <span v-if="text.isSupplement === true" :data-level="getDataLevel(text.text)" @click="getSupplement(text.text)">{{text.text}}</span>
        </template>
          </p>
        </div>
      </div>
      <div class="product__block product__block-analysis product__block-allergens">
        <div class="product__block__header">
          <h5 class="product__block__header-text">Аллергены</h5>
        </div>
        <div class="product__block__body">
          <div class="product__block__body__allergens">

            <div v-for="(item, index) in useStore.openedProduct.allergens" :key="index"
                 class="product__block__body__allergens-item">
              <div class="product__block__body__allergens-item__name">{{ item.ruName }}</div>
              <div v-if="item.status === false" class="product__block__body__allergens-item__value">не содержится</div>
              <div v-if="item.status" class="product__block__body__allergens-item__value">содержится</div>
              <div v-if="item.status === null" class="product__block__body__allergens-item__value">возможно</div>
            </div>

          </div>
        </div>
      </div>
      <div class="product__block product__block-analysis product__block-profiles">
        <div class="product__block__header">
          <h5 class="product__block__header-text">Профили</h5>
          <span class="product__block__header-additional">Только в приложении</span>
        </div>
        <div class="product__block__body product__block__body-profiles">
          <div class="product__block__body-profiles__img">
            <img src="/src/assets/img/profiles_lock.svg" alt="Профили доступны только в приложении"/>
          </div>
          <p class="product__block__body-profiles__text">Профили позволяют выбирать продукты, подходящие нескольким
            людям, учитывая их непереносимость и аллергии</p>
        </div>
      </div>
      <div class="product__block product__block-analysis product__block-bug">
        <div class="product__block__header">
          <h5 class="product__block__header-text">Нашли ошибку?</h5>
        </div>
        <div class="product__block__body product__block__body-bug">
          <p class="product__block__body-bug__text">Мы
            стараемся сделать наш сервис максимально полезным и стараемся следить за достоверностью предоставляемой
            информации, поэтому в случае расхождения состава или при ошибке определения наличия аллергенов, обязательно
            сообщите нам</p>
          <router-link class="btn btn-white" :to="{name: 'contacts'}">Сообщить об ошибке</router-link>
        </div>
      </div>
    </div>
  </section>
</template>