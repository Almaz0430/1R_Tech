<template>
  <header class="header" ref="header">
    <div class="container header-container">
      <div class="logo">
        <NuxtLink to="/" class="logo-link">
          <span class="logo-text">1R_Tech</span>
        </NuxtLink>
      </div>
      
      <div class="nav-wrapper">
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

// Изменение прозрачности заголовка при прокурке
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
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-wrapper {
  display: flex;
  align-items: center;
}

.header.scrolled {
  padding: 15px 0;
  background-color: rgba(10, 10, 15, 0.5);
  backdrop-filter: blur(10px);
}

.logo {
  display: flex;
  align-items: center;
}

.logo-link {
  text-decoration: none;
  color: var(--color-text);
  display: flex;
  align-items: center;
}

.logo-text {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #fff;
  position: relative;
  display: inline-block;
  white-space: nowrap;
}

.logo-highlight {
  color: #fff;
}

.nav-list {
  display: flex;
  list-style: none;
}

.nav {
  display: flex;
  align-items: center;
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
  opacity: 0.8;
}

.nav-link:hover::before {
  transform: scaleX(1);
  transform-origin: left;
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

@media (max-width: 992px) {
  .nav-link {
    margin: 0 10px;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 15px 0;
  }
  
  .logo-text {
    font-size: 1.4rem;
  }
  
  .menu-toggle {
    display: flex;
  }

  .menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(10, 10, 20, 0.98);
    backdrop-filter: blur(15px);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    visibility: hidden;
    z-index: 100;
    overflow: hidden;
    transform: translateX(100%);
  }

  .nav.active {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }

  .nav-list {
    flex-direction: column;
    align-items: center;
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
    font-size: 1.5rem;
    margin: 10px 0;
  }
}
</style>
 