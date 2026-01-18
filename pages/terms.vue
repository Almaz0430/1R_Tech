<template>
  <div class="page-container">
    <div class="container">
      <h1 class="page-title">Условия использования</h1>
      
      <div class="content">
        <section class="terms-section">
          <h2>1. Введение</h2>
          <p>Настоящие Условия использования регулируют использование веб-сайта 1R_Tech и предоставляемых нами услуг. Используя наш сайт, вы соглашаетесь с данными условиями в полном объеме.</p>
        </section>
        
        <section class="terms-section">
          <h2>2. Использование сайта</h2>
          <p>При использовании нашего сайта вы соглашаетесь:</p>
          <ul>
            <li>Не нарушать работу сайта и не пытаться получить несанкционированный доступ к нашим системам</li>
            <li>Не использовать сайт для незаконных или мошеннических целей</li>
            <li>Не распространять вредоносное программное обеспечение через наш сайт</li>
            <li>Не копировать, не воспроизводить и не использовать материалы сайта без нашего разрешения</li>
          </ul>
        </section>
        
        <section class="terms-section">
          <h2>3. Интеллектуальная собственность</h2>
          <p>Все материалы на сайте, включая тексты, изображения, логотипы, дизайн и программный код, являются нашей интеллектуальной собственностью или используются с разрешения правообладателей.</p>
        </section>
        
        <section class="terms-section">
          <h2>4. Ограничение ответственности</h2>
          <p>Мы стремимся обеспечить точность и актуальность информации на нашем сайте, однако не гарантируем ее полноту и безошибочность. Мы не несем ответственности за любые убытки или ущерб, возникшие в результате использования нашего сайта.</p>
        </section>
        
        <section class="terms-section">
          <h2>5. Ссылки на другие сайты</h2>
          <p>Наш сайт может содержать ссылки на сторонние веб-сайты. Мы не контролируем содержание этих сайтов и не несем ответственности за их содержание или политику конфиденциальности.</p>
        </section>
        
        <section class="terms-section">
          <h2>6. Изменения условий</h2>
          <p>Мы оставляем за собой право изменять настоящие Условия использования в любое время. Продолжая использовать наш сайт после внесения изменений, вы соглашаетесь с обновленными условиями.</p>
        </section>
        
        <section class="terms-section">
          <h2>7. Применимое право</h2>
          <p>Настоящие Условия использования регулируются и толкуются в соответствии с законодательством Республики Казахстан.</p>
        </section>
        
        <section class="terms-section">
          <h2>8. Контактная информация</h2>
          <p>Если у вас есть вопросы относительно наших Условий использования, пожалуйста, свяжитесь с нами по адресу: almaz.zh7@gmail.com</p>
        </section>
        
        <div class="last-updated">
          <p>Последнее обновление: {{ currentDate }}</p>
        </div>
        
        <div class="back-link">
          <NuxtLink to="/" class="btn">Вернуться на главную</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const currentDate = new Date().toLocaleDateString('ru-RU', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

useHead({
  title: 'Условия использования | 1R_Tech',
  meta: [
    { name: 'description', content: 'Условия использования сайта и услуг 1R_Tech. Ознакомьтесь с правилами использования наших услуг и сайта.' },
    { name: 'keywords', content: 'условия использования, пользовательское соглашение, правила, 1R_Tech' },
    { property: 'og:title', content: 'Условия использования | 1R_Tech' },
    { property: 'og:description', content: 'Ознакомьтесь с правилами использования сайта и услуг 1R_Tech.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://1rtech.com/terms' },
    { property: 'og:image', content: 'https://1rtech.com/logo.png' },
    { property: 'og:image:width', content: '192' },
    { property: 'og:image:height', content: '192' },
    { property: 'og:image:alt', content: '1R_Tech логотип' },
    { name: 'twitter:title', content: 'Условия использования | 1R_Tech' },
    { name: 'twitter:description', content: 'Ознакомьтесь с правилами использования сайта и услуг 1R_Tech.' },
    { name: 'twitter:image', content: 'https://1rtech.com/logo.png' },
    { name: 'robots', content: 'index, follow' },
    { name: 'canonical', content: 'https://1rtech.com/terms' }
  ]
})
</script>

<style scoped>
.page-container {
  background: transparent;
  min-height: 100vh;
  padding: 140px 0 80px;
  color: var(--color-text);
  position: relative;
  overflow-x: hidden;
}

.page-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  margin-bottom: 40px;
  position: relative;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.content {
  background: transparent;
  position: relative;
  margin-top: 20px;
}

.terms-section {
  margin-bottom: 50px;
  max-width: 900px;
}

.terms-section h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 25px;
  color: #fff;
  letter-spacing: 1px;
}

.terms-section p, .terms-section li {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.terms-section ul {
  padding-left: 25px;
  margin-bottom: 25px;
}

.terms-section li::marker {
  color: rgba(255, 255, 255, 0.4);
}

.last-updated {
  font-style: italic;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 80px;
  text-align: left;
  font-size: 0.9rem;
}

.back-link {
  margin-top: 60px;
  text-align: left;
}

@media (max-width: 992px) {
  .page-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {
  .page-container {
    padding: 110px 0 60px;
  }
  
  .page-title {
    font-size: 1.6rem;
    margin-bottom: 30px;
  }
  
  .terms-section {
    margin-bottom: 40px;
  }
  
  .terms-section h2 {
    font-size: 1.3rem;
    margin-bottom: 15px;
  }
  
  .terms-section p, .terms-section li {
    font-size: 1rem;
  }
}
</style>

 