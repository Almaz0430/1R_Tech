<template>
  <section id="about" class="bg-black text-white py-32 border-t border-subtle relative z-10">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <!-- Left Side - Small Description -->
        <div class="lg:col-span-4">
          <p class="text-sm text-neutral-500 leading-relaxed font-['Geist']">
            Мы уделяем особое внимание качеству кода, безопасности и удобству пользователей. Наша цель — создавать долговечные продукты, которые приносят реальную пользу.
          </p>
        </div>

        <!-- Right Side - Large Text with Keywords -->
        <div class="lg:col-span-8">
          <h2 class="text-4xl md:text-5xl lg:text-6xl leading-tight font-['Space_Grotesk'] font-light">
            <span class="text-white font-normal">Мы</span>
            <span class="text-neutral-600"> создаём</span>
            <span class="text-white font-normal"> веб-сервисы, мобильные приложения</span>
            <span class="text-neutral-600"> и</span>
            <span class="text-white font-normal"> корпоративные системы</span>
            <span class="text-neutral-600"> для бизнеса.</span>
          </h2>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4 mt-12">
            <NuxtLink 
              to="#portfolio" 
              class="group inline-flex items-center gap-3 px-6 py-3 bg-white text-black text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors font-['Geist'] border border-white"
            >
              <span>Проекты</span>
              <iconify-icon 
                icon="solar:arrow-right-bold" 
                class="text-xs transition-transform group-hover:translate-x-1"
              ></iconify-icon>
            </NuxtLink>

            <NuxtLink 
              to="#team" 
              class="group inline-flex items-center gap-3 px-6 py-3 bg-transparent text-white text-sm uppercase tracking-widest hover:bg-white/5 transition-colors font-['Geist'] border border-white/20 hover:border-white/40"
            >
              <iconify-icon 
                icon="solar:users-group-rounded-bold-duotone" 
                class="text-base"
              ></iconify-icon>
              <span>Команда</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for this minimal version
</script>

<style scoped>
.border-subtle {
  border-color: rgba(255, 255, 255, 0.03);
}
</style>