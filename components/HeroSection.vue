<template>
  <section id="hero" class="hero-section">
    <div class="container hero-container">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="hero-title-line">Developing</span>
          <span class="hero-title-line accent">technologies</span>
        </h1>
        <p class="hero-subtitle">Инновационные IT-решения для вашего бизнеса</p>
        <div class="hero-buttons">
          <a href="#portfolio" class="btn hero-btn">Наши проекты</a>
          <a href="#contact" class="btn hero-btn secondary">Связаться</a>
        </div>
      </div>
    </div>
    
    <!-- Вертикальный текст слева -->
    <div class="vertical-text">
      <span>H</span>
      <span>E</span>
      <span>R</span>
      <span>O</span>
      <span>&nbsp;</span>
      <span>S</span>
      <span>E</span>
      <span>C</span>
      <span>T</span>
      <span>I</span>
      <span>O</span>
      <span>N</span>
    </div>
    
    <!-- Scroll down элемент -->
    <div class="scroll-down">
      <span>Scroll down</span>
      <div class="scroll-arrow">
        <span></span>
        <span></span>
      </div>
    </div>
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
  const heroElements = document.querySelectorAll('.hero-title-line, .hero-subtitle, .hero-buttons')
  heroElements.forEach(el => observer.observe(el))
})
</script>

<style scoped>
.hero-section {
  height: 100vh;
  min-height: 700px;
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
  height: 100%;
}

.hero-content {
  max-width: 800px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-title {
  font-size: 5.5rem;
  line-height: 1.1;
  margin-bottom: 25px;
  text-transform: uppercase;
  perspective: 1000px;
}

.hero-title-line {
  display: block;
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s;
  font-weight: 900;
  text-shadow: 
    0 1px 0 #ccc,
    0 2px 0 #c9c9c9,
    0 3px 0 #bbb,
    0 4px 0 #b9b9b9,
    0 5px 0 #aaa,
    0 6px 1px rgba(0,0,0,.1),
    0 0 5px rgba(0,0,0,.1),
    0 1px 3px rgba(0,0,0,.3),
    0 3px 5px rgba(0,0,0,.2),
    0 5px 10px rgba(0,0,0,.25),
    0 10px 10px rgba(0,0,0,.2),
    0 20px 20px rgba(0,0,0,.15);
  transform-style: preserve-3d;
  cursor: pointer;
}

.hero-title-line.in-view {
  transform: translateY(0) rotateX(0deg);
  opacity: 1;
}

.hero-title:hover .hero-title-line {
  transform: translateZ(15px) rotateX(-8deg) rotateY(5deg);
  text-shadow: 
    0 2px 0 #ccc,
    0 4px 0 #c9c9c9,
    0 6px 0 #bbb,
    0 8px 0 #b9b9b9,
    0 10px 0 #aaa,
    0 12px 2px rgba(0,0,0,.2),
    0 0 10px rgba(0,0,0,.2),
    0 2px 6px rgba(0,0,0,.4),
    0 6px 10px rgba(0,0,0,.3),
    0 10px 20px rgba(0,0,0,.35),
    0 20px 20px rgba(0,0,0,.3),
    0 40px 40px rgba(0,0,0,.25);
}

.hero-title-line.accent {
  color: #fff;
  font-weight: 900;
  transition-delay: 0.3s;
  text-shadow: 
    0 1px 0 #ddd,
    0 2px 0 #ccc,
    0 3px 0 #bbb,
    0 4px 0 #aaa,
    0 5px 0 #999,
    0 6px 1px rgba(0,0,0,.1),
    0 0 5px rgba(0,0,0,.1),
    0 1px 3px rgba(0,0,0,.3),
    0 3px 5px rgba(0,0,0,.2),
    0 5px 10px rgba(0,0,0,.25),
    0 10px 10px rgba(0,0,0,.2),
    0 20px 20px rgba(0,0,0,.15);
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero-title:hover .hero-title-line.accent {
  transform: translateZ(20px) rotateX(10deg) rotateY(-5deg);
  text-shadow: 
    0 2px 0 #ddd,
    0 4px 0 #ccc,
    0 6px 0 #bbb,
    0 8px 0 #aaa,
    0 10px 0 #999,
    0 12px 2px rgba(0,0,0,.2),
    0 0 10px rgba(0,0,0,.2),
    0 2px 6px rgba(0,0,0,.4),
    0 6px 10px rgba(0,0,0,.3),
    0 10px 20px rgba(0,0,0,.35),
    0 20px 20px rgba(0,0,0,.3),
    0 40px 40px rgba(0,0,0,.25);
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
  justify-content: center;
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
  border-color: #fff;
}

.hero-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: none;
}

/* Добавляем анимацию частиц */
@keyframes particleMove {
  0% { background-position: 0 0, 25px 25px; }
  100% { background-position: 30px 30px, 55px 55px; }
}

/* Scroll down элемент */
.scroll-down {
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  color: #fff;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  cursor: pointer;
  z-index: 5;
  transform: rotate(-5deg);
}

.scroll-down:hover {
  opacity: 1;
}

.scroll-down span {
  font-family: 'Courier New', monospace;
  margin-bottom: 8px;
  letter-spacing: 1px;
}

.scroll-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: bounceDown 2s infinite;
}

.scroll-arrow span {
  display: block;
  width: 10px;
  height: 10px;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(45deg);
  margin: -2px 0;
}

@keyframes bounceDown {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(10px);
  }
  60% {
    transform: translateY(5px);
  }
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
.vertical-text span:nth-child(10) { animation-delay: 1.0s; }
.vertical-text span:nth-child(11) { animation-delay: 1.1s; }
.vertical-text span:nth-child(12) { animation-delay: 1.2s; }

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

  .vertical-text {
    display: none;
  }
}
</style> 