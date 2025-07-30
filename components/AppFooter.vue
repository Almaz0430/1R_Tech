<template>
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-logo">
        <NuxtLink to="/" class="footer-logo-link">
          <span class="logo-text">Hex<span class="logo-highlight">Net</span>Group</span>
        </NuxtLink>
        <p class="footer-slogan">Разрабатываем будущее</p>
      </div>
      
      <div class="footer-nav">
        <h3 class="footer-heading">Меню</h3>
        <ul class="footer-menu">
          <li v-for="(item, index) in menuItems" :key="index">
            <a :href="item.href" class="footer-link">{{ item.text }}</a>
          </li>
        </ul>
      </div>
      
      <div class="footer-services">
        <h3 class="footer-heading">Услуги</h3>
        <ul class="footer-menu">
          <li v-for="(service, index) in services" :key="index">
            <a :href="service.href" class="footer-link">{{ service.text }}</a>
          </li>
        </ul>
      </div>
      
      <div class="footer-contact">
        <h3 class="footer-heading">Контакты</h3>
        <div class="footer-contact-info">
          <p><i class="fas fa-map-marker-alt"></i> Астана, Кабанбай батыра 51</p>
          <p><i class="fas fa-phone-alt"></i> + 777 035 40 84</p>
          <p><i class="fas fa-envelope"></i> almaz.zh7@gmail.com</p>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container">
        <p class="copyright">&copy; {{ currentYear }} HexNetGroup. Все права защищены.</p>
        <div class="footer-bottom-links">
          <NuxtLink to="/privacy" class="bottom-link">Политика конфиденциальности</NuxtLink>
          <span class="separator">|</span>
          <NuxtLink to="/terms" class="bottom-link">Условия использования</NuxtLink>
        </div>
      </div>
    </div>
    
    <button class="back-to-top" @click="scrollToTop">
      <i class="fas fa-chevron-up"></i>
    </button>
  </footer>
</template>

<script setup>
const menuItems = [
  { text: 'Главная', href: '#hero' },
  { text: 'Портфолио', href: '#portfolio' },
  { text: 'О нас', href: '#about' },
  { text: 'Команда', href: '#team' },
  { text: 'Контакты', href: '#contact' }
]

const services = [
  { text: 'Веб-разработка', href: '#' },
  { text: 'Мобильные приложения', href: '#' },
  { text: 'UI/UX Дизайн', href: '#' },
  { text: 'Блокчейн', href: '#' },
  { text: 'AI решения', href: '#' }
]

const currentYear = new Date().getFullYear()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  // Появление и исчезновение кнопки "вверх"
  const handleScroll = () => {
    const backToTopBtn = document.querySelector('.back-to-top')
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible')
    } else {
      backToTopBtn.classList.remove('visible')
    }
  }
  
  window.addEventListener('scroll', handleScroll)
  
  // Анимация иконок при наведении
  const socialIcons = document.querySelectorAll('.social-icon')
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      const effect = icon.querySelector('.social-hover-effect')
      effect.style.left = '-100%'
      setTimeout(() => {
        effect.style.left = '100%'
      }, 50)
    })
  })
  
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<style scoped>
.footer {
  position: relative;
  overflow: hidden;
  padding-top: 60px;
}

.footer-container {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: 30px;
  margin-bottom: 50px;
}

/* Логотип */
.footer-logo {
  display: flex;
  flex-direction: column;
}

.footer-logo-link {
  text-decoration: none;
  margin-bottom: 15px;
  display: inline-block;
}

.logo-text {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #fff;
  position: relative;
  display: inline-block;
}

.logo-highlight {
  color: #fff;
}

.logo-text::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s ease;
}

.footer-logo-link:hover .logo-text::after {
  transform: scaleX(1);
  transform-origin: left;
}

.footer-slogan {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 10px;
}

/* Навигация */
.footer-heading {
  color: var(--color-text);
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-family: 'Orbitron', sans-serif;
  position: relative;
  display: inline-block;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 30px;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
}

.footer-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-link {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 5px 0;
  display: block;
  transition: all 0.3s ease;
  position: relative;
}

.footer-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #fff;
  transition: width 0.3s ease;
}

.footer-link:hover {
  color: #fff;
  padding-left: 5px;
}

.footer-link:hover::before {
  width: 100%;
}

/* Контактная информация */
.footer-contact-info {
  margin-bottom: 25px;
}

.footer-contact-info p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.footer-contact-info i {
  color: #fff;
  margin-right: 10px;
  font-size: 0.9rem;
}

/* Социальные иконки */
.footer-social {
  display: flex;
  gap: 15px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--color-text);
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.social-hover-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.social-icon:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

/* Нижняя часть */
.footer-bottom {
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px 0;
  position: relative;
}

.footer-bottom .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
}

.footer-bottom-links {
  display: flex;
  align-items: center;
}

.bottom-link {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.bottom-link:hover {
  color: #fff;
}

.separator {
  color: rgba(255, 255, 255, 0.3);
  margin: 0 10px;
}

/* Кнопка "вверх" */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(10, 10, 15, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 99;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.back-to-top.visible {
  opacity: 1;
  transform: translateY(0);
}

.back-to-top:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

@media (max-width: 992px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
  }
  
  .footer-logo, .footer-contact {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
  }
  
  .footer-logo, .footer-contact {
    grid-column: span 1;
  }
  
  .footer-bottom .container {
    flex-direction: column;
    gap: 15px;
  }
}
</style> 