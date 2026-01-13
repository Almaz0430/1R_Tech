<template>
  <header class="header" ref="header">
    <div class="logo">
      <NuxtLink to="/" class="logo-link">
        <span class="logo-text">1R_Tech</span>
      </NuxtLink>
    </div>
    
    <div class="container header-container">
      <div class="menu-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav class="nav" :class="{ 'active': isMenuOpen }">
        <ul class="nav-list">
          <li v-for="(item, index) in menuItems" :key="index">
            <a :href="item.href" class="nav-link" @click="closeMenu">{{ item.text }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
const isMenuOpen = ref(false)
const header = ref(null)

const menuItems = [
  { text: 'Главная', href: '#hero' },
  { text: 'Портфолио', href: '#portfolio' },
  { text: 'О нас', href: '#about' },
  { text: 'Команда', href: '#team' },
  { text: 'Контакты', href: '#contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

// Изменение прозрачности заголовка при прокрутке
onMounted(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY
    if (scrollPosition > 50) {
      header.value.classList.add('scrolled')
    } else {
      header.value.classList.remove('scrolled')
    }
  }
  
  window.addEventListener('scroll', handleScroll)
  
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 20px 0;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
}

.container.header-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header.scrolled {
  padding: 15px 0;
  background-color: rgba(10, 10, 15, 0.5);
  backdrop-filter: blur(10px);
}

.logo {
  margin-left: 0;
  padding-left: 0;
  position: absolute;
  left: 300px;
}

.logo-link {
  text-decoration: none;
  color: var(--color-text);
  padding-left: 0;
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
  display: none;
}

.logo-link:hover .logo-text::after {
  transform: none;
}

.nav-list {
  display: flex;
  list-style: none;
  margin-right: 30px;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-link {
  color: var(--color-text);
  text-decoration: none;
  margin: 0 15px;
  padding: 5px 10px;
  font-size: 1rem;
  font-weight: 400;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #fff;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.nav-link:hover {
  color: var(--color-text);
}

.nav-link:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

.contact-btn {
  margin-left: 15px;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 101;
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #fff;
  transition: all 0.3s ease;
}

.header-glow {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.3), transparent);
}

@media (max-width: 768px) {
  .header {
    padding: 25px 0;
  }
  
  .header.scrolled {
    padding: 20px 0;
  }
  
  .logo {
    left: 80px;
  }
  
  .logo-text {
    font-size: 1.6rem;
  }
  
  .menu-toggle {
    display: flex;
    position: absolute;
    right: 20px;
    z-index: 102;
    width: 35px;
    height: 25px;
  }

  .menu-toggle span {
    height: 3.5px;
  }

  .menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 6px);
  }

  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -6px);
  }

  .container.header-container {
    justify-content: flex-end;
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(10, 10, 20, 0.8);
    backdrop-filter: blur(5px);
    transition: opacity 0.4s ease, visibility 0.4s ease;
    opacity: 0;
    visibility: hidden;
    border-left: none;
    box-shadow: none;
  }

  .nav.active {
    right: 0;
    opacity: 1;
    visibility: visible;
  }

  .nav-list {
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    margin-bottom: 30px;
  }

  .nav-list li {
    margin: 15px 0;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.4s ease;
  }

  .nav.active .nav-list li {
    transform: translateY(0);
    opacity: 1;
  }

  .nav.active .nav-list li:nth-child(1) { transition-delay: 0.1s; }
  .nav.active .nav-list li:nth-child(2) { transition-delay: 0.2s; }
  .nav.active .nav-list li:nth-child(3) { transition-delay: 0.3s; }
  .nav.active .nav-list li:nth-child(4) { transition-delay: 0.4s; }
  .nav.active .nav-list li:nth-child(5) { transition-delay: 0.5s; }

  .nav-link {
    font-size: 1.8rem;
    margin: 15px 0;
  }
}
</style> 