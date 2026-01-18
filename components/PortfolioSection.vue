<template>
  <section id="portfolio" class="section portfolio-section">
    <div class="container relative-z">
      <div class="portfolio-header">
        <h2 class="section-title">Term_Portfolio</h2>
        <p class="section-subtitle">Архив реализованных проектов и технологических решений.</p>
      </div>

      <div class="repository-container">
        <!-- Декоративные элементы репозитория -->
        <div class="repo-bracket tl"></div>
        <div class="repo-bracket tr"></div>
        <div class="repo-bracket bl"></div>
        <div class="repo-bracket br"></div>
        
        <div class="repo-grid">
          <div 
            v-for="(project, index) in projects" 
            :key="project.id"
            class="data-slab"
            @mouseenter="activeProject = index"
            @mouseleave="activeProject = null"
          >
            <div class="slab-frame">
              <div class="slab-id">BLOCK_0{{ index + 1 }}</div>
              <div class="slab-status">
                <span class="status-dot"></span>
                ACTIVE_RECORD
              </div>
              
              <div class="slab-image-container">
                <div class="scan-line"></div>
                <img :src="project.image" :alt="project.title" class="slab-image">
                <div class="image-overlay"></div>
              </div>

              <div class="slab-content">
                <h3 class="slab-title">{{ project.title }}</h3>
                <p class="slab-desc">{{ project.description }}</p>
                
                <div class="slab-tech-dock">
                  <span v-for="(tech, tIndex) in project.technologies" :key="tIndex" class="tech-chip">
                    {{ tech }}
                  </span>
                </div>

                <div class="slab-actions" v-if="project.link">
                  <a :href="project.link" target="_blank" class="repo-btn">
                    <span class="btn-glitch">DATA_LINK</span>
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>

              <!-- Угловые маркеры внутри карточки -->
              <div class="slab-corner tr"></div>
              <div class="slab-corner bl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Декоративный вертикальный текст -->
    <div class="vertical-text">
      <span>R</span>
      <span>E</span>
      <span>P</span>
      <span>O</span>
      <span>S</span>
      <span>I</span>
      <span>T</span>
      <span>O</span>
      <span>R</span>
      <span>Y</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const activeProject = ref(null)

const projects = [
  {
    id: 1,
    title: 'Valik.kz',
    description: 'Маркетплейс строительных материалов. Платформа объединяет поставщиков и покупателей, облегчая процесс закупки и логистики в сфере строительства.',
    image: '/images/projects/logo.svg',
    technologies: ['Next.js', 'React', 'Django', 'PostgreSQL'],
    link: 'https://valik.kz'
  }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view')
    })
  }, { threshold: 0.1 });

  document.querySelectorAll('.data-slab, .repository-container').forEach(el => {
    observer.observe(el);
  });
})
</script>

<style scoped>
.portfolio-section {
  position: relative;
  background-color: transparent;
  padding: 60px 0 30px;
}

.relative-z {
  position: relative;
  z-index: 5;
}

.portfolio-header {
  margin-bottom: 60px;
  text-align: left;
}

.section-subtitle {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
  margin-top: -20px;
  letter-spacing: 1px;
}

/* Контейнер Репозитория (Теперь просто обертка без фона) */
.repository-container {
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 40px;
}

.repository-container.in-view {
  opacity: 1;
  transform: translateY(0);
}

.repo-bracket {
  display: none; /* Убираем лишние скобки блока */
}

/* Сетка карточек (теперь в колонку для горизонтальных плиток) */
.repo-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* Карточка Data Slab (Горизонтальная) */
.data-slab {
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
}

.data-slab.in-view {
  opacity: 1;
  transform: translateY(0);
}

.slab-frame {
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 30px;
  padding: 0;
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  min-height: 420px;
}

.data-slab:hover .slab-frame {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.02);
}

/* Metadata */
.slab-id {
  position: absolute;
  top: 25px;
  left: 25px;
  z-index: 10;
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: 2px;
  background: rgba(255, 255, 255, 0.05);
  padding: 5px 12px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.slab-status {
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  color: #05ffa1;
  background: rgba(255, 255, 255, 0.05);
  padding: 5px 12px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Image Section */
.slab-image-container {
  flex: 0 0 42%;
  position: relative;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}

.slab-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 50px;
  filter: grayscale(100%) brightness(0.6);
  opacity: 0.8;
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.data-slab:hover .slab-image {
  filter: grayscale(0%) brightness(1);
  transform: scale(1.1);
}

/* Content Section */
.slab-content {
  flex: 1;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.slab-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #fff;
  letter-spacing: 1px;
}

.slab-desc {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.8;
  margin-bottom: 40px;
  max-width: 550px;
}

.slab-tech-dock {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
}

.tech-chip {
  font-family: 'Courier New', monospace;
  font-size: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  padding: 6px 14px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.data-slab:hover .tech-chip {
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
}

.status-dot {
  width: 6px;
  height: 6px;
  background-color: #05ffa1;
  border-radius: 50%;
  box-shadow: 0 0 10px #05ffa1;
  animation: pulseGreen 2s infinite ease-in-out;
}

@keyframes pulseGreen {
  0% { transform: scale(0.8); opacity: 0.5; box-shadow: 0 0 5px #05ffa1; }
  50% { transform: scale(1.2); opacity: 1; box-shadow: 0 0 15px #05ffa1; }
  100% { transform: scale(0.8); opacity: 0.5; box-shadow: 0 0 5px #05ffa1; }
}

/* Кнопка перехода (Data Link) */
.repo-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.85rem;
  color: #fff;
  text-decoration: none;
  letter-spacing: 2px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  padding: 10px 20px;
  border-radius: 8px;
  width: fit-content;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.repo-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #fff;
  transform: translateX(5px);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

.repo-btn i {
  font-size: 0.75rem;
  transition: transform 0.3s ease;
}

.repo-btn:hover i {
  transform: translate(2px, -2px);
}

/* Глитч эффект для текста кнопки */
.btn-glitch {
  position: relative;
  display: inline-block;
}

.repo-btn:hover .btn-glitch {
  animation: glitchText 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  color: #05ffa1;
}

@keyframes glitchText {
  0% { transform: translate(0); text-shadow: 0 0 0 transparent; }
  20% { transform: translate(-2px, 1px); text-shadow: 2px 0 #ff00c1, -2px 0 #00fff9; }
  40% { transform: translate(-2px, -1px); text-shadow: -2px 0 #ff00c1, 2px 0 #00fff9; }
  60% { transform: translate(2px, 1px); text-shadow: 2px 0 #ff00c1, -2px 0 #00fff9; }
  80% { transform: translate(2px, -1px); text-shadow: -2px 0 #ff00c1, 2px 0 #00fff9; }
  100% { transform: translate(0); text-shadow: 0 0 0 transparent; }
}

@media (max-width: 1100px) {
  .slab-frame { flex-direction: column; min-height: auto; }
  .slab-image-container { flex: 0 0 300px; border-right: none; border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
}

@media (max-width: 768px) {
  .slab-content { padding: 30px; }
  .slab-title { font-size: 1.6rem; }
  .slab-image-container { flex: 0 0 250px; }
  .vertical-text { display: none; }
}
</style>