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
  title: 'HexNetGroup - Разрабатываем будущее | IT-компания',
  meta: [
    { name: 'description', content: 'HexNetGroup - современная IT-компания, специализирующаяся на веб-разработке, мобильных приложениях, UI/UX дизайне, блокчейне и AI решениях. Создаем инновационные технологические решения для вашего бизнеса.' },
    { name: 'keywords', content: 'IT-компания, веб-разработка, мобильные приложения, UI/UX дизайн, блокчейн, искусственный интеллект, Казахстан, Астана' },
    { property: 'og:title', content: 'HexNetGroup - Разрабатываем будущее | IT-компания' },
    { property: 'og:description', content: 'Современная IT-компания, специализирующаяся на инновационных технологических решениях для вашего бизнеса' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://hexnetgroup.com/' },
    { property: 'og:image', content: 'https://hexnetgroup.com/logo.png' },
    { property: 'og:image:width', content: '192' },
    { property: 'og:image:height', content: '192' },
    { property: 'og:image:alt', content: 'HexNetGroup логотип' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'HexNetGroup - Разрабатываем будущее | IT-компания' },
    { name: 'twitter:description', content: 'Современная IT-компания, специализирующаяся на инновационных технологических решениях' },
    { name: 'twitter:image', content: 'https://hexnetgroup.com/logo.png' },
    { name: 'robots', content: 'index, follow' },
    { name: 'canonical', content: 'https://hexnetgroup.com/' }
  ]
})
</script>

<style scoped>
main {
  flex: 1;
}
</style> 