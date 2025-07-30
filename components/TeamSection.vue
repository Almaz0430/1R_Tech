<template>
  <section id="team" class="section team-section">
    <div class="container">
      <div class="team-grid">
        <div v-for="(member, index) in teamMembers" :key="index" class="team-member" :style="{'--delay': `${index * 0.1}s`}">
          <div class="member-card">
            <div class="member-image-container">
              <div class="member-image">
                <img :src="member.photo" :alt="member.name">
              </div>
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
          </div>
        </div>
      </div>
      
      <div class="team-cta">
        <p>Хотите присоединиться к нашей команде?</p>
        <a href="#contact" class="btn">Связаться с нами</a>
      </div>
    </div>
    
    <!-- Вертикальный текст слева -->
    <div class="vertical-text">
      <span>T</span>
      <span>E</span>
      <span>A</span>
      <span>M</span>
    </div>
  </section>
</template>

<script setup>
const teamMembers = [
  {
    name: 'Әлбосын Саян',
    position: 'Директор',
    photo: '/images/team/Sayan.jfif',
    glowColor: 'var(--color-neon-blue)',
    social: [
      { name: 'LinkedIn', icon: 'fab fa-linkedin-in', link: '#' },
      { name: 'Twitter', icon: 'fab fa-twitter', link: '#' }
    ]
  },
  {
    name: 'Мукушева Азиза',
    position: 'Менеджер проектов',
    photo: '/images/team/Aziza.jfif',
    glowColor: 'var(--color-neon-purple)',
    social: []
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
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
  margin-top: 50px;
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
  transition: transform 0.5s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
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
  border-color: #fff;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

.social-icon:hover::before {
  left: 100%;
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
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.team-cta p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.team-cta a {
  text-decoration: none;
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
  .team-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .vertical-text {
    display: none;
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