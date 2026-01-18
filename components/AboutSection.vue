<template>
  <section id="about" class="section about-section">
    <div class="container relative-z">
      <div class="about-header">
        <h2 class="section-title">Term_About</h2>
        <p class="section-subtitle">Создаем надежные цифровые продукты и инфраструктурные решения.</p>
      </div>

      <div class="about-island">
        <!-- Технические углы декорации -->
        <div class="island-bracket top-left"></div>
        <div class="island-bracket top-right"></div>
        <div class="island-bracket bottom-left"></div>
        <div class="island-bracket bottom-right"></div>

        <div class="about-grid">
          <div class="about-info-hub">
            <div class="data-tag">CORE_DATA_STREAM</div>
            <p class="about-text">
              <span class="highlight">1R_Tech</span> — инновационная IT-компания, создающая эффективные решения для бизнеса. Мы разрабатываем веб-сервисы, мобильные приложения и сложные корпоративные системы, помогая компаниям расти.
            </p>
            <p class="about-text">
              Мы уделяем особое внимание качеству кода, безопасности и удобству пользователей. Наша цель — создавать долговечные продукты, которые приносят реальную пользу.
            </p>
            
            <div class="stats-row">
              <div class="stat-unit">
                <span class="stat-label">UPTIME:</span>
                <span class="stat-value">99.9%</span>
              </div>
              <div class="stat-unit">
                <span class="stat-label">LATENCY:</span>
                <span class="stat-value">&lt;5ms</span>
              </div>
              <div class="stat-unit">
                <span class="stat-label">NODES:</span>
                <span class="stat-value">64_ACTIVE</span>
              </div>
            </div>
          </div>

          <div class="about-visual-hub">
            <div class="reactor-container">
              <!-- Вращающиеся кольца реактора -->
              <div class="reactor-ring outer"></div>
              <div class="reactor-ring middle"></div>
              
              <div class="core-reactor" 
                   @click="handleCoreClick" 
                   @mousedown="handleMouseDown"
                   @mouseup="handleMouseUp"
                   @mouseleave="handleMouseLeave"
                   :class="{ 'pressed': isButtonPressed }"
                   ref="coreCircle">
                <div class="core-inner">
                  <span class="core-code">1RT</span>
                  <div class="core-glow"></div>
                </div>
                <!-- Пульсирующие волны -->
                <span class="pulse"></span>
                <span class="pulse delay-1"></span>
              </div>

              <div v-if="techVisible" class="tech-orbit-wrapper" ref="techOrbit">
                <div v-for="(tech, index) in orbitTechs" :key="index" 
                     class="tech-node" 
                     :class="{ 'flying': isTechFlying, 'sucking': isButtonPressed }"
                     :style="{ 
                       '--deg': `${index * (360 / orbitTechs.length)}deg`,
                       '--initial-transform': `rotate(${index * (360 / orbitTechs.length)}deg) translateX(var(--orbit-dist, 160px))`,
                       '--random-x': getRandomValue(-300, 300) + 'px',
                       '--random-y': getRandomValue(-300, 300) + 'px',
                       '--random-rotate': getRandomValue(-360, 360) + 'deg',
                       '--random-duration': getRandomValue(5, 8) + 's'
                     }">
                  <div class="node-wrapper" :style="{ transform: `rotate(calc(-${index * (360 / orbitTechs.length)}deg + var(--orbit-rot, 0deg)))` }">
                    <div class="node-content" :class="tech.icon">
                      <span class="node-id">0{{ index + 1 }}</span>
                      <i :class="tech.faIcon" class="node-fa-icon"></i>
                    </div>
                    <span class="node-name">{{ tech.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="diagnostics-grid">
        <div class="diag-module" 
             v-for="(feature, index) in features" 
             :key="index" 
             @mouseover="activeFeature = index" 
             @mouseleave="activeFeature = null"
             :class="{ 'active': activeFeature === index }">
          <div class="module-header">
            <span class="module-id">MOD_0{{ index + 1 }}</span>
            <div class="module-icon">
              <i :class="feature.icon"></i>
            </div>
          </div>
          <h4 class="module-title">{{ feature.title }}</h4>
          <div class="module-body">
            <p class="module-desc">{{ feature.description }}</p>
            <div class="status-bar">
              <div class="bar-fill"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="skills-dock">
        <div class="dock-header">
          <span class="dock-label">TECH_STACK_DOCK</span>
          <div class="dock-line"></div>
        </div>
        <div class="skills-wrapper">
          <div v-for="(skill, index) in skills" :key="index" class="skill-chip" :style="{ '--delay': `${index * 0.1}s` }">
            <span class="chip-code">#{{ index < 9 ? '0' : '' }}{{ index + 1 }}</span>
            <span class="chip-name">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Вертикальный текст слева -->
    <div class="vertical-text">
      <span>S</span>
      <span>Y</span>
      <span>S</span>
      <span>T</span>
      <span>E</span>
      <span>M</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const skills = [
  'Web_Dev', 
  'Mobile_Apps', 
  'Blockchain', 
  'Cloud_Systems', 
  'Big_Data', 
  'DevOps_CI/CD', 
  'UI/UX_Architecture', 
  'Cyber_Security', 
  'AR/VR_Core'
]

const orbitTechs = [
  { name: 'Vue', icon: 'tech-vue', faIcon: 'fab fa-vuejs' },
  { name: 'React', icon: 'tech-react', faIcon: 'fab fa-react' },
  { name: 'Node', icon: 'tech-nodejs', faIcon: 'fab fa-node-js' },
  { name: 'Python', icon: 'tech-python', faIcon: 'fab fa-python' },
  { name: 'AWS', icon: 'tech-aws', faIcon: 'fab fa-aws' },
  { name: 'Flutter', icon: 'tech-flutter', faIcon: 'fas fa-mobile-alt' },
  { name: 'Angular', icon: 'tech-angular', faIcon: 'fab fa-angular' },
  { name: 'Docker', icon: 'tech-docker', faIcon: 'fab fa-docker' }
]

const isTechFlying = ref(false)
const isButtonPressed = ref(false)
const techOrbit = ref(null)
const coreCircle = ref(null)
const techVisible = ref(true)
const activeFeature = ref(null)

const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const handleMouseDown = () => { isButtonPressed.value = true }
const handleMouseUp = () => { isButtonPressed.value = false }
const handleMouseLeave = () => { isButtonPressed.value = false }

const handleCoreClick = () => {
  if (coreCircle.value) {
    coreCircle.value.classList.add('clicked')
    setTimeout(() => coreCircle.value.classList.remove('clicked'), 500)
  }
  isTechFlying.value = true
  setTimeout(() => isTechFlying.value = false, 8000)
}

const features = [
  { 
    title: 'Индивидуальная разработка', 
    description: 'Создаем программное обеспечение, спроектированное под конкретные задачи и потребности вашего бизнеса.',
    icon: 'fas fa-microchip'
  },
  { 
    title: 'Современный стек', 
    description: 'Используем актуальные технологии и проверенные инструменты для создания надежных и быстрых продуктов.',
    icon: 'fas fa-atom'
  },
  { 
    title: 'Гибкие процессы', 
    description: 'Работаем по Agile, обеспечивая прозрачность разработки и регулярные релизы новых функций.',
    icon: 'fas fa-bolt'
  },
  { 
    title: 'Техническая поддержка', 
    description: 'Обеспечиваем стабильную работу ваших систем и оперативно решаем возникающие технические вопросы.',
    icon: 'fas fa-shield-alt'
  }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view')
    })
  }, { threshold: 0.1 });

  document.querySelectorAll('.about-text, .diag-module, .skill-chip, .tech-node, .about-island').forEach(el => {
    observer.observe(el);
  });

  let degree = 0;
  const rotateOrbit = () => {
    if (!isTechFlying.value && techOrbit.value) {
      degree = (degree + 0.05) % 360;
      techOrbit.value.style.transform = `translate(-50%, -50%) rotate(${degree}deg)`;
      techOrbit.value.style.setProperty('--orbit-rot', `-${degree}deg`);
    }
  };
  const orbitInterval = setInterval(rotateOrbit, 30);
  onBeforeUnmount(() => clearInterval(orbitInterval));
});
</script>

<style scoped>
.about-section {
  position: relative;
  background-color: transparent;
  padding: 120px 0 50px;
}

.relative-z {
  position: relative;
  z-index: 5;
}

.about-header {
  margin-bottom: 60px;
}

.section-subtitle {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
  margin-top: -20px;
  letter-spacing: 1px;
}

/* Остров About */
.about-island {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 40px;
  padding: 60px;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
  margin-bottom: 60px;
}

.about-island.in-view {
  opacity: 1;
  transform: translateY(0);
}

.island-bracket {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 2px solid transparent;
}

.island-bracket.top-left { top: 30px; left: 30px; border-top-color: rgba(255, 255, 255, 0.2); border-left-color: rgba(255, 255, 255, 0.2); }
.island-bracket.top-right { top: 30px; right: 30px; border-top-color: rgba(255, 255, 255, 0.2); border-right-color: rgba(255, 255, 255, 0.2); }
.island-bracket.bottom-left { bottom: 30px; left: 30px; border-bottom-color: rgba(255, 255, 255, 0.2); border-left-color: rgba(255, 255, 255, 0.2); }
.island-bracket.bottom-right { bottom: 30px; right: 30px; border-bottom-color: rgba(255, 255, 255, 0.2); border-right-color: rgba(255, 255, 255, 0.2); }

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: center;
}

.data-tag {
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: 4px;
  margin-bottom: 30px;
}

.about-text {
  font-size: 1.15rem;
  line-height: 1.8;
  margin-bottom: 25px;
  color: rgba(255, 255, 255, 0.8);
}

.highlight {
  color: #fff;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

/* Статистика */
.stats-row {
  display: flex;
  gap: 40px;
  margin-top: 40px;
}

.stat-unit {
  display: flex;
  flex-direction: column;
}

.stat-label {
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: 5px;
}

.stat-value {
  font-family: 'Orbitron', sans-serif;
  color: #fff;
  font-size: 1.2rem;
  letter-spacing: 1px;
}

/* Реактор */
.about-visual-hub {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 450px;
  position: relative;
}

.reactor-container {
  position: relative;
  width: 320px;
  height: 320px;
}

.reactor-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px dashed rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.reactor-ring.outer { width: 450px; height: 450px; animation: rotateRing 60s linear infinite; }
.reactor-ring.middle { width: 330px; height: 330px; animation: rotateRing 40s linear infinite reverse; }

@keyframes rotateRing {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.core-reactor {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  z-index: 10;
  cursor: pointer;
}

.core-inner {
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 20, 0.9);
  border: 2px solid #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.core-code {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  z-index: 2;
}

.core-glow {
  position: absolute;
  width: 150%;
  height: 150%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  animation: corePulse 4s infinite;
}

@keyframes corePulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 0.8; }
}

/* Орбитальные узлы */
.tech-orbit-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.tech-node {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -35px;
  margin-left: -35px;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: var(--initial-transform);
  transition: all 0.4s ease;
  pointer-events: auto;
}

.node-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.node-content {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;
}

.node-id {
  font-family: 'Courier New', monospace;
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.6);
  position: absolute;
  top: -8px;
  right: -8px;
  background: #000;
  padding: 2px 4px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 5;
}

.node-name {
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  color: #fff;
  margin-top: 8px;
  opacity: 0;
  transform: translateY(5px);
  transition: all 0.3s ease;
}

.tech-node:hover .node-name { opacity: 1; transform: translateY(0); }
.tech-node:hover .node-content { 
  background: #fff;
  color: #000;
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
}

/* Диагностические модули */
.diagnostics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-bottom: 80px;
}

.diag-module {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  transition: all 0.4s ease;
  cursor: crosshair;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.diag-module:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-8px);
}

.module-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.module-id {
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: 2px;
}

.module-icon i {
  font-size: 1.2rem;
  color: #fff;
}

.module-title {
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

.module-desc {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6;
}

.module-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
}

.status-bar {
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.05);
  margin-top: auto;
  border-radius: 1px;
  overflow: hidden;
}

.bar-fill {
  width: 0%;
  height: 100%;
  background: #fff;
  transition: width 0.6s ease;
}

.diag-module:hover .bar-fill {
  width: 100%;
}

/* Стек технологий Dock */
.skills-dock {
  background: rgba(255, 255, 255, 0.01);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 50px 0;
  margin-top: 40px;
}

.dock-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
}

.dock-label {
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  color: #fff;
  letter-spacing: 2px;
  white-space: nowrap;
  background: rgba(255, 255, 255, 0.05);
  padding: 6px 12px;
  border-left: 2px solid #fff;
  text-transform: uppercase;
}

.dock-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.2), transparent);
}

.skills-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: flex-start;
}

.skill-chip {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  padding: 10px 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;
  opacity: 0;
  transform: translateY(10px);
}

.skill-chip.in-view {
  opacity: 1;
  transform: translateY(0);
  transition-delay: var(--delay);
}

.skill-chip:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.chip-code {
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.4);
  font-weight: bold;
}

.chip-name {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.5px;
  font-weight: 500;
}

/* Полет и всасывание */
.tech-node.flying { animation: flyAway var(--random-duration) forwards; }
.tech-node.sucking { animation: suckIn 3s ease-in-out forwards !important; }

@keyframes flyAway {
  0% { transform: var(--initial-transform); opacity: 1; }
  100% { opacity: 0; transform: translate(var(--random-x), var(--random-y)) rotate(var(--random-rotate)); }
}

@keyframes suckIn {
  0% { transform: var(--initial-transform); opacity: 1; scale: 1; }
  100% { transform: translate(-35px, -35px) scale(0.1); opacity: 0; }
}

/* Пульс а-ля реактор */
.pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: reactorPulse 3s infinite;
}

@keyframes reactorPulse {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
}

/* Вертикальный текст */
.vertical-text {
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  z-index: 5;
}

.vertical-text span {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.1);
  text-transform: uppercase;
  margin: 5px 0;
}

/* Адаптив */
@media (max-width: 1100px) {
  .about-grid { grid-template-columns: 1fr; }
  .about-visual-hub { order: -1; min-height: 350px; }
  .diagnostics-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .about-section { padding: 60px 0 30px; }
  .about-island { padding: 25px 20px; margin: 0 0 30px; border-radius: 20px; }
  .about-header { margin-bottom: 30px; }
  .data-tag { font-size: 0.65rem; letter-spacing: 2px; margin-bottom: 20px; }
  .about-text { font-size: 0.95rem; line-height: 1.7; margin-bottom: 15px; }
  .stats-row { flex-wrap: wrap; gap: 15px; margin-top: 25px; }
  .stat-label { font-size: 0.6rem; }
  .stat-value { font-size: 1rem; }
  .diagnostics-grid { grid-template-columns: 1fr; gap: 15px; margin-bottom: 40px; }
  .diag-module { padding: 20px; border-radius: 15px; }
  .module-title { font-size: 1rem; }
  .vertical-text { display: none; }
  .reactor-container { transform: scale(0.7); }
  .about-visual-hub { min-height: 280px; }
  .skills-dock { padding: 30px 0; }
  .skill-chip { padding: 8px 14px; }
  .chip-name { font-size: 0.8rem; }
}

/* Стили иконок технологий - теперь только акценты */
.tech-vue { border-color: rgba(66, 184, 131, 0.4); box-shadow: 0 0 15px rgba(66, 184, 131, 0.1); }
.tech-react { border-color: rgba(97, 218, 251, 0.4); box-shadow: 0 0 15px rgba(97, 218, 251, 0.1); }
.tech-nodejs { border-color: rgba(104, 160, 99, 0.4); box-shadow: 0 0 15px rgba(104, 160, 99, 0.1); }
.tech-python { border-color: rgba(55, 118, 171, 0.4); box-shadow: 0 0 15px rgba(55, 118, 171, 0.1); }
.tech-aws { border-color: rgba(255, 153, 0, 0.4); box-shadow: 0 0 15px rgba(255, 153, 0, 0.1); }
.tech-flutter { border-color: rgba(2, 86, 155, 0.4); box-shadow: 0 0 15px rgba(2, 86, 155, 0.1); }
.tech-angular { border-color: rgba(221, 0, 49, 0.4); box-shadow: 0 0 15px rgba(221, 0, 49, 0.1); }
.tech-docker { border-color: rgba(36, 150, 237, 0.4); box-shadow: 0 0 15px rgba(36, 150, 237, 0.1); }

.node-fa-icon {
  font-size: 1.4rem;
  color: #fff;
  transition: all 0.3s ease;
}

.tech-node:hover .node-fa-icon {
  color: #000;
}
</style>
 