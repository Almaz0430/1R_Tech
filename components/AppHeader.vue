<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="header-container">
      <div class="logo-group">
        <NuxtLink to="/" class="logo-link">
          <span class="logo-text">1R_Tech<span class="logo-dot"></span></span>
        </NuxtLink>
      </div>
      
      <div class="nav-wrapper">
        <div class="menu-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
          <div class="toggle-box">
            <span></span>
            <span></span>
          </div>
        </div>
        
        <nav class="nav" :class="{ 'active': isMenuOpen }">
          <button class="nav-close" @click="closeMenu" aria-label="Закрыть меню">
            <span></span>
            <span></span>
          </button>
          <ul class="nav-list">
            <li v-for="(item, index) in menuItems" :key="index">
              <a :href="item.href" class="nav-link" @click="closeMenu">
                <span class="nav-id">0{{ index + 1 }}</span>
                <span class="nav-text">{{ item.text }}</span>
                <div class="nav-brackets">
                  <span class="bracket-item left">[</span>
                  <span class="bracket-item right">]</span>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="header-tech-info">
        <div class="tech-item">
          <span class="tech-label">LINK:</span>
          <span class="tech-value">SECURE</span>
        </div>
        <div class="tech-item divider">|</div>
        <div class="tech-item">
          <span class="tech-label">BIT:</span>
          <span class="tech-value">64-v2</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const menuItems = [
  { text: 'START', href: '#hero' },
  { text: 'PORTFOLIO', href: '#portfolio' },
  { text: 'TERMINAL', href: '#about' },
  { text: 'TEAM', href: '#team' },
  { text: 'COMM', href: '#contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 30px;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 0;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(10, 10, 20, 0.4);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 8px 30px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  margin: 0 auto;
  max-width: 1160px;
  width: 95%;
}

.header.scrolled {
  top: 15px;
}

.header.scrolled .header-container {
  background: rgba(10, 10, 20, 0.85);
  border-color: rgba(255, 255, 255, 0.2);
  padding: 8px 30px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.4);
}

/* Logo Group */
.logo-group {
  display: flex;
  align-items: center;
  gap: 25px;
}

.logo-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Orbitron', sans-serif;
  font-weight: 900;
  font-size: 0.9rem;
  border-radius: 4px;
}

.logo-text {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
}

.logo-dot {
  width: 5px;
  height: 5px;
  background: #05ffa1;
  border-radius: 50%;
  margin-left: 6px;
  box-shadow: 0 0 10px #05ffa1;
  flex-shrink: 0;
}

.header-status {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.status-dot {
  width: 6px;
  height: 6px;
  background: #05ffa1;
  border-radius: 50%;
  box-shadow: 0 0 10px #05ffa1;
}

.status-dot.pulsing {
  animation: pulseGreen 2s infinite;
}

.status-label {
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 1px;
}

/* Nav */
.nav-list {
  display: flex;
  list-style: none;
  gap: 5px;
  align-items: center;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  transition: all 0.3s ease;
  line-height: 1;
}

.nav-id {
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.3);
  margin-top: 1px; /* Subtle baseline offset for smaller digits */
}

.nav-text {
  position: relative;
  z-index: 2;
}

.nav-brackets {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(-50%);
  pointer-events: none;
  display: flex;
  justify-content: space-between;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 0 -5px;
}

.bracket-item {
  font-size: 1.1rem;
  font-weight: 300;
  color: #fff;
  display: flex;
  align-items: center;
}

.nav-link:hover .nav-brackets {
  opacity: 1;
  padding: 0 4px;
}

.nav-link:hover .nav-text {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.nav-link:hover .nav-id {
  color: #fff;
}

/* Tech Info (Right side) */
.header-tech-info {
  display: flex;
  align-items: center;
  gap: 15px;
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.4);
  line-height: 1;
}

.tech-item {
  display: flex;
  align-items: center;
}

.tech-value {
  color: #fff;
  margin-left: 5px;
}

/* Mobile Close Button - hidden on desktop */
.nav-close {
  display: none;
}

/* Mobile Toggle */
.menu-toggle {
  display: none;
  cursor: pointer;
  padding: 10px;
}

.toggle-box {
  width: 24px;
  height: 14px;
  position: relative;
}

.toggle-box span {
  position: absolute;
  width: 100%;
  height: 2px;
  background: #fff;
  transition: all 0.3s ease;
}

.toggle-box span:nth-child(1) { top: 0; }
.toggle-box span:nth-child(2) { bottom: 0; width: 60%; right: 0; }

.menu-toggle.active .toggle-box span:nth-child(1) { transform: rotate(45deg); top: 6px; }
.menu-toggle.active .toggle-box span:nth-child(2) { transform: rotate(-45deg); bottom: 6px; width: 100%; }

@keyframes pulseGreen {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}

@media (max-width: 1100px) {
  .header-tech-info { display: none; }
}

@media (max-width: 850px) {
  .header-status { display: none; }
  .nav-list { gap: 0; }
}

@media (max-width: 768px) {
  .header { top: 15px; }
  .header-container { margin: 0 auto; width: calc(100% - 40px); padding: 10px 20px; border-radius: 12px; }
  .menu-toggle { display: block; }
  
  .nav {
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    background: rgba(10, 10, 20, 0.98);
    backdrop-filter: blur(20px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 40px;
    transform: translateX(100%);
    visibility: hidden;
    opacity: 0;
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), 
                visibility 0.5s, 
                opacity 0.4s ease;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 1001;
  }

  .nav.active { 
    transform: translateX(0); 
    visibility: visible;
    opacity: 1;
  }

  .nav-close {
    position: absolute;
    top: 25px;
    right: 25px;
    width: 32px;
    height: 32px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .nav-close:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
  }

  .nav-close span {
    position: absolute;
    width: 18px;
    height: 2px;
    background: #fff;
  }

  .nav-close span:nth-child(1) {
    transform: rotate(45deg);
  }

  .nav-close span:nth-child(2) {
    transform: rotate(-45deg);
  }

  .nav-list {
    flex-direction: column;
    gap: 30px;
  }

  .nav-link {
    font-size: 1.2rem;
    padding: 0;
  }
}
</style>

 