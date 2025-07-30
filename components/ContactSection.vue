<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <div class="contact-container">
        <div class="contact-info">
          <div class="info-box">
            <div class="info-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="info-content">
              <h3>Адрес</h3>
              <p>Астана, Кабанбай батыра 51</p>
            </div>
          </div>
          
          <div class="info-box">
            <div class="info-icon">
              <i class="fas fa-phone-alt"></i>
            </div>
            <div class="info-content">
              <h3>Телефон</h3>
              <p>+ 777 035 40 84</p>
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
            </a>
          </div>
        </div>
        
        <div class="map-container">
          <div class="map-frame">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.4235055990035!2d71.4114843!3d51.1221205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4245841c5b9d7e9b%3A0x7c3d5a2a3c5f5e4a!2z0J_RgNC-0YHQvy4g0JrQsNCx0LDQvdCx0LDQuSDQkdCw0YLRi9GA0LAsIDUxLCDQkNGB0YLQsNC90LAsINCa0LDQt9Cw0YXRgdGC0LDQvQ!5e0!3m2!1sru!2sru!4v1688398618122!5m2!1sru!2sru" 
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
    
    <!-- Вертикальный текст слева -->
    <div class="vertical-text">
      <span>C</span>
      <span>O</span>
      <span>N</span>
      <span>T</span>
      <span>A</span>
      <span>C</span>
      <span>T</span>
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
  overflow: hidden;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 60px;
  margin-top: 50px;
}

/* Информационная панель */
.contact-info {
  padding: 30px;
  background-color: rgba(20, 20, 30, 0.5);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.5s ease;
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
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: #fff;
  font-size: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
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
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.map-container.in-view {
  opacity: 1;
  transform: translateY(0);
}

.map-frame {
  position: relative;
  width: 100%;
  height: 100%;
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

@media (max-width: 992px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .map-container {
    height: 300px;
  }
  
  .vertical-text {
    display: none;
  }
}
</style> 