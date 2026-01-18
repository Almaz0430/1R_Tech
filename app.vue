<template>
  <div class="app">
    <div class="global-background">
      <div class="glow-circle top-right"></div>
      <div class="glow-circle bottom-left"></div>
      <div class="glow-circle center"></div>
    </div>
    <CustomCursor />
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
  name: '1R_Tech',
  url: 'https://1rtech.com',
  logo: 'https://1rtech.com/logo.png',
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
  --color-bg: #05050a;
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
  cursor: none !important;
}

html, body {
  scroll-behavior: smooth;
  overflow-x: hidden;
  position: relative;
  width: 100%;
}

body {
  font-family: 'Roboto', sans-serif;
  color: var(--color-text);
  line-height: 1.6;
}

img, video, iframe, canvas {
  max-width: 100%;
  height: auto;
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
  position: relative;
  background-color: var(--color-bg);
  overflow-x: hidden;
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
  padding: 50px 0;
  position: relative;
  overflow: hidden;
}

.section-title {
  font-size: 2.2rem;
  margin-bottom: 40px;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
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
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn {
  font-family: 'Orbitron', sans-serif;
  background: transparent;
  color: var(--color-text);
  border: 1px solid #fff;
  padding: 10px 25px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: all 0.6s;
}

.btn:hover::before {
  left: 100%;
}

/* КРЕАТИВНЫЙ ФОН */
.global-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: radial-gradient(circle at 50% 50%, #0a0a1a 0%, #05050a 100%);
  overflow: hidden;
}

/* Хак для размытых туманностей - glow circle эффект */
.global-background::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: 
    radial-gradient(ellipse 600px 600px at 85% 15%, rgba(15, 247, 255, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse 500px 500px at 10% 85%, rgba(255, 42, 109, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse 400px 400px at 50% 50%, rgba(5, 255, 161, 0.05) 0%, transparent 40%);
  animation: nebulaSpin 60s linear infinite, nebulaBreathe 8s ease-in-out infinite;
}

/* Сетка и частицы */
.global-background::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(circle at center, black, transparent 80%);
  animation: gridMove 20s linear infinite;
}

@keyframes nebulaSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes gridMove {
  0% { transform: translateY(0); }
  100% { transform: translateY(50px); }
}

@keyframes nebulaBreathe {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
}

@media (max-width: 768px) {
  .section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

/* Яркие цветовые пятна (как в Contact) */
.glow-circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.15;
  pointer-events: none;
  z-index: 1;
}

.glow-circle.top-right {
  top: -150px;
  right: -150px;
  background: var(--color-neon-blue);
  animation: float glow 10s ease-in-out infinite;
}

.glow-circle.bottom-left {
  bottom: -150px;
  left: -150px;
  background: var(--color-neon-pink);
  animation: float glow 13s ease-in-out infinite reverse;
}

.glow-circle.center {
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  transform: translate(-50%, -50%);
  background: var(--color-neon-green);
  opacity: 0.08;
  filter: blur(150px);
  animation: pulse-glow 8s ease-in-out infinite;
}

@keyframes float-glow {
  0%, 100% { transform: translate(0, 0); opacity: 0.15; }
  50% { transform: translate(30px, 20px); opacity: 0.25; }
}

@keyframes pulse-glow {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.08; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.15; }
}
</style>
