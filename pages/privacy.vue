<template>
  <div class="page-container">
    <div class="container">
      <h1 class="page-title">Политика конфиденциальности</h1>
      
      <div class="content">
        <section class="policy-section">
          <h2>1. Введение</h2>
          <p>Настоящая Политика конфиденциальности описывает, как 1R_Tech собирает, использует и защищает информацию, которую вы предоставляете при использовании нашего сайта и услуг.</p>
        </section>
        
        <section class="policy-section">
          <h2>2. Сбор информации</h2>
          <p>Мы можем собирать следующие типы информации:</p>
          <ul>
            <li>Контактная информация (имя, email, телефон)</li>
            <li>Информация, предоставленная при заполнении форм</li>
            <li>Техническая информация о вашем устройстве и посещении сайта</li>
          </ul>
        </section>
        
        <section class="policy-section">
          <h2>3. Использование информации</h2>
          <p>Мы используем собранную информацию для:</p>
          <ul>
            <li>Предоставления запрошенных вами услуг</li>
            <li>Улучшения нашего сайта и услуг</li>
            <li>Связи с вами по вопросам сотрудничества</li>
            <li>Отправки информационных материалов (с вашего согласия)</li>
          </ul>
        </section>
        
        <section class="policy-section">
          <h2>4. Защита информации</h2>
          <p>Мы применяем соответствующие меры безопасности для защиты вашей информации от несанкционированного доступа, изменения, раскрытия или уничтожения.</p>
        </section>
        
        <section class="policy-section">
          <h2>5. Файлы cookie</h2>
          <p>Наш сайт использует файлы cookie для улучшения пользовательского опыта. Вы можете отключить использование файлов cookie в настройках вашего браузера.</p>
        </section>
        
        <section class="policy-section">
          <h2>6. Раскрытие информации третьим лицам</h2>
          <p>Мы не продаем, не обмениваем и не передаем вашу личную информацию третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством.</p>
        </section>
        
        <section class="policy-section">
          <h2>7. Изменения в политике конфиденциальности</h2>
          <p>Мы можем обновлять нашу политику конфиденциальности. Все изменения будут опубликованы на этой странице.</p>
        </section>
        
        <section class="policy-section">
          <h2>8. Контактная информация</h2>
          <p>Если у вас есть вопросы относительно нашей политики конфиденциальности, пожалуйста, свяжитесь с нами по адресу: almaz.zh7@gmail.com</p>
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
  title: 'Политика конфиденциальности | 1R_Tech',
  meta: [
    { name: 'description', content: 'Политика конфиденциальности 1R_Tech. Узнайте, как мы собираем, используем и защищаем вашу информацию.' },
    { name: 'keywords', content: 'политика конфиденциальности, защита данных, 1R_Tech, конфиденциальность' },
    { property: 'og:title', content: 'Политика конфиденциальности | 1R_Tech' },
    { property: 'og:description', content: 'Узнайте, как 1R_Tech собирает, использует и защищает вашу информацию.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://1rtech.com/privacy' },
    { property: 'og:image', content: 'https://1rtech.com/logo.png' },
    { property: 'og:image:width', content: '192' },
    { property: 'og:image:height', content: '192' },
    { property: 'og:image:alt', content: '1R_Tech логотип' },
    { name: 'twitter:title', content: 'Политика конфиденциальности | 1R_Tech' },
    { name: 'twitter:description', content: 'Узнайте, как 1R_Tech собирает, использует и защищает вашу информацию.' },
    { name: 'twitter:image', content: 'https://1rtech.com/logo.png' },
    { name: 'robots', content: 'index, follow' },
    { name: 'canonical', content: 'https://1rtech.com/privacy' }
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

.policy-section {
  margin-bottom: 50px;
  max-width: 900px;
}

.policy-section h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 25px;
  color: #fff;
  letter-spacing: 1px;
}

.policy-section p, .policy-section li {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.policy-section ul {
  padding-left: 25px;
  margin-bottom: 25px;
}

.policy-section li::marker {
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
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .page-container {
    padding: 110px 0 60px;
  }
  
  .page-title {
    font-size: 1.8rem;
    margin-bottom: 40px;
  }

  .page-title::after {
    bottom: -10px;
    width: 40px;
  }
  
  .policy-section {
    margin-bottom: 40px;
  }
  
  .policy-section h2 {
    font-size: 1.3rem;
    margin-bottom: 15px;
  }
  
  .policy-section p, .policy-section li {
    font-size: 1rem;
  }
}
</style>

 