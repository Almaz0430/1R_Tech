<template>
  <section id="team" class="section team-section">
    <div class="container relative-z">
      <div class="team-header">
        <h2 class="section-title">Terminal_Team</h2>
        <p class="section-subtitle">Профессиональная команда разработчиков и архитекторов ПО.</p>
      </div>

      <div class="team-grid">
        <div v-for="(member, index) in teamMembers" :key="index" class="team-member" :style="{'--delay': `${index * 0.1}s`}">
          <div class="member-card">
            <!-- Технические углы -->
            <div class="card-corner top-left"></div>
            <div class="card-corner bottom-right"></div>
            
            <div class="member-id">ID_{{ index + 101 }}</div>
            
            <div class="member-image-hub">
              <div class="member-frame">
                <img :src="member.photo" :alt="member.name" class="member-photo">
                <div class="scan-line"></div>
                <div class="frame-overlay"></div>
              </div>
              <div class="status-indicator">
                <span class="status-dot"></span>
                <span class="status-text">ACTIVE</span>
              </div>
            </div>

            <div class="member-info">
              <div class="role-tag">ROLE_ID: {{ member.roleCode }}</div>
              <h3 class="member-name">{{ member.name }}</h3>
              <p class="member-position">{{ member.position }}</p>
              
              <div class="member-social">
                <a v-for="(social, i) in member.social" :key="i" :href="social.link" class="social-link" :title="social.name">
                  <i :class="social.icon"></i>
                  <span class="social-label">VIEW_SOURCE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="team-cta-island">
        <div class="cta-content">
          <div class="cta-label">DEPLOY_OPPORTUNITY</div>
          <h3 class="cta-title">Хотите присоединиться?</h3>
          <p class="cta-text">Мы всегда рады талантливым специалистам и новым интересным идеям.</p>
        </div>
        <a href="#contact" class="cta-btn">
          INITIALIZE_JOIN_REQ
          <div class="btn-glow"></div>
        </a>
      </div>
    </div>
    
    <!-- Вертикальный текст слева -->
    <div class="vertical-text">
      <span>O</span>
      <span>F</span>
      <span>F</span>
      <span>I</span>
      <span>C</span>
      <span>E</span>
    </div>
  </section>
</template>

<script setup>
const teamMembers = [
  {
    name: 'Өнер Нұржанұлы',
    position: 'Founder & CEO',
    roleCode: 'FOUNDER_01',
    photo: '/images/team/Oner.png',
    social: [
      { name: 'WhatsApp', icon: 'fab fa-whatsapp', link: 'https://wa.me/77008080010' }
    ]
  },
  {
    name: 'Жанат Алмаз',
    position: 'Lead Frontend Architect',
    roleCode: 'ARC_FR_01',
    photo: '/images/team/Almaz.jpg',
    social: [
      { name: 'GitHub', icon: 'fab fa-github', link: 'https://github.com/Almaz0430' }
    ]
  },
  {
    name: 'Арыстан Ергали',
    position: 'Lead Backend Architect',
    roleCode: 'DEV_BE_01',
    photo: '/images/team/Arystan.png',
    social: [
      { name: 'GitHub', icon: 'fab fa-github', link: 'https://github.com/slliry' }
    ]
  }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.team-member, .team-cta-island').forEach(el => {
    observer.observe(el);
  });
});
</script>

<style scoped>
.team-section {
  position: relative;
  background-color: transparent;
  padding: 50px 0;
}

.relative-z {
  position: relative;
  z-index: 5;
}

.team-header {
  margin-bottom: 70px;
}

.section-subtitle {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
  margin-top: -20px;
  letter-spacing: 1px;
}

/* Сетка карточек */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.team-member {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) var(--delay);
}

.team-member.in-view {
  opacity: 1;
  transform: translateY(0);
}

.member-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px 30px;
  position: relative;
  transition: all 0.4s ease;
  overflow: hidden;
}

.member-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

/* Углы */
.card-corner {
  position: absolute;
  width: 15px;
  height: 15px;
  border: 2px solid transparent;
}

.card-corner.top-left { top: 15px; left: 15px; border-top-color: rgba(255, 255, 255, 0.2); border-left-color: rgba(255, 255, 255, 0.2); }
.card-corner.bottom-right { bottom: 15px; right: 15px; border-bottom-color: rgba(255, 255, 255, 0.2); border-right-color: rgba(255, 255, 255, 0.2); }

.member-id {
  position: absolute;
  top: 15px;
  right: 25px;
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: 2px;
}

/* Контейнер фото */
.member-image-hub {
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0 auto 30px;
}

.member-frame {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.member-photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  filter: grayscale(1);
  transition: all 0.5s ease;
}

.member-card:hover .member-photo {
  filter: grayscale(0);
  transform: scale(1.05);
}

.scan-line {
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: scan 3s infinite;
  opacity: 0;
}

.member-card:hover .scan-line {
  opacity: 1;
}

@keyframes scan {
  0% { top: -100%; }
  100% { top: 200%; }
}

.status-indicator {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: #000;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Courier New', monospace;
  font-size: 0.6rem;
}

.status-dot {
  width: 6px;
  height: 6px;
  background: var(--color-neon-blue);
  border-radius: 50%;
  box-shadow: 0 0 5px var(--color-neon-blue);
  animation: blink 2s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

/* Информация */
.member-info {
  text-align: center;
}

.role-tag {
  font-family: 'Courier New', monospace;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.member-name {
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 5px;
}

.member-position {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  margin-bottom: 25px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  text-decoration: none;
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #fff;
  color: #000;
}

/* CTA Остров */
.team-cta-island {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.team-cta-island.in-view {
  opacity: 1;
  transform: translateY(0);
}

.cta-label {
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: 3px;
  margin-bottom: 15px;
}

.cta-title {
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 10px;
}

.cta-text {
  color: rgba(255, 255, 255, 0.5);
  max-width: 500px;
}

.cta-btn {
  background: #fff;
  color: #000;
  padding: 18px 36px;
  border-radius: 12px;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.cta-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
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

@media (max-width: 992px) {
  .team-cta-island {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .vertical-text {
    display: none;
  }
  
  .team-cta-island {
    padding: 30px;
    margin: 0 15px;
  }
  
  .cta-title {
    font-size: 1.5rem;
  }
}
</style>
 