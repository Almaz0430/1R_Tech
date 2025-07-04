<template>
  <section id="about" class="section about-section">
    <div class="container">
      <h2 class="section-title">О нас</h2>
      
      <div class="about-container">
        <div class="about-content">
          <p class="about-text">
            <span class="highlight">HexNetGroup</span> — инновационная IT-компания, специализирующаяся на разработке высокотехнологичных решений для бизнеса. Мы создаем программное обеспечение, которое трансформирует индустрии и открывает новые возможности для наших клиентов.
          </p>
          <p class="about-text">
            Наша миссия — использовать передовые технологии для решения сложных бизнес-задач, создавая продукты, которые сочетают в себе инновации, качество и надежность.
          </p>
          
          <div class="stats-container">
            <div class="stat-item">
              <div class="stat-number">2</div>
              <div class="stat-title">Года опыта</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">2</div>
              <div class="stat-title">Активных проекта</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">3</div>
              <div class="stat-title">Разработчиков</div>
            </div>
          </div>
        </div>
        
        <div class="about-visual">
          <div class="hex-grid">
            <div class="hex-row">
              <div class="hex-cell"></div>
              <div class="hex-cell active"></div>
              <div class="hex-cell"></div>
            </div>
            <div class="hex-row">
              <div class="hex-cell active"></div>
              <div class="hex-cell"></div>
              <div class="hex-cell active"></div>
            </div>
            <div class="hex-row">
              <div class="hex-cell"></div>
              <div class="hex-cell active"></div>
              <div class="hex-cell"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="skills-container">
        <h3 class="skills-title">Наши технологии</h3>
        <div class="skills-wrapper">
          <div v-for="(skill, index) in skills" :key="index" class="skill-badge" :style="{ '--delay': `${index * 0.1}s` }">
            {{ skill }}
          </div>
        </div>
      </div>
    </div>
    
    <div class="neon-grid"></div>
    <div class="neon-glow left-glow"></div>
    <div class="neon-glow right-glow"></div>
  </section>
</template>

<script setup>
const skills = [
  'Web Development', 
  'Mobile Apps', 
  'Blockchain', 
  'AI/ML', 
  'IoT', 
  'Cloud Solutions', 
  'Big Data', 
  'DevOps', 
  'UI/UX Design', 
  'Security', 
  'AR/VR'
]

onMounted(() => {
  // Анимация ячеек шестиугольников
  const hexCells = document.querySelectorAll('.hex-cell')
  
  const animateHex = () => {
    hexCells.forEach(cell => {
      if (Math.random() > 0.7) {
        if (cell.classList.contains('active')) {
          cell.classList.remove('active')
        } else {
          cell.classList.add('active')
        }
      }
    })
  }
  
  // Запускаем анимацию с интервалом
  const hexInterval = setInterval(animateHex, 1000)
  
  // Анимация появления при скролле
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  })
  
  // Наблюдаем за элементами
  document.querySelectorAll('.about-text, .stat-item, .skill-badge').forEach(el => {
    observer.observe(el)
  })
  
  onBeforeUnmount(() => {
    clearInterval(hexInterval)
  })
})
</script>

<style scoped>
.about-section {
  position: relative;
  overflow: hidden;
  background-color: rgba(10, 10, 15, 0.9);
}

.about-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 60px;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 25px;
  color: rgba(255, 255, 255, 0.85);
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.about-text.in-view {
  opacity: 1;
  transform: translateY(0);
}

.about-text:nth-child(2) {
  transition-delay: 0.2s;
}

.highlight {
  color: var(--color-neon-blue);
  font-weight: 700;
  position: relative;
  display: inline-block;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--color-neon-blue), transparent);
}

/* Статистика */
.stats-container {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.stat-item {
  text-align: center;
  padding: 0 15px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.stat-item.in-view {
  opacity: 1;
  transform: translateY(0);
}

.stat-item:nth-child(1) {
  transition-delay: 0.3s;
}

.stat-item:nth-child(2) {
  transition-delay: 0.4s;
}

.stat-item:nth-child(3) {
  transition-delay: 0.5s;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  font-family: 'Orbitron', sans-serif;
  color: var(--color-neon-blue);
  text-shadow: var(--glow-blue);
  margin-bottom: 5px;
}

.stat-title {
  font-size: 0.9rem;
  color: var(--color-text);
}

/* Визуальная часть */
.about-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.hex-grid {
  display: flex;
  flex-direction: column;
  position: relative;
}

.hex-row {
  display: flex;
  margin-bottom: -20px;
}

.hex-row:nth-child(even) {
  margin-left: 52px;
}

.hex-cell {
  width: 100px;
  height: 115px;
  margin: 0 5px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background-color: rgba(20, 20, 30, 0.5);
  position: relative;
  transition: all 0.5s ease;
}

.hex-cell::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  border: 1px solid var(--color-neon-blue);
  opacity: 0.4;
  transition: all 0.3s ease;
  pointer-events: none;
}

.hex-cell.active {
  background: linear-gradient(45deg, var(--color-neon-blue), var(--color-neon-blue-dark));
  box-shadow: var(--glow-blue);
}

.hex-cell.active::before {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
  border-color: white;
}

/* Навыки */
.skills-container {
  margin-top: 80px;
  text-align: center;
}

.skills-title {
  font-size: 1.8rem;
  color: var(--color-text);
  margin-bottom: 30px;
}

.skills-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.skill-badge {
  padding: 10px 20px;
  background: rgba(15, 247, 255, 0.1);
  color: var(--color-text);
  border-radius: 4px;
  font-size: 0.9rem;
  border: 1px solid var(--color-neon-blue);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease var(--delay);
}

.skill-badge.in-view {
  opacity: 1;
  transform: translateY(0);
}

.skill-badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(15, 247, 255, 0.2), transparent);
  transition: left 0.8s ease;
}

.skill-badge:hover {
  box-shadow: var(--glow-blue);
}

.skill-badge:hover::before {
  left: 100%;
}

/* Неоновая сетка */
.neon-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 50px 50px;
  background-image: 
    linear-gradient(to right, rgba(15, 247, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(15, 247, 255, 0.05) 1px, transparent 1px);
  z-index: -1;
}

/* Неоновые блики */
.neon-glow {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.5;
  z-index: -1;
  animation: pulse 8s infinite alternate;
}

.left-glow {
  top: 20%;
  left: -150px;
  background-color: var(--color-neon-blue);
}

.right-glow {
  bottom: 10%;
  right: -150px;
  background-color: var(--color-neon-blue-dark);
  animation-delay: 2s;
}

@keyframes pulse {
  0% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.2); }
  100% { opacity: 0.3; transform: scale(1); }
}

@media (max-width: 992px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .about-visual {
    min-height: 300px;
    order: -1;
  }
}

@media (max-width: 768px) {
  .stats-container {
    flex-direction: column;
    gap: 30px;
  }
  
  .stat-item {
    padding: 0;
  }
  
  .hex-cell {
    width: 80px;
    height: 92px;
  }
  
  .hex-row:nth-child(even) {
    margin-left: 42px;
  }
}
</style> 