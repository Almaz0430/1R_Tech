<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <h2 class="section-title">Связаться с нами</h2>
      
      <div class="contact-container">
        <div class="contact-info">
          <div class="info-box">
            <div class="info-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="info-content">
              <h3>Адрес</h3>
              <p>Астана, Казахстан</p>
            </div>
          </div>
          
          <div class="info-box">
            <div class="info-icon">
              <i class="fas fa-phone-alt"></i>
            </div>
            <div class="info-content">
              <h3>Телефон</h3>
              <p>Временно недоступен</p>
            </div>
          </div>
          
          <div class="info-box">
            <div class="info-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="info-content">
              <h3>Email</h3>
              <p>almaz.zh7@gmail.com</p>
            </div>
          </div>
          
          <div class="contact-button-container">
            <a href="mailto:almaz.zh7@gmail.com" class="btn contact-btn">
              <i class="fas fa-envelope"></i> Написать нам
              <div class="btn-glow"></div>
            </a>
          </div>
        </div>
        
        <div class="map-container">
          <div class="map-overlay"></div>
          <div class="map-frame">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75517.18700516618!2d71.39498782230436!3d51.128942753782696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424580c47db54609%3A0x97f9148dddb19228!2z0JDRgdGC0LDQvdCwIDAwMDAwMCwg0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2sru!4v1688398618122!5m2!1sru!2sru" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
    
    <div class="neon-circles">
      <div class="neon-circle circle1"></div>
      <div class="neon-circle circle2"></div>
      <div class="neon-circle circle3"></div>
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
  document.querySelectorAll('.info-box, .map-container, .contact-button-container').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.contact-section {
  position: relative;
  background-color: rgba(10, 10, 15, 0.9);
  overflow: hidden;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 60px;
}

/* Информационная панель */
.contact-info {
  padding: 30px;
  background-color: rgba(20, 20, 30, 0.5);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  border: 1px solid transparent;
  transition: all 0.5s ease;
}

.contact-info::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid transparent;
  border-radius: 8px;
  background: linear-gradient(45deg, var(--color-neon-blue), var(--color-neon-blue-dark)) border-box;
  -webkit-mask:
     linear-gradient(#fff 0 0) padding-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0.7;
}

.info-box {
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.info-box.in-view {
  opacity: 1;
  transform: translateY(0);
}

.info-box:nth-child(1) {
  transition-delay: 0.1s;
}

.info-box:nth-child(2) {
  transition-delay: 0.2s;
}

.info-box:nth-child(3) {
  transition-delay: 0.3s;
}

.info-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(15, 247, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: var(--color-neon-blue);
  font-size: 1.2rem;
  box-shadow: var(--glow-blue);
  border: 1px solid var(--color-neon-blue);
}

.info-content h3 {
  color: var(--color-text);
  margin-bottom: 5px;
  font-size: 1.1rem;
}

.info-content p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
}

/* Социальные ссылки */
.social-links {
  display: flex;
  gap: 15px;
  margin-top: 40px;
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s;
}

.social-links.in-view {
  opacity: 1;
  transform: translateY(0);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(20, 20, 30, 0.8);
  color: var(--color-text);
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.social-link:hover {
  background-color: rgba(15, 247, 255, 0.1);
  border-color: var(--color-neon-blue);
  color: var(--color-neon-blue);
  box-shadow: var(--glow-blue);
  transform: translateY(-3px);
}

.social-link:hover::before {
  left: 100%;
}

/* Кнопка контакта */
.contact-button-container {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s;
}

.contact-button-container.in-view {
  opacity: 1;
  transform: translateY(0);
}

.contact-btn {
  padding: 15px 30px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.contact-btn i {
  font-size: 1.2rem;
}

.btn-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(15, 247, 255, 0.3), transparent);
  transition: all 0.6s;
}

.contact-btn:hover .btn-glow {
  left: 100%;
}

/* Карта */
.map-container {
  position: relative;
  height: 100%;
  min-height: 450px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease 0.3s;
}

.map-container.in-view {
  opacity: 1;
  transform: translateY(0);
}

.map-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid transparent;
  border-radius: 8px;
  background: linear-gradient(45deg, var(--color-neon-blue), var(--color-neon-blue-dark), var(--color-neon-green)) border-box;
  -webkit-mask:
     linear-gradient(#fff 0 0) padding-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: 2;
  pointer-events: none;
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-neon-blue);
  opacity: 0.1;
  z-index: 1;
  pointer-events: none;
  mix-blend-mode: color;
}

.map-frame {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Неоновые круги фона */
.neon-circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}

.neon-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(50px);
  opacity: 0.2;
}

.circle1 {
  top: -150px;
  left: -150px;
  width: 400px;
  height: 400px;
  background-color: var(--color-neon-blue);
  animation: float 15s infinite alternate ease-in-out;
}

.circle2 {
  bottom: 10%;
  right: -100px;
  width: 300px;
  height: 300px;
  background-color: var(--color-neon-blue-dark);
  animation: float 12s infinite alternate-reverse ease-in-out;
}

.circle3 {
  top: 40%;
  left: 30%;
  width: 200px;
  height: 200px;
  background-color: var(--color-neon-green);
  animation: float 18s infinite alternate ease-in-out;
}

@keyframes float {
  0% { transform: translate(0, 0); }
  100% { transform: translate(30px, -30px); }
}

@media (max-width: 992px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .map-container {
    height: 300px;
  }
}

.team-cta p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.team-cta a {
  text-decoration: none;
}
</style> 