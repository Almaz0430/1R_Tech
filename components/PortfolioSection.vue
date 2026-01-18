<template>
  <section id="portfolio" class="section portfolio-section">
    <div class="container relative-z">
      
      <!-- Console Interface Wrapper -->
      <div class="console-interface">
        
        <!-- Console Header -->
        <div class="console-header">
          <div class="header-left">
            <i class="fas fa-terminal"></i>
            <span class="console-title">TERM_PORTFOLIO // SYSTEM_LOGS</span>
          </div>
          <div class="header-right">
            <span class="connection-status">
              <span class="status-dot"></span> LIVE_CONNECTION
            </span>
            <div class="window-controls">
              <span>_</span>
              <span>□</span>
              <span>×</span>
            </div>
          </div>
        </div>

        <!-- Console Body (Grid Background) -->
        <div class="console-body">
          <div class="grid-overlay"></div>
          
          <div class="portfolio-intro">
            <h2 class="section-title">PROJECT_ARCHIVE</h2>
            <p class="section-subtitle">Архив реализованных проектов и технологических решений.</p>
          </div>

          <div class="modules-grid">
            <div 
              v-for="(project, index) in projects" 
              :key="project.id"
              class="holo-module"
              :class="{ 'active': activeProject === index }"
              @mouseenter="activeProject = index"
              @mouseleave="activeProject = null"
            >
              <!-- Module Border Frame -->
              <div class="module-frame">
                <div class="corner-accents">
                  <div class="c-accent tl"></div>
                  <div class="c-accent tr"></div>
                  <div class="c-accent bl"></div>
                  <div class="c-accent br"></div>
                </div>
                
                <div class="file-id">FILE_0{{ index + 1 }}</div>

                <div class="module-layout">
                  <!-- Project Data Area -->
                  <div class="module-data">
                    <div class="data-header">
                      <div class="project-status">
                        <i class="fas fa-check-circle"></i>
                        <span>DEPLOYED</span>
                      </div>
                      <div class="project-date">2024.12.20</div>
                    </div>

                    <div class="project-main-info">
                      <div class="project-logo-wrapper">
                        <img :src="project.image" :alt="project.title" class="project-mini-logo">
                      </div>
                      <h3 class="module-title">{{ project.title }}</h3>
                    </div>

                    <p class="module-desc">{{ project.description }}</p>

                    <div class="tech-stack-line">
                      <span class="stack-label">STACK:</span>
                      <div class="stack-list">
                        <span v-for="(tech, tIndex) in project.technologies" :key="tIndex" class="tech-item">
                          {{ tech }}
                        </span>
                      </div>
                    </div>

                    <div class="module-actions" v-if="project.link">
                      <a :href="project.link" target="_blank" class="repo-btn">
                        <span class="btn-glitch">DATA_LINK</span>
                        <i class="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        <!-- Console Footer -->
        <div class="console-footer">
          <div class="sys-message">
            <span class="blink">></span> WAITING_FOR_INPUT...
          </div>
          <div class="memory-usage">
            MEM: 64% // CPU: 32%
          </div>
        </div>
      </div>

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
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
      }
    })
  }, { threshold: 0.1 })
  
  const elements = document.querySelectorAll('.holo-module, .console-interface')
  elements.forEach(el => observer.observe(el))
})
</script>

<style scoped>
.portfolio-section {
  padding: 80px 0;
  background-color: transparent;
  perspective: 1000px;
}

.relative-z {
  position: relative;
  z-index: 5;
}

/* Console Wrapper */
.console-interface {
  background: rgba(10, 10, 15, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  transform: rotateX(2deg);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.console-interface.in-view {
  transform: rotateX(0);
  opacity: 1;
}

/* Header */
.console-header {
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

.header-left i { color: #05ffa1; }

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.connection-status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  color: #05ffa1;
}

.status-dot {
  width: 6px;
  height: 6px;
  background: #05ffa1;
  border-radius: 50%;
  box-shadow: 0 0 8px #05ffa1;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.window-controls {
  display: flex;
  gap: 10px;
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.8rem;
  cursor: pointer;
}

.window-controls span:hover { color: #fff; }

/* Body */
.console-body {
  position: relative;
  padding: 40px;
  min-height: 500px;
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: 0;
  pointer-events: none;
}

.portfolio-intro {
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  z-index: 1;
}

.section-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 10px;
}

.section-subtitle {
  color: rgba(255, 255, 255, 0.5);
}

/* Modules Grid */
.modules-grid {
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  z-index: 1;
}

/* Holo Module Card */
.holo-module {
  position: relative;
  transition: all 0.4s ease;
}

.module-frame {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px; /* Slightly squarer look */
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.holo-module:hover .module-frame {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 30px rgba(5, 255, 255, 0.05);
}

/* Corners */
.c-accent {
  position: absolute;
  width: 10px;
  height: 10px;
  border: 2px solid transparent;
  z-index: 2;
  transition: all 0.3s ease;
}

.c-accent.tl { top: 0; left: 0; border-top-color: rgba(255, 255, 255, 0.2); border-left-color: rgba(255, 255, 255, 0.2); }
.c-accent.tr { top: 0; right: 0; border-top-color: rgba(255, 255, 255, 0.2); border-right-color: rgba(255, 255, 255, 0.2); }
.c-accent.bl { bottom: 0; left: 0; border-bottom-color: rgba(255, 255, 255, 0.2); border-left-color: rgba(255, 255, 255, 0.2); }
.c-accent.br { bottom: 0; right: 0; border-bottom-color: rgba(255, 255, 255, 0.2); border-right-color: rgba(255, 255, 255, 0.2); }

.holo-module:hover .c-accent {
  border-color: #05ffa1;
  width: 15px;
  height: 15px;
}

/* Layout */
.module-layout {
  display: flex;
  flex-direction: column;
  min-height: auto;
}

/* Data Side */
.module-data {
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.data-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  font-family: 'Courier New', monospace;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: 15px;
}

.project-main-info {
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 20px;
}

.project-logo-wrapper {
  position: relative;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
}

.project-mini-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: grayscale(1) brightness(0.8);
  transition: all 0.4s ease;
}

.holo-module:hover .project-mini-logo {
  filter: grayscale(0) brightness(1);
  transform: scale(1.1);
}

.file-id {
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 10;
  font-family: 'Courier New', monospace;
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.4);
  background: rgba(0, 0, 0, 0.6);
  padding: 2px 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.holo-module:hover .file-id {
  color: #05ffa1;
  border-color: #05ffa1;
}

.project-status {
  display: flex;
  align-items: center;
  gap: 8px;
}

.project-status i { color: #05ffa1; }

.module-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 0;

}

.module-desc {
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 30px;
  max-width: 600px;
}

.tech-stack-line {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 20px;
}

.stack-label {
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.3);
}

.stack-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-item {
  font-size: 0.8rem;
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
  padding: 4px 10px;
  border-radius: 4px;
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

/* Console Footer */
.console-footer {
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.4);
}

.sys-message .blink {
  animation: blink 1s infinite;
}

@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

/* Mobile Adaptive */
@media (max-width: 992px) {
  .module-layout {
    flex-direction: column;
  }
  
  .module-visual {
    flex: 0 0 250px; /* Фиксированная высота для картинки на мобилках */
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
  }

  .module-data {
    padding: 30px;
  }
}

@media (max-width: 768px) {
  .portfolio-section { padding: 40px 0; }
  .console-body { padding: 20px; }
  
  .module-title { font-size: 1.5rem; }
  .module-desc { font-size: 0.9rem; }
  
  .console-header {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
  
  .header-right {
    width: 100%;
    justify-content: space-between;
  }

  .tech-stack-line {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>