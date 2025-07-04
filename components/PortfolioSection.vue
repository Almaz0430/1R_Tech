<template>
  <section id="portfolio" class="section portfolio-section">
    <div class="container">
      <h2 class="section-title">Портфолио</h2>
      
      <div class="portfolio-controls">
        <button 
          v-for="category in categories" 
          :key="category.id"
          class="portfolio-filter-btn"
          :class="{ active: activeCategory === category.id }"
          @click="filterProjects(category.id)"
        >
          {{ category.name }}
        </button>
      </div>
      
      <div class="portfolio-container">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="portfolio-card"
          :class="{ 'visible': project.visible }"
        >
          <div class="portfolio-image">
            <img :src="project.image" :alt="project.title">
            <div class="portfolio-overlay">
              <div class="portfolio-tech">
                <span v-for="(tech, index) in project.technologies" :key="index" class="tech-badge">{{ tech }}</span>
              </div>
            </div>
          </div>
          <div class="portfolio-content">
            <h3 class="portfolio-title">{{ project.title }}</h3>
            <p class="portfolio-description">{{ project.description }}</p>
            <a :href="project.link" class="portfolio-link">Подробнее <i class="arrow-icon"></i></a>
          </div>
        </div>
      </div>
      
      <div class="portfolio-nav">
        <button class="portfolio-nav-btn prev" @click="prevSlide">
          <span class="arrow-left"></span>
        </button>
        <div class="portfolio-pagination">
          <span 
            v-for="(dot, index) in Math.ceil(filteredProjects.length / projectsPerSlide)" 
            :key="index"
            class="pagination-dot"
            :class="{ active: currentSlide === index }"
            @click="goToSlide(index)"
          ></span>
        </div>
        <button class="portfolio-nav-btn next" @click="nextSlide">
          <span class="arrow-right"></span>
        </button>
      </div>
    </div>
    
    <div class="neon-corner top-left"></div>
    <div class="neon-corner top-right"></div>
    <div class="neon-corner bottom-left"></div>
    <div class="neon-corner bottom-right"></div>
  </section>
</template>

<script setup>
const projects = ref([
  {
    id: 1,
    title: 'ProjectManager',
    description: 'ProjectManager — это комплексная платформа для управления проектами, которая объединяет инструменты для коммуникации, планирования и финансового учета в рамках проектной деятельности.',
    image: '/images/projects/pm-icon.png',
    technologies: ['Vue', 'Django', 'PostgreSQL'],
    category: 'web',
    link: '#',
    visible: true
  }
])

const categories = [
  { id: 'all', name: 'Все проекты' },
  { id: 'web', name: 'Веб-разработка' }
]

const activeCategory = ref('all')
const currentSlide = ref(0)
const projectsPerSlide = 3
let autoplayInterval = null

// Фильтрация проектов по категории
const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects.value
  } else {
    return projects.value.filter(project => project.category === activeCategory.value)
  }
})

// Функция для фильтрации проектов
const filterProjects = (categoryId) => {
  activeCategory.value = categoryId
  currentSlide.value = 0
  updateVisibleProjects()
}

// Обновление видимых проектов в зависимости от текущего слайда
const updateVisibleProjects = () => {
  const startIdx = currentSlide.value * projectsPerSlide
  const endIdx = startIdx + projectsPerSlide
  
  projects.value.forEach((project, idx) => {
    if (activeCategory.value === 'all' || project.category === activeCategory.value) {
      const filteredIdx = filteredProjects.value.indexOf(project)
      project.visible = filteredIdx >= startIdx && filteredIdx < endIdx
    } else {
      project.visible = false
    }
  })
}

// Навигация по слайдам
const nextSlide = () => {
  if (currentSlide.value < Math.ceil(filteredProjects.value.length / projectsPerSlide) - 1) {
    currentSlide.value++
  } else {
    currentSlide.value = 0
  }
  updateVisibleProjects()
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else {
    currentSlide.value = Math.ceil(filteredProjects.value.length / projectsPerSlide) - 1
  }
  updateVisibleProjects()
}

const goToSlide = (index) => {
  currentSlide.value = index
  updateVisibleProjects()
}

// Запуск автовоспроизведения
const startAutoplay = () => {
  stopAutoplay()
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
}

// Хуки жизненного цикла
onMounted(() => {
  updateVisibleProjects()
  startAutoplay()
  
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

onBeforeUnmount(() => {
  stopAutoplay()
})

// Остановка автовоспроизведения при взаимодействии с пользователем
const container = ref(null)
onMounted(() => {
  container.value = document.querySelector('.portfolio-container')
  
  if (container.value) {
    container.value.addEventListener('mouseenter', stopAutoplay)
    container.value.addEventListener('mouseleave', startAutoplay)
    
    onBeforeUnmount(() => {
      container.value.removeEventListener('mouseenter', stopAutoplay)
      container.value.removeEventListener('mouseleave', startAutoplay)
    })
  }
})
</script>

<style scoped>
.portfolio-section {
  background-color: rgba(10, 10, 15, 0.95);
  position: relative;
}

.portfolio-controls {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
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
  height: 2px;
  background-color: var(--color-neon-blue);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.portfolio-filter-btn:hover {
  color: var(--color-neon-blue);
}

.portfolio-filter-btn:hover::before,
.portfolio-filter-btn.active::before {
  transform: scaleX(1);
  transform-origin: left;
}

.portfolio-filter-btn.active {
  color: var(--color-neon-blue);
  text-shadow: var(--glow-blue);
}

.portfolio-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.portfolio-card {
  background-color: rgba(20, 20, 30, 0.5);
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 0;
  transform: translateY(30px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid transparent;
  position: relative;
  display: none;
}

.portfolio-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 5px;
  padding: 1px;
  background: linear-gradient(45deg, var(--color-neon-blue), var(--color-neon-blue-dark));
  -webkit-mask: 
     linear-gradient(#fff 0 0) content-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-card:hover::before {
  opacity: 1;
  box-shadow: var(--glow-blue);
}

.portfolio-card.visible {
  display: block;
}

.portfolio-card.in-view {
  opacity: 1;
  transform: translateY(0);
}

.portfolio-image {
  height: 200px;
  position: relative;
  overflow: hidden;
}

.portfolio-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
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
  gap: 8px;
}

.tech-badge {
  background: rgba(15, 247, 255, 0.2);
  color: var(--color-text);
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 0.7rem;
  border: 1px solid var(--color-neon-blue);
  box-shadow: var(--glow-blue);
}

.portfolio-content {
  padding: 20px;
}

.portfolio-title {
  color: var(--color-text);
  font-size: 1.2rem;
  margin-bottom: 10px;
  transition: color 0.3s ease;
}

.portfolio-card:hover .portfolio-title {
  color: var(--color-neon-blue);
  text-shadow: var(--glow-blue);
}

.portfolio-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.portfolio-link {
  color: var(--color-neon-blue);
  text-decoration: none;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
}

.portfolio-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--color-neon-blue);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.portfolio-link:hover {
  text-shadow: var(--glow-blue);
}

.portfolio-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.arrow-icon {
  display: inline-block;
  width: 15px;
  height: 2px;
  background-color: var(--color-neon-blue);
  margin-left: 8px;
  position: relative;
  transition: transform 0.3s ease;
}

.arrow-icon::before,
.arrow-icon::after {
  content: '';
  position: absolute;
  right: 0;
  width: 8px;
  height: 2px;
  background-color: var(--color-neon-blue);
}

.arrow-icon::before {
  transform: rotate(45deg);
  top: -3px;
}

.arrow-icon::after {
  transform: rotate(-45deg);
  top: 3px;
}

.portfolio-link:hover .arrow-icon {
  transform: translateX(5px);
}

/* Навигация по слайдам */
.portfolio-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.portfolio-nav-btn {
  background: transparent;
  border: 1px solid var(--color-neon-blue);
  color: var(--color-text);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  margin: 0 15px;
}

.portfolio-nav-btn:hover {
  background: rgba(15, 247, 255, 0.1);
  box-shadow: 0 0 15px var(--color-neon-blue);
}

.arrow-left,
.arrow-right {
  display: block;
  width: 12px;
  height: 12px;
  border-top: 2px solid var(--color-neon-blue);
  border-left: 2px solid var(--color-neon-blue);
}

.arrow-left {
  transform: rotate(-45deg);
}

.arrow-right {
  transform: rotate(135deg);
}

.portfolio-pagination {
  display: flex;
  gap: 8px;
}

.pagination-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination-dot.active {
  background-color: var(--color-neon-blue);
  box-shadow: var(--glow-blue);
}

.pagination-dot:hover {
  background-color: rgba(15, 247, 255, 0.5);
}

/* Неоновые уголки */
.neon-corner {
  position: absolute;
  width: 50px;
  height: 50px;
  pointer-events: none;
}

.neon-corner::before,
.neon-corner::after {
  content: '';
  position: absolute;
  background-color: var(--color-neon-blue);
  box-shadow: var(--glow-blue);
}

.top-left {
  top: 30px;
  left: 30px;
}

.top-left::before {
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
}

.top-left::after {
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
}

.top-right {
  top: 30px;
  right: 30px;
}

.top-right::before {
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
}

.top-right::after {
  top: 0;
  right: 0;
  width: 100%;
  height: 2px;
}

.bottom-left {
  bottom: 30px;
  left: 30px;
}

.bottom-left::before {
  bottom: 0;
  left: 0;
  width: 2px;
  height: 100%;
}

.bottom-left::after {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
}

.bottom-right {
  bottom: 30px;
  right: 30px;
}

.bottom-right::before {
  bottom: 0;
  right: 0;
  width: 2px;
  height: 100%;
}

.bottom-right::after {
  bottom: 0;
  right: 0;
  width: 100%;
  height: 2px;
}

@media (max-width: 768px) {
  .portfolio-container {
    grid-template-columns: 1fr;
  }
  
  .portfolio-controls {
    flex-direction: column;
    align-items: center;
  }
  
  .portfolio-filter-btn {
    margin: 5px;
  }
}
</style> 