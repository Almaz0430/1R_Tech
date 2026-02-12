<template>
  <section id="workflow" class="z-10 border-subtle bg-black border-b relative">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="flex flex-col lg:flex-row items-start">
        <!-- Sticky Left Side (только на desktop; на мобилке блок статичный) -->
        <div class="lg:w-1/2 lg:h-screen lg:min-h-0 lg:sticky lg:top-0 flex flex-col justify-center py-12 lg:py-0 pr-0 lg:pr-20 border-r border-subtle/0 lg:border-subtle lg:self-start">
          <h2 class="text-5xl md:text-6xl uppercase mb-8 lg:mb-8 text-white tracking-tighter font-['Space_Grotesk'] font-light">
            Digital
            <br>
            <span class="text-neutral-600">Protocol</span>
          </h2>

          <!-- Steps Navigation (Desktop Only) -->
          <div class="space-y-6 relative mb-12 hidden lg:block">
            <!-- Step 1 -->
            <div class="step-trigger group cursor-pointer flex items-center gap-6" data-step="1">
              <div class="h-12 w-[2px] bg-neutral-800 relative overflow-hidden">
                <div class="step-indicator absolute top-0 left-0 w-full h-full bg-white transition-all duration-500"></div>
              </div>
              <div>
                <h3 class="text-xl uppercase tracking-widest text-white font-['Space_Grotesk']">
                  01 / Индивидуальная разработка
                </h3>
                <p class="step-text text-sm text-neutral-500 font-['Geist'] transition-all duration-500">
                  Под ваши задачи и требования
                </p>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="step-trigger group cursor-pointer flex items-center gap-6" data-step="2">
              <div class="h-12 w-[2px] bg-neutral-800 relative overflow-hidden">
                <div class="step-indicator absolute top-0 left-0 w-full h-full bg-white transition-all duration-500"></div>
              </div>
              <div>
                <h3 class="text-xl uppercase tracking-widest text-white font-['Space_Grotesk']">
                  02 / Современный стек
                </h3>
                <p class="step-text text-sm text-neutral-500 font-['Geist'] transition-all duration-500">
                  Актуальные технологии
                </p>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="step-trigger group cursor-pointer flex items-center gap-6" data-step="3">
              <div class="h-12 w-[2px] bg-neutral-800 relative overflow-hidden">
                <div class="step-indicator absolute top-0 left-0 w-full h-full bg-white transition-all duration-500"></div>
              </div>
              <div>
                <h3 class="text-xl uppercase tracking-widest text-white font-['Space_Grotesk']">
                  03 / Поддержка
                </h3>
                <p class="step-text text-sm text-neutral-500 font-['Geist'] transition-all duration-500">
                  Стабильная работа систем
                </p>
              </div>
            </div>
          </div>

          <!-- Dynamic Visual Display (Sticky - Desktop Only) -->
          <div class="w-full aspect-video bg-neutral-900 border border-subtle relative overflow-hidden hidden lg:block">
            <!-- Img 1 -->
            <div class="workflow-img absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center bg-black opacity-100 scale-100" data-step="1">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" alt="" class="absolute inset-0 w-full h-full object-cover opacity-40">
              <div class="relative z-10 text-center">
                <iconify-icon icon="solar:chip-bold-duotone" class="text-4xl text-white mb-2"></iconify-icon>
                <div class="text-xs font-['Geist'] text-purple-400">
                  CUSTOM SOLUTIONS...
                </div>
              </div>
            </div>
            <!-- Img 2 -->
            <div class="workflow-img absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center bg-black opacity-0 scale-95" data-step="2">
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80" alt="" class="absolute inset-0 w-full h-full object-cover opacity-40">
              <div class="relative z-10 text-center">
                <iconify-icon icon="solar:atom-bold-duotone" class="text-4xl text-white mb-2"></iconify-icon>
                <div class="text-xs font-['Geist'] text-blue-400">
                  MODERN STACK...
                </div>
              </div>
            </div>
            <!-- Img 3 -->
            <div class="workflow-img absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center bg-black opacity-0 scale-95" data-step="3">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" alt="" class="absolute inset-0 w-full h-full object-cover opacity-40">
              <div class="relative z-10 text-center">
                <iconify-icon icon="solar:shield-check-bold-duotone" class="text-4xl text-white mb-2"></iconify-icon>
                <div class="text-xs font-['Geist'] text-green-400">
                  24/7 SUPPORT
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Scrolling Right Side (Content Blocks) -->
        <div class="lg:w-1/2">
          <!-- Spacer for start -->
          <div class="h-[20vh] hidden lg:block"></div>

          <!-- Step 1 Content -->
          <div class="workflow-step-content min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center px-0 lg:px-20 py-12 lg:py-20 border-b border-subtle" data-step="1">
            <span class="text-6xl text-white/10 font-bold mb-6 font-['Space_Grotesk']">
              01
            </span>
            <h3 class="text-3xl text-white mb-6 font-['Space_Grotesk'] tracking-tight">
              Индивидуальная разработка
            </h3>

            <!-- Mobile Image 1 -->
            <div class="w-full aspect-video bg-neutral-900 border border-subtle relative overflow-hidden mb-8 block lg:hidden">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" alt="" class="absolute inset-0 w-full h-full object-cover opacity-40">
              <div class="absolute inset-0 flex items-center justify-center bg-black/50">
                <iconify-icon icon="solar:chip-bold-duotone" class="text-4xl text-white mb-2"></iconify-icon>
              </div>
            </div>

            <p class="text-neutral-400 leading-relaxed mb-8 font-['Geist']">
              Делаем продукт под ваши требования: фиксируем задачу, проектируем решение, пишем код. Без готовых коробок — только то, что нужно по ТЗ.
            </p>
            <ul class="space-y-4 font-['Geist'] text-sm text-neutral-300">
              <li class="flex items-center gap-3">
                <iconify-icon icon="solar:check-circle-bold-duotone" class="text-purple-500 text-lg"></iconify-icon>
                Сбор и фиксация требований
              </li>
              <li class="flex items-center gap-3">
                <iconify-icon icon="solar:check-circle-bold-duotone" class="text-purple-500"></iconify-icon>
                Проектирование архитектуры
              </li>
              <li class="flex items-center gap-3">
                <iconify-icon icon="solar:check-circle-bold-duotone" class="text-purple-500"></iconify-icon>
                Разработка и сдача по этапам
              </li>
            </ul>
          </div>

          <!-- Step 2 Content -->
          <div class="workflow-step-content min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center px-0 lg:px-20 py-12 lg:py-20 border-b border-subtle" data-step="2">
            <span class="text-6xl text-white/10 font-bold mb-6 font-['Space_Grotesk']">
              02
            </span>
            <h3 class="text-3xl text-white mb-6 font-['Space_Grotesk'] tracking-tight">
              Современный стек технологий
            </h3>

            <!-- Mobile Image 2 -->
            <div class="w-full aspect-video bg-neutral-900 border border-subtle relative overflow-hidden mb-8 block lg:hidden">
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80" alt="" class="absolute inset-0 w-full h-full object-cover opacity-40">
              <div class="absolute inset-0 flex items-center justify-center bg-black/50">
                <iconify-icon icon="solar:atom-bold-duotone" class="text-4xl text-white mb-2"></iconify-icon>
              </div>
            </div>

            <p class="text-neutral-400 leading-relaxed mb-8 font-['Geist']">
              Фронтенд, бэкенд, базы данных, при необходимости — хостинг и облако. Стек выбираем под проект и бюджет.
            </p>
            <ul class="space-y-4 font-['Geist'] text-sm text-neutral-300">
              <li class="flex items-center gap-3">
                <iconify-icon icon="solar:check-circle-bold-duotone" class="text-blue-500"></iconify-icon>
                Интерфейс и клиентская часть
              </li>
              <li class="flex items-center gap-3">
                <iconify-icon icon="solar:check-circle-bold-duotone" class="text-blue-500"></iconify-icon>
                Серверная логика и БД
              </li>
              <li class="flex items-center gap-3">
                <iconify-icon icon="solar:check-circle-bold-duotone" class="text-blue-500"></iconify-icon>
                Развёртывание и инфраструктура
              </li>
            </ul>
          </div>

          <!-- Step 3 Content -->
          <div class="workflow-step-content min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center px-0 lg:px-20 py-12 lg:py-20" data-step="3">
            <span class="text-6xl text-white/10 font-bold mb-6 font-['Space_Grotesk']">
              03
            </span>
            <h3 class="text-3xl text-white mb-6 font-['Space_Grotesk'] tracking-tight">
              Техническая поддержка
            </h3>

            <!-- Mobile Image 3 -->
            <div class="w-full aspect-video bg-neutral-900 border border-subtle relative overflow-hidden mb-8 block lg:hidden">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" alt="" class="absolute inset-0 w-full h-full object-cover opacity-40">
              <div class="absolute inset-0 flex items-center justify-center bg-black/50">
                <iconify-icon icon="solar:shield-check-bold-duotone" class="text-4xl text-white mb-2"></iconify-icon>
              </div>
            </div>

            <p class="text-neutral-400 leading-relaxed mb-8 font-['Geist']">
              После запуска: мониторинг, исправление ошибок, обновления. Условия и сроки реакции — в договоре.
            </p>
            <ul class="space-y-4 font-['Geist'] text-sm text-neutral-300">
              <li class="flex items-center gap-3">
                <iconify-icon icon="solar:check-circle-bold-duotone" class="text-green-500"></iconify-icon>
                Мониторинг доступности
              </li>
              <li class="flex items-center gap-3">
                <iconify-icon icon="solar:check-circle-bold-duotone" class="text-green-500"></iconify-icon>
                Исправление сбоев и доработки
              </li>
              <li class="flex items-center gap-3">
                <iconify-icon icon="solar:check-circle-bold-duotone" class="text-green-500"></iconify-icon>
                Обновления по согласованному плану
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Small delay to ensure DOM is fully ready
  setTimeout(() => {
    const workflowSteps = document.querySelectorAll('.workflow-step-content')
    const stepIndicators = document.querySelectorAll('.step-trigger')
    const workflowImages = document.querySelectorAll('.workflow-img')
    
    if (workflowSteps.length === 0) {
      console.warn('No workflow steps found')
      return
    }
    
    const stepObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute('data-step')
          console.log('Step activated:', index)
          
          stepIndicators.forEach(ind => {
            const line = ind.querySelector('.step-indicator')
            const text = ind.querySelector('.step-text')
            if(ind.getAttribute('data-step') === index) {
              line?.classList.add('active')
              text?.classList.add('active')
            } else {
              line?.classList.remove('active')
              text?.classList.remove('active')
            }
          })
          
          workflowImages.forEach(img => {
            if(img.getAttribute('data-step') === index) {
              img.classList.remove('opacity-0', 'scale-95')
              img.classList.add('opacity-100', 'scale-100')
            } else {
              img.classList.add('opacity-0', 'scale-95')
              img.classList.remove('opacity-100', 'scale-100')
            }
          })
        }
      })
    }, { 
      threshold: 0.5,
      rootMargin: "-20% 0px -20% 0px" 
    })
    
    workflowSteps.forEach(step => stepObserver.observe(step))
  }, 100)
})
</script>

<style scoped>
.border-subtle {
  border-color: rgba(255, 255, 255, 0.03);
}

/* Ensure sticky positioning works correctly */
#workflow {
  position: relative;
}

.step-indicator {
  transition: all 0.5s ease;
  width: 2px;
  height: 100%;
  background: #262626;
}

.step-indicator.active {
  background: #a855f7 !important;
  box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
}

.step-text {
  transition: all 0.5s ease;
}

.step-text.active {
  color: #fff !important;
}

/* Workflow images transitions - with !important to override Tailwind */
.workflow-img {
  transition: opacity 0.7s ease-out, transform 0.7s ease-out !important;
}

.workflow-img.opacity-0 {
  opacity: 0 !important;
}

.workflow-img.opacity-100 {
  opacity: 1 !important;
}

.workflow-img.scale-95 {
  transform: scale(0.95) !important;
}

.workflow-img.scale-100 {
  transform: scale(1) !important;
}
</style>
