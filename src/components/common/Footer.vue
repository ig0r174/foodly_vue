<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();
</script>
<template>
  <footer class="footer" :class="router.currentRoute.value.name === 'product' ? 'footer-filled' : ''">
    <div class="container">
      <div class="footer__links">
        <div class="footer__links__item"><p class="footer__links__item-title">Документация</p>
          <ul class="footer__links__menu">
            <li class="footer__links__menu-item"><a href="#">Пользовательское соглашение</a></li>
            <li class="footer__links__menu-item"><a href="#">Политика конфиденциальности</a></li>
            <li class="footer__links__menu-item"><a href="#">Согласие на обработку перс. данных</a></li>
          </ul>
        </div>
        <div class="footer__links__item"><p class="footer__links__item-title">Социальные сети</p>
          <ul class="footer__links__menu">
            <li class="footer__links__menu-item"><a href="#">Telegram</a></li>
            <li class="footer__links__menu-item"><a href="#">Instagram</a></li>
            <li class="footer__links__menu-item"><a href="#">VKontakte</a></li>
          </ul>
        </div>
        <div class="footer__links__item"><p class="footer__links__item-title">Поддержка</p>
          <ul class="footer__links__menu">
            <li class="footer__links__menu-item"><a href="#">Вопросы и ответы</a></li>
            <li class="footer__links__menu-item"><a href="#">help@foodly.org</a></li>
            <li class="footer__links__menu-item"><a href="#">8 (800) 000-00-00</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__copyright">© 2022, Foodly.org, официальный сайт</div>
    </div>
  </footer>
</template>