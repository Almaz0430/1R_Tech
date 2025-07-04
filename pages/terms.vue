<template>
  <div class="page-container">
    <div class="container">
      <h1 class="page-title">Условия использования</h1>
      
      <div class="content">
        <section class="terms-section">
          <h2>1. Введение</h2>
          <p>Настоящие Условия использования регулируют использование веб-сайта HexNetGroup и предоставляемых нами услуг. Используя наш сайт, вы соглашаетесь с данными условиями в полном объеме.</p>
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
  title: 'Условия использования | HexNetGroup',
  meta: [
    { name: 'description', content: 'Условия использования сайта и услуг HexNetGroup. Ознакомьтесь с правилами использования наших услуг и сайта.' },
    { name: 'keywords', content: 'условия использования, пользовательское соглашение, правила, HexNetGroup' },
    { property: 'og:title', content: 'Условия использования | HexNetGroup' },
    { property: 'og:description', content: 'Ознакомьтесь с правилами использования сайта и услуг HexNetGroup.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://hexnetgroup.com/terms' },
    { property: 'og:image', content: 'https://hexnetgroup.com/logo.png' },
    { property: 'og:image:width', content: '192' },
    { property: 'og:image:height', content: '192' },
    { property: 'og:image:alt', content: 'HexNetGroup логотип' },
    { name: 'twitter:title', content: 'Условия использования | HexNetGroup' },
    { name: 'twitter:description', content: 'Ознакомьтесь с правилами использования сайта и услуг HexNetGroup.' },
    { name: 'twitter:image', content: 'https://hexnetgroup.com/logo.png' },
    { name: 'robots', content: 'index, follow' },
    { name: 'canonical', content: 'https://hexnetgroup.com/terms' }
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

.terms-section {
  margin-bottom: 30px;
}

.terms-section h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--color-text);
}

.terms-section p, .terms-section li {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 10px;
}

.terms-section ul {
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