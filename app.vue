<template>
  <div class="app scroll-smooth bg-[#030303] relative">
    <!-- Animated Background -->
    <div class="fixed top-0 left-0 w-full h-screen pointer-events-none z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30"></div>
      <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" style="animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; animation-delay: 2s;"></div>
    </div>

    <!-- Grid Background -->
    <div class="grid-overlay fixed inset-0 z-0 pointer-events-none">
      <div class="grid-inner">
        <div class="grid-line-v"></div>
        <div class="grid-line-v hidden md:block"></div>
        <div class="grid-line-v hidden lg:block"></div>
        <div class="grid-line-v"></div>
      </div>
    </div>
    
    <div class="relative z-10">
      <CustomCursor />
      <AppHeader />
      <NuxtPage />
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'ru',
    class: 'scroll-smooth bg-[#030303]'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'theme-color', content: '#030303' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', href: '/icon.png' },
    { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
    { rel: 'apple-touch-icon', href: '/apple-icon.png' }
  ]
})

// SEO structured data
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
  // Add structured data
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(jsonLd)
  document.head.appendChild(script)
  
  // Initialize scroll animations
  if (typeof window !== 'undefined' && window.initInViewAnimations) {
    window.initInViewAnimations()
  }
})
</script>

<style>
/* Root Variables - New Color Scheme */
:root {
  --color-bg: #030303;
  --color-text: #ffffff;
  --color-purple: #c084fc;
  --color-blue: #60a5fa;
  --color-text-muted: #9ca3af;
  --border-subtle: rgba(255, 255, 255, 0.03);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  cursor: none !important;
}

html {
  scroll-behavior: smooth;
}

html, body {
  overflow-x: clip; /* clip не ломает position: sticky у потомков */
  position: relative;
  width: 100%;
  background-color: #030303;
}

body {
  font-family: 'Geist', 'Roboto', sans-serif;
  color: var(--color-text);
  line-height: 1.6;
  font-feature-settings: "cv11", "ss01";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img, video, iframe, canvas {
  max-width: 100%;
  height: auto;
}

h1, h2, h3, h4, h5 {
  font-family: 'Space Grotesk', 'Orbitron', sans-serif;
  font-weight: 300;
  letter-spacing: -0.02em;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: clip; /* clip не ломает position: sticky у потомков */
}

main {
  flex: 1;
}

.container {
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.section {
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.section-title {
  font-size: 3rem;
  margin-bottom: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  font-weight: 300;
  letter-spacing: -0.05em;
}

/* Grid Background - Container Aligned */
.grid-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  display: flex;
  justify-content: center;
}

.grid-inner {
  width: 100%;
  height: 100%;
  max-width: 80rem;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}

.grid-line-v {
  width: 1px;
  height: 100%;
  background: rgba(255,255,255,0.02);
}

/* Utilities */
.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #c084fc, #60a5fa, #fff) !important;
}

.border-subtle {
  border-color: rgba(255, 255, 255, 0.03);
}

/* Animation Keyframes */
@keyframes animationIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0px);
  }
}

/* Animation on Scroll */
.animate-on-scroll {
  animation: animationIn 0.8s ease-out both;
  animation-play-state: paused !important;
}

.animate-on-scroll.animate {
  animation-play-state: running !important;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Button Styles */
.btn {
  font-family: 'Geist', sans-serif;
  background: transparent;
  color: var(--color-text);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  font-weight: 500;
}

.btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
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

/* Gradient backgrounds */
.bg-brand-gradient {
  background: linear-gradient(135deg, #7c3aed, #2563eb);
}

.text-glow {
  text-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
}

/* Responsive */
@media (max-width: 768px) {
  .section {
    padding: 4rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .container {
    padding: 0 1.25rem;
  }
}

/* Selection */
::selection {
  background-color: rgba(168, 85, 247, 0.2);
  color: white;
}

::-moz-selection {
  background-color: rgba(168, 85, 247, 0.2);
  color: white;
}
</style>
