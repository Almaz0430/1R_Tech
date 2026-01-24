<template>
  <section id="contact" class="section contact-section">
    <!-- Декоративные фоновые элементы -->
    <!-- Декоративные фоновые элементы удалены для использования глобального фона -->

    <div class="container relative-z">
      <div class="contact-header">
        <h2 class="section-title">Terminal_Contact</h2>
        <p class="hub-subtitle">Обсудим ваш проект? Оставьте заявку или свяжитесь с нами напрямую.</p>
      </div>

      <div class="hub-container">
        <!-- Левая часть: Ноды контактов -->
        <div class="contact-nodes">
          <div class="node-wrapper" v-for="(node, index) in contactNodes" :key="index">
            <div class="contact-node" :class="node.type">
              <div class="node-glow"></div>
              <div class="node-icon">
                <i :class="node.icon"></i>
              </div>
              <div class="node-content">
                <span class="node-label">{{ node.label }}</span>
                <h3 class="node-value">{{ node.value }}</h3>
              </div>
              <div class="node-corner top-left"></div>
              <div class="node-corner bottom-right"></div>
            </div>
          </div>
          
          <div class="cta-node-wrapper">
            <a href="mailto:onernurzhanov@gmail.com" class="cta-node">
              <span class="btn-text">INITIALIZE_CHAT</span>
              <div class="btn-scanner"></div>
            </a>
          </div>
        </div>

        <!-- Правая часть: Карта-сканер -->
        <div class="map-hub">
          <div class="map-scanner-frame">
            <div class="scanner-header">
              <div class="scanner-status">
                <span class="status-dot"></span>
                <span class="status-text">LOCATION_LOCKED</span>
              </div>
              <div class="scanner-coords">
                <span>LAT: 51.1605</span>
                <span>LNG: 71.4704</span>
              </div>
            </div>
            
            <div class="map-window">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160161.4278458738!2d71.32832565651817!3d51.12836243886588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424580c47db54609%3A0x97f9148dddb1915!2sAstana%2C%20Kazakhstan!5e0!3m2!1sen!2skz!4v1706121345678!5m2!1sen!2skz" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy">
              </iframe>
              <div class="map-overlay"></div>
            </div>

            <div class="scanner-footer">
              <div class="footer-bar"></div>
              <div class="footer-label">ASTANA_HUB_QUARTER</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Вертикальный текст слева -->
    <div class="vertical-text">
      <span>C</span>
      <span>O</span>
      <span>N</span>
      <span>N</span>
      <span>E</span>
      <span>C</span>
      <span>T</span>
    </div>
  </section>
</template>

<script setup>
const contactNodes = [
  { type: 'address', icon: 'fas fa-map-marker-alt', label: 'ADDRESS_LOC', value: 'Astana, Kazakhstan' },
  { type: 'phone', icon: 'fas fa-phone-alt', label: 'VOICE_ID', value: '+7 (700) 808 00-10' },
  { type: 'email', icon: 'fas fa-envelope', label: 'DATA_STREAM', value: 'onernurzhanov@gmail.com' }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.contact-node, .map-hub, .cta-node').forEach(el => {
    observer.observe(el);
  });
});
</script>

<style scoped>
.contact-section {
  position: relative;
  background-color: transparent;
  overflow: hidden;
  padding: 50px 0;
}

.relative-z {
  position: relative;
  z-index: 5;
}

/* Фоновые эффекты */
.tech-bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.grid-line {
  position: absolute;
  background: rgba(255, 255, 255, 0.03);
}

.grid-line.horizontal {
  width: 100%;
  height: 1px;
  top: 50%;
}

.grid-line.vertical {
  width: 1px;
  height: 100%;
  left: 30%;
}

.glow-circle {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.1;
}

.glow-circle.top-right {
  top: -100px;
  right: -100px;
  background: var(--color-neon-blue);
}

.glow-circle.bottom-left {
  bottom: -100px;
  left: -100px;
  background: var(--color-neon-pink);
}

/* Заголовок */
.contact-header {
  text-align: left;
  margin-bottom: 70px;
}

.section-subtitle {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
  margin-top: -20px;
  letter-spacing: 1px;
}

/* Контейнер хаба */
.hub-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: stretch;
}

/* Ноды контактов */
.contact-nodes {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.contact-node {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 25px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateX(-30px);
}

.contact-node.in-view {
  opacity: 1;
  transform: translateX(0);
}

.contact-node:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.3);
  transform: scale(1.02) translateX(10px);
}

.node-icon {
  width: 60px;
  height: 60px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.contact-node:hover .node-icon {
  background: rgba(255, 255, 255, 0.15);
  text-shadow: 0 0 10px #fff;
}

.node-label {
  display: block;
  font-family: 'Courier New', monospace;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 2px;
  margin-bottom: 5px;
}

.node-value {
  font-size: 1.2rem;
  color: #fff;
  font-weight: 500;
}

.node-corner {
  position: absolute;
  width: 10px;
  height: 10px;
  border: 2px solid transparent;
}

.node-corner.top-left {
  top: -1px;
  left: -1px;
  border-top-color: rgba(255, 255, 255, 0.3);
  border-left-color: rgba(255, 255, 255, 0.3);
}

.node-corner.bottom-right {
  bottom: -1px;
  right: -1px;
  border-bottom-color: rgba(255, 255, 255, 0.3);
  border-right-color: rgba(255, 255, 255, 0.3);
}

/* CTA Кнопка */
.cta-node {
  margin-top: 20px;
  display: inline-block;
  background: #fff;
  color: #000;
  padding: 20px 40px;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  border: 1px solid transparent;
}

.cta-node.in-view {
  opacity: 1;
  transform: translateY(0);
}

.cta-node:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.3);
}

.btn-scanner {
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  animation: scan 3s infinite;
}

@keyframes scan {
  0% { left: -100%; }
  100% { left: 200%; }
}

/* Карта-сканер */
.map-hub {
  position: relative;
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.map-hub.in-view {
  opacity: 1;
  transform: scale(1);
}

.map-scanner-frame {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 4px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scanner-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
}

.scanner-status {
  display: flex;
  align-items: center;
  gap: 10px;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: var(--color-neon-blue);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--color-neon-blue);
  animation: pulse-status 2s infinite;
}

@keyframes pulse-status {
  0% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
}

.map-window {
  flex: 1;
  min-height: 400px;
  width: 100%;
  position: relative;
  border-radius: 2px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #000;
}

.map-window iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  filter: grayscale(1) invert(0.9) contrast(1.2);
  transition: filter 0.5s ease;
}

.map-window:hover iframe {
  filter: grayscale(0.5) invert(0) contrast(1);
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(rgba(10, 10, 15, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(10, 10, 15, 0.3) 1px, transparent 1px);
  background-size: 40px 40px;
}

.scanner-footer {
  padding-top: 15px;
}

.footer-bar {
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  width: 100%;
  margin-bottom: 10px;
  position: relative;
}

.footer-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  background: #fff;
}

.footer-label {
  font-family: 'Courier New', monospace;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.3);
  text-align: right;
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
  color: rgba(255, 255, 255, 0.1);
  text-transform: uppercase;
  margin: 2px 0;
  transition: all 0.3s ease;
}

.vertical-text span:hover {
  color: #fff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

/* Адаптив */
@media (max-width: 992px) {
  .hub-container {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .contact-header {
    text-align: center;
  }

  .tech-bg-overlay {
    display: none;
  }
}

@media (max-width: 768px) {
  .contact-section { padding: 40px 0 30px; }
  
  .contact-header { margin-bottom: 40px; }
  
  .hub-subtitle { font-size: 0.95rem; }
  
  .hub-container {
    gap: 30px;
  }
  
  .contact-nodes { gap: 15px; }
  
  .contact-node {
    padding: 20px;
    gap: 15px;
    flex-direction: column;
    text-align: center;
  }
  
  .node-icon {
    width: 50px;
    height: 50px;
    font-size: 1.1rem;
  }
  
  .node-label { font-size: 0.65rem; }
  
  .node-value {
    font-size: 0.95rem;
    word-break: break-all;
  }
  
  .cta-node {
    width: 100%;
    text-align: center;
    padding: 16px 30px;
    font-size: 0.85rem;
  }
  
  .map-scanner-frame { padding: 10px; }
  
  .scanner-header {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    font-size: 0.7rem;
  }
  
  .scanner-coords { display: flex; gap: 15px; }
  
  .map-window {
    min-height: 250px;
  }
  
  .footer-label { font-size: 0.65rem; }
  
  .vertical-text {
    display: none;
  }
}
</style>