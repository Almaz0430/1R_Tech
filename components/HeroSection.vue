<template>
  <section id="hero" class="hero-section">
    <div class="container hero-container">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="hero-title-line">Разрабатываем</span>
          <span class="hero-title-line accent">будущее</span>
        </h1>
        <p class="hero-subtitle">Инновационные IT-решения для вашего бизнеса</p>
        <div class="hero-buttons">
          <a href="#portfolio" class="btn hero-btn">Наши проекты</a>
          <a href="#contact" class="btn hero-btn secondary">Связаться</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hexagon-container">
          <div class="hexagon hex1"></div>
          <div class="hexagon hex2"></div>
          <div class="hexagon hex3"></div>
        </div>
      </div>
    </div>
    
    <!-- Неоновые линии -->
    <div class="neon-lines">
      <div class="neon-line line1"></div>
      <div class="neon-line line2"></div>
      <div class="neon-line line3"></div>
      <div class="neon-line line4"></div>
    </div>
    
    <!-- Неоновые блики -->
    <div class="neon-glow glow1"></div>
    <div class="neon-glow glow2"></div>
    <div class="neon-glow glow3"></div>
    
    <!-- Кибер-сетка -->
    <div class="cyber-grid"></div>
  </section>
</template>

<script setup>
onMounted(() => {
  // Анимация при скролле
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
      }
    })
  }, {
    threshold: 0.1
  })
  
  // Наблюдаем за элементами
  const heroElements = document.querySelectorAll('.hero-title-line, .hero-subtitle, .hero-buttons, .hexagon')
  heroElements.forEach(el => observer.observe(el))
  
  // Параллакс эффект для блика
  const handleMouseMove = (e) => {
    const glows = document.querySelectorAll('.neon-glow')
    glows.forEach((glow, index) => {
      const speed = index * 0.03 + 0.05
      const x = (window.innerWidth - e.pageX * speed) / 100
      const y = (window.innerHeight - e.pageY * speed) / 100
      
      glow.style.transform = `translate(${x}px, ${y}px)`
    })
  }
  
  document.addEventListener('mousemove', handleMouseMove)
  
  onBeforeUnmount(() => {
    document.removeEventListener('mousemove', handleMouseMove)
  })
})
</script>

<style scoped>
.hero-section {
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  background-color: rgba(10, 10, 15, 0.9);
}

.hero-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-content {
  max-width: 600px;
  margin-right: 20px;
}

.hero-title {
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 25px;
  text-transform: uppercase;
}

.hero-title-line {
  display: block;
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s;
}

.hero-title-line.in-view {
  transform: translateY(0);
  opacity: 1;
}

.hero-title-line.accent {
  background: linear-gradient(90deg, var(--color-neon-blue), var(--color-neon-blue-dark));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: var(--glow-blue);
  transition-delay: 0.3s;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease 0.5s;
}

.hero-subtitle.in-view {
  opacity: 1;
  transform: translateY(0);
}

.hero-buttons {
  display: flex;
  gap: 20px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease 0.7s;
}

.hero-buttons.in-view {
  opacity: 1;
  transform: translateY(0);
}

.hero-btn {
  min-width: 180px;
  text-align: center;
  font-size: 1rem;
  text-decoration: none;
}

.hero-btn.secondary {
  border-color: var(--color-neon-blue-dark);
  box-shadow: var(--glow-blue-dark);
}

.hero-btn.secondary:hover {
  background: rgba(0, 102, 255, 0.1);
  box-shadow: 0 0 15px var(--color-neon-blue-dark);
}

/* Визуальная часть */
.hero-visual {
  position: relative;
  width: 400px;
  height: 400px;
}

.hexagon-container {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: rotate 20s infinite linear;
}

@keyframes rotate {
  0% { transform: rotateY(0) rotateX(0); }
  100% { transform: rotateY(360deg) rotateX(360deg); }
}

.hexagon {
  position: absolute;
  width: 200px;
  height: 230px;
  opacity: 0;
  transition: all 1s ease;
  transform: translateZ(0) scale(0.8);
}

.hexagon.in-view {
  opacity: 1;
  transform: translateZ(0) scale(1);
}

.hexagon::before,
.hexagon::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.hexagon::before {
  background: linear-gradient(45deg, var(--color-neon-blue), var(--color-neon-blue-dark));
  filter: blur(15px);
  opacity: 0.7;
  animation: pulse 3s infinite alternate;
}

.hexagon::after {
  background-color: rgba(10, 10, 15, 0.8);
  border: 1px solid;
  border-image: linear-gradient(45deg, var(--color-neon-blue), var(--color-neon-blue-dark)) 1;
  transform: scale(0.98);
}

.hex1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateZ(80px);
  transition-delay: 0.2s;
}

.hex2 {
  top: 50%;
  left: 20%;
  transform: translateY(-50%) translateZ(40px);
  transition-delay: 0.4s;
}

.hex3 {
  top: 50%;
  right: 20%;
  transform: translateY(-50%) translateZ(60px);
  transition-delay: 0.6s;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.05); opacity: 0.9; }
  100% { transform: scale(1); opacity: 0.7; }
}

/* Неоновые линии */
.neon-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.neon-line {
  position: absolute;
  background: linear-gradient(90deg, transparent, var(--color-neon-blue), transparent);
  height: 1px;
}

.line1 {
  width: 80%;
  top: 25%;
  left: -100%;
  animation: lineMove1 15s linear infinite;
}

.line2 {
  width: 60%;
  top: 45%;
  right: -100%;
  animation: lineMove2 20s linear infinite;
}

.line3 {
  width: 40%;
  bottom: 35%;
  left: -100%;
  animation: lineMove1 12s linear infinite;
}

.line4 {
  width: 70%;
  bottom: 15%;
  right: -100%;
  animation: lineMove2 18s linear infinite;
}

@keyframes lineMove1 {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(100% + 100vw)); }
}

@keyframes lineMove2 {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-100% - 100vw)); }
}

/* Неоновые блики */
.neon-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  z-index: 0;
}

.glow1 {
  top: 20%;
  left: 10%;
  width: 300px;
  height: 300px;
  background-color: var(--color-neon-blue);
  animation: pulse 8s infinite alternate;
}

.glow2 {
  bottom: 10%;
  right: 20%;
  width: 350px;
  height: 350px;
  background-color: var(--color-neon-blue-dark);
  animation: pulse 12s infinite alternate-reverse;
}

.glow3 {
  top: 50%;
  right: 30%;
  width: 200px;
  height: 200px;
  background-color: var(--color-neon-green);
  animation: pulse 10s infinite alternate;
}

/* Кибер-сетка */
.cyber-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(var(--color-neon-blue) 1px, transparent 1px),
                    radial-gradient(var(--color-neon-blue) 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: 0 0, 25px 25px;
  opacity: 0.05;
  z-index: 1;
}

@media (max-width: 992px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-content {
    margin-right: 0;
    margin-bottom: 40px;
    max-width: 100%;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .hero-visual {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    gap: 15px;
  }
  
  .hero-btn {
    width: 100%;
  }
}
</style> 