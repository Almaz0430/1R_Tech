<template>
  <header class="header" ref="header">
    <div class="container header-container">
      <div class="logo">
        <NuxtLink to="/" class="logo-link">
          <span class="logo-text">Hex<span class="logo-highlight">Net</span>Group</span>
        </NuxtLink>
      </div>
      
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
        <button class="btn contact-btn">Связаться</button>
      </nav>
    </div>
    <div class="header-glow"></div>
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
  background-color: rgba(10, 10, 15, 0.1);
  backdrop-filter: blur(10px);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header.scrolled {
  background-color: rgba(10, 10, 15, 0.8);
  padding: 15px 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

.logo-link {
  text-decoration: none;
  color: var(--color-text);
}

.logo-text {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  background-image: linear-gradient(90deg, var(--color-text) 0%, var(--color-neon-blue) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  display: inline-block;
}

.logo-highlight {
  color: var(--color-neon-blue-dark);
  text-shadow: var(--glow-blue-dark);
}

.logo-text::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--color-neon-blue), transparent);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s ease;
}

.logo-link:hover .logo-text::after {
  transform: scaleX(1);
  transform-origin: left;
}

.nav-list {
  display: flex;
  list-style: none;
  margin-right: 30px;
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
  height: 2px;
  background-color: var(--color-neon-blue);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
  box-shadow: var(--glow-blue);
}

.nav-link:hover {
  color: var(--color-neon-blue);
  text-shadow: var(--glow-blue);
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
  background-color: var(--color-neon-blue);
  transition: all 0.3s ease;
  box-shadow: var(--glow-blue);
}

.header-glow {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-neon-blue), var(--color-neon-blue-dark), var(--color-neon-blue), transparent);
  box-shadow: var(--glow-blue);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
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

  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(10, 10, 15, 0.95);
    backdrop-filter: blur(10px);
    transition: right 0.5s ease;
    border-left: 1px solid var(--color-neon-blue);
    box-shadow: -5px 0 20px rgba(15, 247, 255, 0.2);
  }

  .nav.active {
    right: 0;
  }

  .nav-list {
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    margin-bottom: 30px;
  }

  .nav-list li {
    margin: 15px 0;
  }

  .nav-link {
    font-size: 1.2rem;
  }
}
</style> 