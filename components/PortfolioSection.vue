<template>
  <section id="portfolio" class="text-white pt-24 pb-24 border-t border-subtle relative z-10">
    <div class="container max-w-7xl mx-auto px-4">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 pb-8 border-b border-subtle [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
        <div>
          <h2 class="text-5xl md:text-7xl uppercase mb-2 text-white tracking-tighter font-['Space_Grotesk'] font-light">
            Projects
          </h2>
          <p class="text-xs uppercase tracking-widest text-neutral-500 font-['Geist']">
            / Recent Work / Case Studies
          </p>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="project.id"
          class="project-card group relative overflow-hidden bg-[#050505] border border-subtle hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll"
        >
          <!-- Project Image -->
          <div class="aspect-[16/9] bg-neutral-900 overflow-hidden relative">
            <img 
              v-if="project.image"
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover transition-transform duration-700"
            >
            <div v-else class="w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center">
              <iconify-icon icon="solar:programming-bold-duotone" class="text-6xl text-white/10"></iconify-icon>
            </div>
          </div>

          <!-- Project Info -->
          <div class="p-8">
            <div class="flex items-start justify-between mb-4">
              <h3 class="text-3xl md:text-4xl text-white font-['Space_Grotesk'] tracking-tight font-light">
                {{ project.title }}
              </h3>
              <div v-if="project.category" class="bg-white/5 border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-neutral-300 font-['Geist'] ml-4">
                {{ project.category }}
              </div>
            </div>

            <p class="text-neutral-400 leading-relaxed text-sm mb-6 font-['Geist']">
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div v-if="project.technologies && project.technologies.length > 0" class="flex items-center gap-3 mb-6 pb-6 border-b border-subtle">
              <span class="text-[10px] text-white/30 uppercase tracking-wider font-['Geist']">Stack:</span>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="(tech, tIndex) in project.technologies" 
                  :key="tIndex" 
                  class="text-[10px] text-neutral-300 bg-white/5 border border-white/10 px-2 py-1 font-['Geist'] hover:border-purple-500/30 hover:text-white transition-colors"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Project Link -->
            <div v-if="project.link">
              <a 
                :href="project.link" 
                target="_blank" 
                class="group/btn inline-flex items-center gap-2 text-xs text-white uppercase tracking-widest hover:text-purple-300 transition-colors font-['Geist']"
              >
                <span>View Project</span>
                <iconify-icon 
                  icon="solar:arrow-right-up-bold" 
                  class="text-xs transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                ></iconify-icon>
              </a>
            </div>
            <div v-else class="text-xs text-neutral-600 uppercase tracking-widest font-['Geist']">
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const projects = [
  {
    id: 1,
    title: 'Valik.kz',
    description: 'Маркетплейс строительных материалов. Платформа объединяет поставщиков и покупателей, облегчая процесс закупки и логистики в сфере строительства.',
    image: '/images/projects/valik.png',
    technologies: ['Next.js', 'React', 'Django', 'PostgreSQL'],
    category: 'E-Commerce',
    status: 'live',
    link: 'https://valik.kz'
  },
  {
    id: 2,
    title: 'Project Name',
    description: 'Описание проекта будет добавлено позже. Здесь будет информация о целях, технологиях и результатах работы.',
    image: null,
    technologies: [],
    category: 'Development',
    status: null,
    link: null
  }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
      }
    })
  }, { threshold: 0.1 })
  
  const elements = document.querySelectorAll('.project-card, .animate-on-scroll')
  elements.forEach(el => observer.observe(el))
})
</script>

<style scoped>
.border-subtle {
  border-color: rgba(255, 255, 255, 0.03);
}

@keyframes blink { 
  0%, 100% { opacity: 1; } 
  50% { opacity: 0; } 
}
</style>