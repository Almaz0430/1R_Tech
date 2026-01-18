<template>
  <footer class="footer">
    <div class="footer-bg"></div>
    <!-- Декоративные линии -->
    <div class="footer-line top"></div>
    
    <div class="container relative-z">
      <div class="footer-main">
        <div class="footer-info">
          <NuxtLink to="/" class="footer-logo">
            <span class="logo-text">1R_Tech</span>
          </NuxtLink>
          <p class="footer-desc">Разрабатываем качественные программные решения для бизнеса.</p>
          <div class="tech-label">SYST_VER: 2.1.0</div>
        </div>
        
        <div class="footer-links-grid">
          <div class="footer-col">
            <h3 class="footer-heading"><span class="heading-tag">#</span>LINK_HUB</h3>
            <ul class="footer-menu">
              <li v-for="(item, index) in menuItems" :key="index">
                <a :href="item.href" class="footer-link">{{ item.text }}</a>
              </li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h3 class="footer-heading"><span class="heading-tag">#</span>SECURE_PORT</h3>
            <ul class="footer-menu">
              <li><NuxtLink to="/privacy" class="footer-link">Privacy_Policy</NuxtLink></li>
              <li><NuxtLink to="/terms" class="footer-link">Terms_Of_Use</NuxtLink></li>
              <li><a href="#contact" class="footer-link">Contact_Center</a></li>
            </ul>
          </div>
          
          <div class="footer-col contact-col">
            <h3 class="footer-heading"><span class="heading-tag">#</span>DATA_ROOT</h3>
            <div class="footer-contact-info">
              <div class="contact-item">
                <span class="item-label">LOC:</span>
                <span class="item-value">Астана, Кабанбай батыра 51</span>
              </div>
              <div class="contact-item">
                <span class="item-label">VOICE:</span>
                <span class="item-value">+7 (777) 035 40 84</span>
              </div>
              <div class="contact-item">
                <span class="item-label">STREAM:</span>
                <span class="item-value">almaz.zh7@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          <span class="copyright-symbol">©</span> {{ currentYear }} 1R_TECH // ALL_RIGHTS_RESERVED
        </div>
        <div class="footer-status">
          <span class="status-dot"></span>
          <span class="status-text">SYSTEM_ONLINE</span>
        </div>
      </div>
    </div>
    
    <button class="back-to-top" @click="scrollToTop" aria-label="Back to top">
      <div class="btn-glow"></div>
      <i class="fas fa-arrow-up"></i>
    </button>
  </footer>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

const menuItems = [
  { text: 'Главная', href: '#hero' },
  { text: 'Портфолио', href: '#portfolio' },
  { text: 'О нас', href: '#about' },
  { text: 'Команда', href: '#team' },
  { text: 'Контакты', href: '#contact' }
]

const currentYear = new Date().getFullYear()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  const handleScroll = () => {
    const backToTopBtn = document.querySelector('.back-to-top')
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible')
      } else {
        backToTopBtn.classList.remove('visible')
      }
    }
  }
  window.addEventListener('scroll', handleScroll)
  onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<style scoped>
.footer {
  position: relative;
  width: 100%;
  background-color: #05050a;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 80px 0 30px;
  overflow: hidden;
}

.footer-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 0%, rgba(20, 20, 35, 0.8) 0%, rgba(5, 5, 10, 1) 100%);
  z-index: 0;
}

.footer-line.top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(5, 255, 161, 0.5), transparent);
  box-shadow: 0 0 10px rgba(5, 255, 161, 0.5);
}

.relative-z {
  position: relative;
  z-index: 10;
}

/* Основной контент */
.footer-main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  margin-bottom: 60px;
}

.logo-text {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 2px;
}

.footer-desc {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 20px 0;
  max-width: 300px;
}

.tech-label {
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: 1px;
}

/* Сетка ссылок */
.footer-links-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.footer-heading {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.9rem;
  color: #fff;
  margin-bottom: 25px;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
}

.heading-tag {
  color: rgba(255, 255, 255, 0.3);
  margin-right: 8px;
}

.footer-menu {
  list-style: none;
  padding: 0;
}

.footer-link {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 0.9rem;
  display: block;
  padding: 8px 0;
  transition: all 0.3s ease;
  font-family: 'Courier New', monospace;
}

.footer-link:hover {
  color: #fff;
  transform: translateX(5px);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

/* Контакты */
.footer-contact-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-item {
  display: flex;
  flex-direction: column;
}

.item-label {
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: 4px;
}

.item-value {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

/* Нижняя панель */
.footer-bottom {
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.3);
}

.footer-status {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Courier New', monospace;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
}

.status-dot {
  width: 6px;
  height: 6px;
  background: #05ffa1;
  border-radius: 50%;
  box-shadow: 0 0 10px #05ffa1;
  animation: pulse-status 2s infinite;
}

@keyframes pulse-status {
  0% { opacity: 0.3; transform: scale(0.9); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 0.3; transform: scale(0.9); }
}

/* Кнопка "Вверх" */
.back-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  background: rgba(10, 10, 15, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.back-to-top.visible {
  opacity: 1;
  transform: translateY(0);
}

.back-to-top:hover {
  background: #fff;
  color: #000;
  border-color: #fff;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  transform: translateY(-5px);
}

/* Адаптив */
@media (max-width: 992px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .footer-links-grid {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .contact-col {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 60px 0 30px;
  }
  
  .footer-links-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-col {
    grid-column: span 1;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  .back-to-top {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
}
</style>
 