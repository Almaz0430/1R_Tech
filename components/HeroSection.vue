<template>
  <section id="hero" class="hero-section">
    <div class="container hero-container">
      <div class="hero-content">
        <div class="hero-meta">
          <span class="meta-tag">SYSTEM_BOOT: TRUE</span>
          <span class="meta-tag">LOC: KZ_ASTANA</span>
        </div>
        
        <h1 class="hero-title">
          <span class="hero-title-line">Developing</span>
          <span class="hero-title-line accent">technologies</span>
        </h1>
        
        <p class="hero-subtitle">Проектируем программные решения любой сложности.</p>
        
        <div class="hero-buttons">
          <a href="#portfolio" class="hero-btn primary">
            <span class="btn-label">VIEW_PORTFOLIO</span>
            <div class="btn-scanner"></div>
          </a>
          <a href="#contact" class="hero-btn secondary">
            <span class="btn-label btn-glitch">ESTABLISH_COMM</span>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Вертикальный текст слева -->
    <div class="vertical-text">
      <span>H</span>
      <span>E</span>
      <span>R</span>
      <span>O</span>
      <span>_</span>
      <span>C</span>
      <span>O</span>
      <span>R</span>
      <span>E</span>
    </div>
    
    <!-- Scroll down элемент -->
    <div class="scroll-down">
      <div class="scroll-track">
        <div class="scroll-dot"></div>
      </div>
      <span class="scroll-label">SCROLL_FOR_DATA</span>
    </div>

    <!-- Декоративные углы секции -->
    <div class="hero-bracket top-left"></div>
    <div class="hero-bracket bottom-right"></div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
      }
    })
  }, { threshold: 0.1 })
  
  const heroElements = document.querySelectorAll('.hero-title-line, .hero-subtitle, .hero-buttons, .hero-meta')
  heroElements.forEach(el => observer.observe(el))
})
</script>

<style scoped>
.hero-section {
  height: 100vh;
  min-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0;
}

.hero-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-content {
  max-width: 900px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Meta tags atop the title */
.hero-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.8s ease;
}

.hero-meta.in-view {
  opacity: 1;
  transform: translateY(0);
}

.meta-tag {
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 2px;
  padding: 4px 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.hero-title {
  font-size: 6rem;
  line-height: 0.95;
  margin-bottom: 30px;
  text-transform: uppercase;
  font-weight: 950;
  letter-spacing: -2px;
}

.hero-title-line {
  display: block;
  transform: translateY(30px);
  opacity: 0;
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  color: #fff;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
}

.hero-title-line.accent {
  background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0.5));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition-delay: 0.2s;
}

.hero-title-line.in-view {
  transform: translateY(0);
  opacity: 1;
}

.hero-subtitle {
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 50px;
  max-width: 600px;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease 0.4s;
}

.hero-subtitle.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Buttons */
.hero-buttons {
  display: flex;
  gap: 30px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease 0.6s;
}

.hero-buttons.in-view {
  opacity: 1;
  transform: translateY(0);
}

.hero-btn {
  padding: 18px 40px;
  border-radius: 12px;
  text-decoration: none;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 2px;
  font-weight: 700;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 220px;
}

.hero-btn.primary {
  background: #fff;
  color: #000;
}

.hero-btn.secondary {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  backdrop-filter: blur(10px);
}

.hero-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(255, 255, 255, 0.1);
}

.hero-btn.primary:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.hero-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: #fff;
}

/* Глитч эффект для кнопок (аналогично portfolio) */
.btn-glitch {
  position: relative;
  display: inline-block;
}

.hero-btn.secondary:hover .btn-glitch {
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

.btn-scanner {
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: btnScan 3s infinite;
}

@keyframes btnScan {
  0% { left: -100%; }
  100% { left: 200%; }
}

/* Scroll Indicator */
.scroll-down {
  position: absolute;
  bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  opacity: 1;
  transition: opacity 0.3s ease;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  z-index: 10;
  color: #fff;
}

.scroll-down:hover {
  opacity: 1;
}

.scroll-track {
  width: 2px;
  height: 60px;
  background: linear-gradient(to bottom, #fff, transparent);
  position: relative;
  border-radius: 2px;
}

.scroll-dot {
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  left: -2px;
  animation: scrollMove 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes scrollMove {
  0% { top: 0; opacity: 0; }
  30% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

.scroll-label {
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #fff;
}

/* Vertical Decoration */
.vertical-text {
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.vertical-text span {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.8rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.05);
  transition: all 0.4s ease;
}

.hero-section:hover .vertical-text span {
  color: rgba(255, 255, 255, 0.15);
}

/* Section Brackets */
.hero-bracket {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid transparent;
  pointer-events: none;
}

.hero-bracket.top-left {
  top: 40px;
  left: 40px;
  border-top-color: rgba(255, 255, 255, 0.1);
  border-left-color: rgba(255, 255, 255, 0.1);
}

.hero-bracket.bottom-right {
  bottom: 40px;
  right: 40px;
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-right-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 1024px) {
  .hero-title { font-size: 4.5rem; }
  .hero-subtitle { font-size: 1.2rem; }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 100vh;
    min-height: 100dvh;
    padding: 100px 20px 60px;
  }
  
  .hero-content {
    padding: 0 10px;
  }
  
  .hero-meta {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .meta-tag {
    font-size: 0.6rem;
    padding: 3px 8px;
  }
  
  .hero-title { 
    font-size: 2.2rem; 
    letter-spacing: -1px;
    margin-bottom: 20px;
  }
  
  .hero-subtitle { 
    font-size: 1rem; 
    margin-bottom: 30px;
    padding: 0 10px;
  }
  
  .hero-buttons { 
    flex-direction: column; 
    align-items: center;
    gap: 12px; 
    width: 100%;
  }
  
  .hero-btn { 
    min-width: unset;
    width: 100%;
    max-width: 280px;
    padding: 14px 30px;
    font-size: 0.7rem;
  }
  
  .vertical-text { display: none; }
  
  .scroll-down {
    bottom: 30px;
  }
  
  .scroll-track {
    height: 40px;
  }
  
  .hero-bracket {
    width: 30px;
    height: 30px;
  }
  
  .hero-bracket.top-left {
    top: 20px;
    left: 20px;
  }
  
  .hero-bracket.bottom-right {
    bottom: 20px;
    right: 20px;
  }
}
</style>