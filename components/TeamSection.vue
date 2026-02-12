<template>
  <section id="team" class="text-white pt-24 pb-24 border-t border-subtle relative z-10">
    <div class="container max-w-7xl mx-auto px-4">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 pb-8 border-b border-subtle">
        <div>
          <h2 class="text-5xl md:text-7xl uppercase mb-2 text-white tracking-tighter font-['Space_Grotesk'] font-light">
            Team
          </h2>
          <p class="text-xs uppercase tracking-widest text-neutral-500 font-['Geist']">
            / People / Experts
          </p>
        </div>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        <div 
          v-for="(member, index) in teamMembers" 
          :key="index"
          class="team-member-card group"
        >
          <!-- Member Photo -->
          <div class="aspect-square bg-neutral-900 overflow-hidden relative mb-6">
            <img 
              :src="member.photo" 
              :alt="member.name" 
              class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            >
            <!-- Role Badge -->
            <div class="absolute top-4 right-4 bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-white/80 font-['Geist']">
              {{ member.roleCode }}
            </div>
          </div>

          <!-- Member Info -->
          <div class="mb-6">
            <h3 class="text-2xl md:text-3xl text-white font-['Space_Grotesk'] tracking-tight font-light mb-2">
              {{ member.name }}
            </h3>
            <p class="text-sm text-neutral-400 font-['Geist']">
              {{ member.position }}
            </p>
          </div>

          <!-- Social Links -->
          <div class="flex flex-wrap gap-3">
            <a 
              v-for="(social, sIndex) in member.social" 
              :key="sIndex"
              :href="social.link" 
              target="_blank" 
              class="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-xs text-white uppercase tracking-widest hover:bg-white hover:text-black transition-colors font-['Geist']"
            >
              <iconify-icon :icon="getSocialIcon(social.icon)" class="text-sm"></iconify-icon>
              <span>{{ getSocialLabel(social.name) }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center border-t border-subtle pt-24">
        <h2 class="text-4xl md:text-6xl lg:text-7xl uppercase font-light text-white tracking-tighter font-['Space_Grotesk'] mb-6">
          <span class="text-white">Хотите</span>
          <span class="text-neutral-600"> присоединиться?</span>
        </h2>
        <p class="text-base md:text-lg text-neutral-400 font-['Geist'] max-w-2xl mx-auto mb-10">
          Мы всегда рады талантливым специалистам и новым интересным идеям.
        </p>
        <a 
          href="#contact" 
          class="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors font-['Geist'] border border-white"
        >
          <span>Связаться с нами</span>
          <iconify-icon 
            icon="solar:arrow-right-bold" 
            class="text-xs"
          ></iconify-icon>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const teamMembers = [
  {
    name: 'Oner Nurzhanov',
    position: 'Founder & CEO',
    roleCode: 'FOUNDER',
    photo: '/images/team/Oner.png',
    social: [
      { name: 'WhatsApp', icon: 'fab fa-whatsapp', link: 'https://wa.me/77008080010' }
    ]
  },
  {
    name: 'Almaz Zhanat',
    position: 'Lead Frontend Architect',
    roleCode: 'FRONTEND',
    photo: '/images/team/Almaz.jpg',
    social: [
      { name: 'GitHub', icon: 'fab fa-github', link: 'https://github.com/Almaz0430' }
    ]
  },
  {
    name: 'Arystan Ergali',
    position: 'Lead Backend Architect',
    roleCode: 'BACKEND',
    photo: '/images/team/Arystan.png',
    social: [
      { name: 'GitHub', icon: 'fab fa-github', link: 'https://github.com/slliry' }
    ]
  }
]

const getSocialIcon = (faIcon) => {
  const iconMap = {
    'fab fa-whatsapp': 'logos:whatsapp-icon',
    'fab fa-github': 'logos:github-icon'
  }
  return iconMap[faIcon] || 'solar:link-bold-duotone'
}

const getSocialLabel = (name) => {
  const labelMap = {
    'WhatsApp': 'Contact',
    'GitHub': 'GitHub'
  }
  return labelMap[name] || 'Link'
}
</script>

<style scoped>
.border-subtle {
  border-color: rgba(255, 255, 255, 0.03);
}
</style>