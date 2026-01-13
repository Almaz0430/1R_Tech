<template>
  <main>
    <HeroSection />
    <PortfolioSection />
    <AboutSection />
    <TeamSection />
    <ContactSection />
  </main>
</template>

<script setup>
// Главная страница сайта
useHead({
  title: '1R_Tech - Разрабатываем будущее | IT-компания',
  meta: [
    { name: 'description', content: '1R_Tech - современная IT-компания, специализирующаяся на веб-разработке, мобильных приложениях, UI/UX дизайне, блокчейне и AI решениях. Создаем инновационные технологические решения для вашего бизнеса.' },
    { name: 'keywords', content: 'IT-компания, веб-разработка, мобильные приложения, UI/UX дизайн, блокчейн, искусственный интеллект, Казахстан, Астана' },
    { property: 'og:title', content: '1R_Tech - Разрабатываем будущее | IT-компания' },
    { property: 'og:description', content: 'Современная IT-компания, специализирующаяся на инновационных технологических решениях для вашего бизнеса' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://1rtech.com/' },
    { property: 'og:image', content: 'https://1rtech.com/logo.png' },
    { property: 'og:image:width', content: '192' },
    { property: 'og:image:height', content: '192' },
    { property: 'og:image:alt', content: '1R_Tech логотип' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '1R_Tech - Разрабатываем будущее | IT-компания' },
    { name: 'twitter:description', content: 'Современная IT-компания, специализирующаяся на инновационных технологических решениях' },
    { name: 'twitter:image', content: 'https://1rtech.com/logo.png' },
    { name: 'robots', content: 'index, follow' },
    { name: 'canonical', content: 'https://1rtech.com/' }
  ]
})
</script>

<style scoped>
main {
  flex: 1;
}
</style> 