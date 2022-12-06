<template>
  <header class="header">
    <div class="header__logo">
      <router-link :to="{name: 'home'}">
        <img src="/src/assets/img/logo.svg" alt="logo">
      </router-link>
    </div>
    <ul class="header__menu">
      <li class="header__menu-item"><router-link :to="{name: 'home'}">Главная</router-link>
      </li>
      <li class="header__menu-item"><router-link :to="{name: 'about'}">О сервисе</router-link></li>
      <li class="header__menu-item"><router-link :to="{name: 'contacts'}">Контакты</router-link></li>
      <li class="header__menu-item"><router-link :to="{name: 'app'}" class="btn btn-primary">Скачать приложение</router-link></li>
    </ul>
  </header>
</template>