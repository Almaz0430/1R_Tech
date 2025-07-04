<template>
  <div class="app">
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'ru'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'theme-color', content: '#0a0a0f' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', href: '/icon.png' },
    { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
    { rel: 'apple-touch-icon', href: '/apple-icon.png' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Roboto:wght@300;400;500&display=swap', rel: 'stylesheet' }
  ]
})

// Добавляем структурированные данные для SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HexNetGroup',
  url: 'https://hexnetgroup.com',
  logo: 'https://hexnetgroup.com/logo.png',
  description: 'Современная IT-компания, специализирующаяся на инновационных технологических решениях',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Астана',
    addressCountry: 'Казахстан'
  },
  email: 'almaz.zh7@gmail.com',
  sameAs: []
}

onMounted(() => {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(jsonLd)
  document.head.appendChild(script)
})
</script>

<style>
:root {
  --color-bg: #0a0a0f;
  --color-text: #ffffff;
  --color-neon-blue: #0ff7ff;
  --color-neon-blue-dark: #0066ff;
  --color-neon-pink: #ff2a6d;
  --color-neon-green: #05ffa1;
  --glow-blue: 0 0 10px rgba(15, 247, 255, 0.7), 0 0 20px rgba(15, 247, 255, 0.5), 0 0 30px rgba(15, 247, 255, 0.3);
  --glow-blue-dark: 0 0 10px rgba(0, 102, 255, 0.7), 0 0 20px rgba(0, 102, 255, 0.5), 0 0 30px rgba(0, 102, 255, 0.3);
  --glow-pink: 0 0 10px rgba(255, 42, 109, 0.7), 0 0 20px rgba(255, 42, 109, 0.5), 0 0 30px rgba(255, 42, 109, 0.3);
  --glow-green: 0 0 10px rgba(5, 255, 161, 0.7), 0 0 20px rgba(5, 255, 161, 0.5), 0 0 30px rgba(5, 255, 161, 0.3);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5 {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 100px 0;
  position: relative;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 50px;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-neon-blue), var(--color-neon-blue-dark));
  box-shadow: var(--glow-blue);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
}

.neon-border {
  position: relative;
  border: 1px solid transparent;
  border-image: linear-gradient(45deg, var(--color-neon-blue), var(--color-neon-blue-dark), var(--color-neon-pink), var(--color-neon-green)) 1;
  box-shadow: var(--glow-blue);
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
}

.btn:hover {
  background: rgba(15, 247, 255, 0.1);
  box-shadow: 0 0 15px var(--color-neon-blue);
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(15, 247, 255, 0.4), transparent);
  transition: all 0.6s;
}

.btn:hover::before {
  left: 100%;
}

@media (max-width: 768px) {
  .section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>
