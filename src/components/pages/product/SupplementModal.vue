<script setup>
import {useAppStore} from "@/store";
import {ref} from "vue";
const useStore = useAppStore();

defineProps({
  show: Boolean
});
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <div v-if="useStore.openedSupplement">Добавка {{ useStore.openedSupplement.eurocode }}</div>
            <img @click="$emit('close')" src="/src/assets/img/close_modal.svg" alt="">
          </div>

          <div class="modal-body supplement__data">
            <div class="supplement__data__main">
              <div class="supplement__data__main__item supplement__data__main-from">
                <div class="supplement__data__main__item__icon">
                  <img src="/src/assets/img/chemistry.svg" alt="">
                </div>
                <div class="supplement__data__main__item__text">Синтетическая</div>
              </div>
              <div class="supplement__data__main__item supplement__data__main-type">
                <div class="supplement__data__main__item__icon">
                  <img src="/src/assets/img/color.svg" alt="">
                </div>
                <div class="supplement__data__main__item__text">Краситель</div>
              </div>
              <div class="supplement__data__main__item supplement__data__main-level" :data-level="useStore.openedSupplement.level">
                <div class="supplement__data__main__item__icon">
                  <img src="/src/assets/img/danger.svg" alt="">
                </div>
                <div class="supplement__data__main__item__text">Очень опасна</div>
              </div>
            </div>
            <div class="supplement__data__description">{{ useStore.openedSupplement.description }}</div>

            <div class="supplement__data__harm" v-if="useStore.openedSupplement.benefit">
              <h3 class="supplement__data__title">Польза</h3>
              <div class="supplement__data__description">{{useStore.openedSupplement.benefit}}</div>
            </div>

            <div class="supplement__data__harm" v-if="useStore.openedSupplement.harm">
              <h3 class="supplement__data__title">Вред</h3>
              <div class="supplement__data__description">{{useStore.openedSupplement.harm}}</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </Transition>
</template>