<template>
  <section id="about" class="section about-section">
    <div class="container">
      <div class="about-container">
        <div class="about-content">
          <p class="about-text">
            <span class="highlight">1R_Tech</span> — инновационная IT-компания, специализирующаяся на разработке высокотехнологичных решений для бизнеса. Мы создаем программное обеспечение, которое трансформирует индустрии и открывает новые возможности для наших клиентов.
          </p>
          <p class="about-text">
            Наша миссия — использовать передовые технологии для решения сложных бизнес-задач, создавая продукты, которые сочетают в себе инновации, качество и надежность.
          </p>
        </div>
        
        <div class="about-visual">
          <div class="core-circle" 
               @click="handleCoreClick" 
               @mousedown="handleMouseDown"
               @mouseup="handleMouseUp"
               @mouseleave="handleMouseLeave"
               :class="{ 'pressed': isButtonPressed }"
               ref="coreCircle">
            <span class="pulse"></span>
            <span class="pulse delay-1"></span>
            <span class="pulse delay-2"></span>
            1RT
          </div>
          <div v-if="techVisible" class="tech-orbit" ref="techOrbit">
            <div v-for="(tech, index) in orbitTechs" :key="index" 
                 class="tech-item" 
                 :class="{ 'flying': isTechFlying, 'sucking': isButtonPressed }"
                 :style="{ 
                   '--initial-transform': `rotate(${index * (360 / orbitTechs.length)}deg) translateX(150px)`,
                   '--random-x': getRandomValue(-300, 300) + 'px',
                   '--random-y': getRandomValue(-300, 300) + 'px',
                   '--random-rotate': getRandomValue(-360, 360) + 'deg',
                   '--random-duration': getRandomValue(5, 8) + 's'
                 }">
              <div class="tech-icon" :class="tech.icon"></div>
              <span class="tech-name">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="interactive-features">
        <div class="feature-card" 
             v-for="(feature, index) in features" 
             :key="index" 
             @mouseover="activeFeature = index" 
             @mouseleave="activeFeature = null"
             :class="{ 'active': activeFeature === index }">
          <div class="feature-icon">
            <i :class="feature.icon"></i>
          </div>
          <h4 class="feature-title">{{ feature.title }}</h4>
          <p class="feature-desc">{{ feature.description }}</p>
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
    
    <!-- Вертикальный текст слева -->
    <div class="vertical-text">
      <span>A</span>
      <span>B</span>
      <span>O</span>
      <span>U</span>
      <span>T</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, reactive, nextTick } from 'vue'

const skills = [
  'Веб-разработка', 
  'Мобильные приложения', 
  'Блокчейн', 
  'Облачные решения', 
  'Большие данные', 
  'DevOps', 
  'UI/UX Дизайн', 
  'Кибербезопасность', 
  'AR/VR'
]

const orbitTechs = [
  { name: 'Vue', icon: 'tech-vue' },
  { name: 'React', icon: 'tech-react' },
  { name: 'Node', icon: 'tech-node' },
  { name: 'Python', icon: 'tech-python' },
  { name: 'AWS', icon: 'tech-aws' },
  { name: 'Flutter', icon: 'tech-flutter' },
  { name: 'Angular', icon: 'tech-angular' },
  { name: 'Docker', icon: 'tech-docker' }
]

// Состояние для отслеживания полета технологий
const isTechFlying = ref(false)
const isButtonPressed = ref(false)
const techOrbit = ref(null)
const coreCircle = ref(null)
const techVisible = ref(true) // Всегда показываем технологии

// Функция для генерации случайного значения в заданном диапазоне
const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Функции для обработки нажатия кнопки
const handleMouseDown = () => {
  isButtonPressed.value = true
  coreCircle.value.classList.add('pressed')
}

const handleMouseUp = () => {
  isButtonPressed.value = false
  coreCircle.value.classList.remove('pressed')
}

const handleMouseLeave = () => {
  isButtonPressed.value = false
  coreCircle.value.classList.remove('pressed')
}

// Функция для обработки клика по центральному кругу
const handleCoreClick = () => {
  // Анимация при клике
  coreCircle.value.classList.add('clicked')
  
  // Удаляем класс через некоторое время
  setTimeout(() => {
    coreCircle.value.classList.remove('clicked')
  }, 500)
  
  // Запускаем полет орбитальных элементов
  isTechFlying.value = true
  
  // Через некоторое время возвращаем технологии на орбиту
  setTimeout(() => {
    isTechFlying.value = false
  }, 8000) // 8 секунд полета
}

const features = [
  { 
    title: 'Индивидуальный подход', 
    description: 'Каждый проект уникален. Мы разрабатываем решения с учетом ваших специфических требований и бизнес-целей.',
    icon: 'fas fa-fingerprint'
  },
  { 
    title: 'Передовые технологии', 
    description: 'Используем современные фреймворки и инструменты для создания инновационных и эффективных решений.',
    icon: 'fas fa-rocket'
  },
  { 
    title: 'Быстрая разработка', 
    description: 'Применяем методологии Agile и DevOps для ускорения процесса разработки без потери качества.',
    icon: 'fas fa-bolt'
  },
  { 
    title: 'Поддержка 24/7', 
    description: 'Наша команда всегда на связи для решения любых вопросов и обеспечения бесперебойной работы систем.',
    icon: 'fas fa-headset'
  }
]

const activeFeature = ref(null)

onMounted(() => {
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
  document.querySelectorAll('.about-text, .feature-card, .skill-badge, .tech-item').forEach(el => {
    observer.observe(el)
  })
  
  // Анимация технологий в орбите
  let degree = 0
  
  const rotateOrbit = () => {
    if (!isTechFlying.value && techOrbit.value) {
      degree = (degree + 0.05) % 360
      techOrbit.value.style.transform = `rotate(${degree}deg)`
    }
  }
  
  const orbitInterval = setInterval(rotateOrbit, 30)
  
  onBeforeUnmount(() => {
    clearInterval(orbitInterval)
  })
})
</script>

<style scoped>
.about-section {
  position: relative;
  overflow: hidden;
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
  color: #fff;
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
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
}

/* Визуальная часть */
.about-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Орбита с технологиями */
.tech-orbit {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.tech-orbit.hidden {
  opacity: 0;
  pointer-events: none;
}

.tech-item {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  margin-top: -40px;
  margin-left: -40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  transform: var(--initial-transform);
  opacity: 1;
  cursor: pointer;
}

.tech-item.flying {
  animation: flyAway var(--random-duration) forwards;
  z-index: 10;
}

.tech-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.8rem;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.tech-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  transition: all 0.3s ease;
}

.tech-name {
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 8px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.3);
  padding: 4px 8px;
  border-radius: 6px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tech-item:hover .tech-name {
  opacity: 1;
  transform: translateY(0);
}

.tech-item:hover .tech-icon {
  transform: scale(1.15) translateY(-2px);
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    0 0 20px rgba(255, 255, 255, 0.1);
}

.tech-item:hover .tech-icon::before {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
}

/* Стили для иконок технологий */
.tech-vue { 
  background: linear-gradient(135deg, #42b883, #369870);
}
.tech-react { 
  background: linear-gradient(135deg, #61dafb, #21a9c7);
}
.tech-node { 
  background: linear-gradient(135deg, #68a063, #4d7c47);
}
.tech-python { 
  background: linear-gradient(135deg, #3776ab, #2d5d8a);
}
.tech-aws { 
  background: linear-gradient(135deg, #ff9900, #cc7700);
}
.tech-flutter { 
  background: linear-gradient(135deg, #02569b, #014578);
}
.tech-angular { 
  background: linear-gradient(135deg, #dd0031, #b30028);
}
.tech-docker { 
  background: linear-gradient(135deg, #2496ed, #1976d2);
}

.tech-vue::after { content: 'Vue'; }
.tech-react::after { content: 'React'; }
.tech-node::after { content: 'Node'; }
.tech-python::after { content: 'Py'; }
.tech-aws::after { content: 'AWS'; }
.tech-flutter::after { content: 'Fltr'; }
.tech-angular::after { content: 'Ang'; }
.tech-docker::after { content: 'Dkr'; }

.tech-icon::after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 0.8rem;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  z-index: 2;
}

/* Центральный круг */
.core-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--color-text);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  z-index: 2;
  cursor: pointer;
  transition: all 0.3s ease;
}

.core-circle:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%) scale(1.05);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.core-circle.clicked {
  transform: translate(-50%, -50%) scale(0.95);
  background: rgba(255, 255, 255, 0.3);
}

.core-circle.pressed {
  transform: translate(-50%, -50%) scale(1.2);
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
}

.tech-item.sucking {
  animation: suckIn 3s ease-in-out forwards !important;
}

/* Пульсирующие круги */
.pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  animation: pulse 3s infinite;
}

.delay-1 {
  animation-delay: 1s;
}

.delay-2 {
  animation-delay: 2s;
}

/* Интерактивные функции */
.interactive-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 60px 0;
  align-items: start;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 25px 20px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.feature-card.active {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  transition: all 0.3s ease;
}

.feature-icon i {
  font-size: 1.5rem;
  color: var(--color-text);
  transition: all 0.3s ease;
}

.feature-card.active .feature-icon {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.feature-card.active .feature-icon i {
  color: #fff;
}

.feature-title {
  font-size: 1.1rem;
  color: var(--color-text);
  margin-bottom: 10px;
  white-space: nowrap;
}

.feature-desc {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-top: 0;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out, opacity 0.4s ease-in-out, margin-top 0.4s ease-in-out;
}

.feature-card.active .feature-desc {
  max-height: 150px;
  opacity: 1;
  margin-top: 15px;
}

/* Анимации */
@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.6;
  }
  70% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
  }
}

@keyframes fadeInTech {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

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
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text);
  border-radius: 4px;
  font-size: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
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
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.8s ease;
}

.skill-badge:hover {
  background: rgba(255, 255, 255, 0.2);
}

.skill-badge:hover::before {
  left: 100%;
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

@keyframes returnToOrbit {
  from {
    transform: translate(0, 0) scale(0);
    opacity: 0;
  }
  to {
    transform: var(--initial-transform);
    opacity: 1;
  }
}

@keyframes flyAway {
  0% {
    transform: var(--initial-transform);
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(var(--random-x), var(--random-y)) rotate(var(--random-rotate));
  }
}

@keyframes suckIn {
  0% {
    transform: var(--initial-transform);
    opacity: 1;
    scale: 1;
  }
  50% {
    transform: translate(-75px, -75px) rotate(180deg);
    opacity: 0.8;
    scale: 0.8;
  }
  100% {
    transform: translate(-75px, -75px) rotate(360deg);
    opacity: 0;
    scale: 0.2;
  }
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
  
  .interactive-features {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .interactive-features {
    grid-template-columns: 1fr;
  }
  
  .vertical-text {
    display: none;
  }
}
</style> 