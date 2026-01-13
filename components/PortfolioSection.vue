<template>
  <section id="portfolio" class="section portfolio-section">
    <div class="container">
      <div class="portfolio-container">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="portfolio-card"
          :class="{ 'visible': project.visible }"
        >
          <div class="portfolio-content-wrapper">
            <div class="portfolio-image">
              <img :src="project.image" :alt="project.title">
            </div>
            <div class="portfolio-content">
              <h3 class="portfolio-title">{{ project.title }}</h3>
              <p class="portfolio-description">{{ project.description }}</p>
              <div class="portfolio-tech">
                <span v-for="(tech, index) in project.technologies" :key="index" class="tech-badge">{{ tech }}</span>
              </div>
              <div v-if="project.link" class="portfolio-actions">
                <a :href="project.link" target="_blank" class="btn btn-small">Перейти на сайт</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Вертикальный текст слева -->
    <div class="vertical-text">
      <span>P</span>
      <span>O</span>
      <span>R</span>
      <span>T</span>
      <span>F</span>
      <span>O</span>
      <span>L</span>
      <span>I</span>
      <span>O</span>
    </div>
  </section>
</template>

<script setup>
const projects = ref([
  {
    id: 1,
    title: 'Valik.kz',
    description: 'Valik.kz — инновационный маркетплейс строительных материалов в Казахстане. Платформа объединяет поставщиков и покупателей, предоставляя удобные инструменты для выбора, заказа и доставки товаров для строительства и ремонта.',
    image: '/images/projects/logo.svg',
    technologies: ['Next.js', 'Nuxt', 'E-commerce'],
    link: 'https://valik.kz',
    category: 'web',
    visible: true
  }
])

const categories = [
  { id: 'all', name: 'Все проекты' },
  { id: 'web', name: 'Веб-разработка' }
]

const activeCategory = ref('all')

// Фильтрация проектов по категории
const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects.value
  } else {
    return projects.value.filter(project => project.category === activeCategory.value)
  }
})

// Хуки жизненного цикла
onMounted(() => {
  // Анимация появления при скролле
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
      }
    })
  }, {
    threshold: 0.1
  })
  
  document.querySelectorAll('.portfolio-card').forEach(card => {
    observer.observe(card)
  })
})
</script>

<style scoped>
.portfolio-section {
  position: relative;
}

.portfolio-container {
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 50px;
}

.portfolio-filter-btn {
  background: transparent;
  border: none;
  color: var(--color-text);
  padding: 8px 20px;
  margin: 0 10px 10px;
  cursor: pointer;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.portfolio-filter-btn::before {
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

.portfolio-filter-btn:hover {
  color: #fff;
}

.portfolio-filter-btn:hover::before,
.portfolio-filter-btn.active::before {
  transform: scaleX(1);
  transform-origin: left;
}

.portfolio-filter-btn.active {
  color: #fff;
}

.portfolio-card {
  background-color: rgba(20, 20, 30, 0.5);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 0;
  transform: translateY(30px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  display: none;
}

.portfolio-card.visible {
  display: block;
}

.portfolio-card.in-view {
  opacity: 1;
  transform: translateY(0);
}

.portfolio-content-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.portfolio-image {
  flex: 0 0 40%;
  height: 350px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.02);
}

.portfolio-image img {
  width: 70%;
  height: 70%;
  object-fit: contain;
  transition: transform 0.5s ease;
  filter: brightness(0.9) contrast(1.1);
}

.portfolio-card:hover .portfolio-image img {
  transform: scale(1.05);
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(10, 10, 15, 0.9), transparent);
  display: flex;
  align-items: flex-end;
  padding: 15px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-card:hover .portfolio-overlay {
  opacity: 1;
}

.portfolio-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-badge {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.portfolio-content {
  flex: 0 0 60%;
  padding: 40px;
}

.portfolio-title {
  color: var(--color-text);
  font-size: 1.8rem;
  margin-bottom: 20px;
  transition: color 0.3s ease;
}

.portfolio-card:hover .portfolio-title {
  color: #fff;
}

.portfolio-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 25px;
}

.portfolio-actions {
  margin-top: 30px;
}

.btn-small {
  padding: 8px 20px;
  font-size: 0.85rem;
  text-decoration: none;
  display: inline-block;
}

/* Вертикальный текст */
.vertical-text {
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
}

.vertical-text span {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.2);
  text-transform: uppercase;
  margin: 2px 0;
  transition: all 0.3s ease;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
  display: block;
  animation: fadeInLetters 1.5s forwards;
  opacity: 0;
}

.vertical-text:hover span {
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  transform: translateX(5px);
}

.vertical-text span:nth-child(1) { animation-delay: 0.1s; }
.vertical-text span:nth-child(2) { animation-delay: 0.2s; }
.vertical-text span:nth-child(3) { animation-delay: 0.3s; }
.vertical-text span:nth-child(4) { animation-delay: 0.4s; }
.vertical-text span:nth-child(5) { animation-delay: 0.5s; }
.vertical-text span:nth-child(6) { animation-delay: 0.6s; }
.vertical-text span:nth-child(7) { animation-delay: 0.7s; }
.vertical-text span:nth-child(8) { animation-delay: 0.8s; }
.vertical-text span:nth-child(9) { animation-delay: 0.9s; }

@keyframes fadeInLetters {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 992px) {
  .portfolio-content-wrapper {
    flex-direction: column;
  }
  
  .portfolio-image {
    flex: 0 0 100%;
    height: 250px;
  }
  
  .portfolio-content {
    flex: 0 0 100%;
    padding: 30px;
  }
}

@media (max-width: 768px) {
  .portfolio-container {
    gap: 40px;
  }
  
  .portfolio-title {
    font-size: 1.5rem;
  }
  
  .vertical-text {
    display: none;
  }
}
</style> 