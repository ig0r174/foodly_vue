<template>
  <div class="contacts__block">
    <div class="product__block__header">
      <h5 class="product__block__header-text">Контактная форма</h5>
    </div>
    <div class="product__block__body">
      <form>
        <input type="text" placeholder="Ваше имя" name="name">
        <input type="email" placeholder="Ваше E-mail для получения ответа" name="email">
        <input type="text" placeholder="Тема обращения" name="subject">
        <textarea rows="5" name="body" placeholder="Текст обращения"></textarea>
        <button class="btn btn-primary" type="submit">Отправить обращение</button>
      </form>
    </div>
  </div>
</template>