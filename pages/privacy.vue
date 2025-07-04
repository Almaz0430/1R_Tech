<template>
  <div class="page-container">
    <div class="container">
      <h1 class="page-title">Политика конфиденциальности</h1>
      
      <div class="content">
        <section class="policy-section">
          <h2>1. Введение</h2>
          <p>Настоящая Политика конфиденциальности описывает, как HexNetGroup собирает, использует и защищает информацию, которую вы предоставляете при использовании нашего сайта и услуг.</p>
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
  title: 'Политика конфиденциальности | HexNetGroup',
  meta: [
    { name: 'description', content: 'Политика конфиденциальности HexNetGroup. Узнайте, как мы собираем, используем и защищаем вашу информацию.' },
    { name: 'keywords', content: 'политика конфиденциальности, защита данных, HexNetGroup, конфиденциальность' },
    { property: 'og:title', content: 'Политика конфиденциальности | HexNetGroup' },
    { property: 'og:description', content: 'Узнайте, как HexNetGroup собирает, использует и защищает вашу информацию.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://hexnetgroup.com/privacy' },
    { property: 'og:image', content: 'https://hexnetgroup.com/logo.png' },
    { property: 'og:image:width', content: '192' },
    { property: 'og:image:height', content: '192' },
    { property: 'og:image:alt', content: 'HexNetGroup логотип' },
    { name: 'twitter:title', content: 'Политика конфиденциальности | HexNetGroup' },
    { name: 'twitter:description', content: 'Узнайте, как HexNetGroup собирает, использует и защищает вашу информацию.' },
    { name: 'twitter:image', content: 'https://hexnetgroup.com/logo.png' },
    { name: 'robots', content: 'index, follow' },
    { name: 'canonical', content: 'https://hexnetgroup.com/privacy' }
  ]
})
</script>

<style scoped>
.page-container {
  background-color: var(--color-bg);
  min-height: 100vh;
  padding: 120px 0 60px;
  color: var(--color-text);
}

.page-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;
  position: relative;
  display: inline-block;
  color: var(--color-neon-blue);
  text-shadow: var(--glow-blue);
}

.page-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--color-neon-blue), transparent);
}

.content {
  background-color: rgba(20, 20, 30, 0.5);
  border-radius: 8px;
  padding: 40px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  border: 1px solid transparent;
  margin-bottom: 40px;
}

.content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid transparent;
  border-radius: 8px;
  background: linear-gradient(45deg, var(--color-neon-blue), var(--color-neon-blue-dark)) border-box;
  -webkit-mask:
     linear-gradient(#fff 0 0) padding-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0.7;
  z-index: -1;
}

.policy-section {
  margin-bottom: 30px;
}

.policy-section h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--color-text);
}

.policy-section p, .policy-section li {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 10px;
}

.policy-section ul {
  padding-left: 20px;
  margin-bottom: 15px;
}

.last-updated {
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 40px;
  text-align: right;
}

.back-link {
  margin-top: 30px;
  text-align: center;
}

.btn {
  font-family: 'Orbitron', sans-serif;
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-neon-blue);
  padding: 10px 25px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: var(--glow-blue);
  text-decoration: none;
  display: inline-block;
}

.btn:hover {
  background: rgba(15, 247, 255, 0.1);
  box-shadow: 0 0 15px var(--color-neon-blue);
}

@media (max-width: 768px) {
  .page-container {
    padding: 100px 20px 40px;
  }
  
  .content {
    padding: 20px;
  }
  
  .page-title {
    font-size: 2rem;
  }
}
</style> 