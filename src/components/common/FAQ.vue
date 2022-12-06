<template>
  <section class="faq">
    <div class="faq__block">
      <h1 class="section__title">Подготовили для Вас ответы<br>на популярные вопросы</h1>
      <div class="faq__list">
        <div class="faq__list-item">
          <h5 class="faq__list-item__question">Для чего это нужно?</h5>
          <p class="faq__list-item__answer">Foodly – это сервис, который предоставляет каждому без лишних трудностей
            узнать, какие добавки в составе продукта являются вредными и почему.</p>
        </div>
        <div class="faq__list-item">
          <h5 class="faq__list-item__question">Откуда у вас составы продуктов?</h5>
          <p class="faq__list-item__answer">Foodly – это сервис, который предоставляет каждому без лишних трудностей
            узнать, какие добавки в составе продукта являются вредными и почему.</p>
        </div>
        <div class="faq__list-item">
          <h5 class="faq__list-item__question">На какие аллергены выполняется проверка?</h5>
          <p class="faq__list-item__answer">Foodly – это сервис, который предоставляет каждому без лишних трудностей
            узнать, какие добавки в составе продукта являются вредными и почему.</p>
        </div>
        <div class="faq__list-item">
          <h5 class="faq__list-item__question">Где я могу узнать полный список добавок?</h5>
          <p class="faq__list-item__answer">Foodly – это сервис, который предоставляет каждому без лишних трудностей
            узнать, какие добавки в составе продукта являются вредными и почему.</p>
        </div>
      </div>
      <router-link class="btn btn-secondary" :to="{name: 'contacts'}">Я не нашёл (-ла) ответ на свой вопрос</router-link>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {
    document.querySelectorAll(".faq__list .faq__list-item__question").forEach((item) => {
      item.addEventListener("click", () => {
        item.closest(".faq__list .faq__list-item").classList.toggle("faq__list-item-open")
      });
    });
  },
}
</script>