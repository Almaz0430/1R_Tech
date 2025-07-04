<template>
  <section id="team" class="section team-section">
    <div class="container">
      <h2 class="section-title">Наша команда</h2>
      
      <div class="team-grid">
        <div v-for="(member, index) in teamMembers" :key="index" class="team-member" :style="{'--delay': `${index * 0.1}s`}">
          <div class="member-card">
            <div class="member-image-container">
              <div class="member-image">
                <img :src="member.photo" :alt="member.name">
              </div>
              <div class="member-glow" :style="{'--glow-color': member.glowColor}"></div>
            </div>
            <div class="member-info">
              <h3 class="member-name">{{ member.name }}</h3>
              <p class="member-position">{{ member.position }}</p>
              <div class="member-social">
                <a v-for="(social, i) in member.social" :key="i" :href="social.link" class="social-icon" :title="social.name">
                  <i :class="social.icon"></i>
                </a>
              </div>
            </div>
            <div class="card-corners">
              <span class="corner top-left"></span>
              <span class="corner top-right"></span>
              <span class="corner bottom-left"></span>
              <span class="corner bottom-right"></span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="team-cta">
        <p>Хотите присоединиться к нашей команде?</p>
        <a href="#contact" class="btn">Связаться с нами</a>
      </div>
    </div>
    
    <div class="team-bg-grid"></div>
    <div class="team-bg-glow"></div>
  </section>
</template>

<script setup>
const teamMembers = [
  {
    name: 'Әлбосын Саян',
    position: 'Директор',
    photo: '/images/team/team1.jpg',
    glowColor: 'var(--color-neon-blue)',
    social: [
      { name: 'LinkedIn', icon: 'fab fa-linkedin-in', link: '#' },
      { name: 'Twitter', icon: 'fab fa-twitter', link: '#' }
    ]
  },
  {
    name: 'Жанат Алмаз',
    position: 'Фронтенд Разработчик',
    photo: '/images/team/Almaz.png',
    glowColor: 'var(--color-neon-blue-dark)',
    social: [
      { name: 'GitHub', icon: 'fab fa-github', link: '#' }
    ]
  },
  {
    name: 'Дё Данил',
    position: 'Бэкенд разработчик',
    photo: '/images/team/Danil.png',
    glowColor: 'var(--color-neon-green)',
    social: [
      { name: 'GitHub', icon: 'fab fa-github', link: '#' }
    ]
  },
  {
    name: 'Жусупов Даниял',
    position: 'Мобильный разработчик',
    photo: '/images/team/Daniyal.png',
    glowColor: 'var(--color-neon-pink)',
    social: [
      { name: 'GitHub', icon: 'fab fa-github', link: '#' }
    ]
  }
]

onMounted(() => {
  // Анимация появления при скролле
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })
  
  // Наблюдаем за элементами
  document.querySelectorAll('.team-member').forEach(member => {
    observer.observe(member)
  })
})
</script>

<style scoped>
.team-section {
  position: relative;
  overflow: hidden;
  background-color: rgba(10, 10, 15, 0.95);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
}

.team-member {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) var(--delay);
}

.team-member.in-view {
  opacity: 1;
  transform: translateY(0);
}

.member-card {
  background-color: rgba(15, 15, 25, 0.7);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  height: 100%;
  backdrop-filter: blur(10px);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.member-card:hover {
  transform: translateY(-10px);
}

.member-image-container {
  position: relative;
  padding-top: 100%;
  overflow: hidden;
}

.member-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.member-card:hover .member-image img {
  transform: scale(1.05);
}

.member-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, var(--glow-color) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
  mix-blend-mode: overlay;
  pointer-events: none;
}

.member-card:hover .member-glow {
  opacity: 0.3;
}

.member-info {
  padding: 20px;
  position: relative;
  z-index: 1;
}

.member-name {
  color: var(--color-text);
  font-size: 1.2rem;
  margin-bottom: 5px;
  font-family: 'Orbitron', sans-serif;
}

.member-position {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.member-social {
  display: flex;
  gap: 15px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: var(--color-text);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.social-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.social-icon:hover {
  border-color: var(--color-neon-blue);
  box-shadow: var(--glow-blue);
  color: var(--color-neon-blue);
}

.social-icon:hover::before {
  left: 100%;
}

/* Углы карточек */
.card-corners .corner {
  position: absolute;
  width: 15px;
  height: 15px;
  border-color: var(--color-neon-blue);
  opacity: 0;
  transition: all 0.5s ease;
}

.corner.top-left {
  top: 0;
  left: 0;
  border-top: 2px solid;
  border-left: 2px solid;
}

.corner.top-right {
  top: 0;
  right: 0;
  border-top: 2px solid;
  border-right: 2px solid;
}

.corner.bottom-left {
  bottom: 0;
  left: 0;
  border-bottom: 2px solid;
  border-left: 2px solid;
}

.corner.bottom-right {
  bottom: 0;
  right: 0;
  border-bottom: 2px solid;
  border-right: 2px solid;
}

.member-card:hover .corner {
  opacity: 1;
  box-shadow: var(--glow-blue);
}

/* CTA секция */
.team-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  padding: 40px;
  background-color: rgba(15, 15, 25, 0.5);
  border-radius: 8px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.team-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid transparent;
  border-radius: 8px;
  background: linear-gradient(45deg, var(--color-neon-blue), var(--color-neon-purple)) border-box;
  -webkit-mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.team-cta p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.team-cta a {
  text-decoration: none;
}

/* Фоновые элементы */
.team-bg-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle, rgba(15, 247, 255, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.3;
  z-index: -1;
}

.team-bg-glow {
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, var(--color-neon-blue-dark) 0%, transparent 70%);
  filter: blur(100px);
  opacity: 0.2;
  bottom: -250px;
  right: -250px;
  z-index: -1;
  animation: rotate 20s infinite linear;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .team-grid {
    grid-template-columns: 1fr;
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style> 