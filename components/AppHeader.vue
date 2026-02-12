<template>
  <nav class="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
    <div class="border-subtle flex bg-black/90 w-full max-w-4xl border p-2 shadow-2xl backdrop-blur-xl gap-1 items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="bg-white/5 hover:bg-white/10 px-3 md:px-5 py-2 text-xs tracking-widest uppercase transition-all text-neutral-300 font-['Geist']">
        1R_Tech
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-1">
        <a v-for="(item, index) in menuItems.slice(0, 2)" :key="index" :href="item.href" 
           class="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-['Geist']"
           @click.prevent="scrollToSection(item.sectionId)">
          {{ item.text }}
        </a>
      </div>

      <!-- Brand Name with Pulse (Hidden on mobile) -->
      <div class="hidden md:flex px-6 text-2xl text-white uppercase items-center gap-2 tracking-tighter font-['Space_Grotesk'] font-light">
        <div class="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_12px_rgba(168,85,247,0.8)]"></div>
        1R TECH
      </div>

      <!-- Desktop Menu Right -->
      <div class="hidden md:flex items-center gap-1">
        <a :href="menuItems[2].href" class="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-['Geist']"
           @click.prevent="scrollToSection(menuItems[2].sectionId)">
          {{ menuItems[2].text }}
        </a>
      </div>

      <!-- CTA Button -->
      <a href="#contact" class="hidden md:block group relative bg-brand-gradient hover:opacity-90 transition-all text-white px-6 py-2 text-xs font-semibold tracking-widest uppercase overflow-hidden rounded-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] font-['Geist']"
         @click.prevent="scrollToSection('contact')">
        <span class="relative z-10">Book Call</span>
      </a>

      <!-- Mobile CTA (Smaller) -->
      <a href="#contact" class="md:hidden group relative bg-brand-gradient hover:opacity-90 transition-all text-white px-3 py-2 text-[10px] font-semibold tracking-widest uppercase rounded-sm font-['Geist']"
         @click.prevent="scrollToSection('contact')">
        <span class="relative z-10">Call</span>
      </a>

      <!-- Mobile Menu Toggle -->
      <button @click="toggleMenu" class="md:hidden p-2" aria-label="Toggle menu">
        <div class="w-5 h-4 flex flex-col justify-between">
          <span class="block h-0.5 w-full bg-white transition-all" :class="{ 'rotate-45 translate-y-1.5': isMenuOpen }"></span>
          <span class="block h-0.5 w-full bg-white transition-all" :class="{ 'opacity-0': isMenuOpen }"></span>
          <span class="block h-0.5 w-full bg-white transition-all" :class="{ '-rotate-45 -translate-y-1.5': isMenuOpen }"></span>
        </div>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Teleport to="body">
      <div v-if="isMenuOpen" class="fixed inset-0 z-[100] md:hidden" @click="closeMenu">
        <!-- Сплошной фон на весь экран -->
        <div class="absolute inset-0 bg-[#030303]" aria-hidden="true"></div>
        <div class="absolute inset-0 backdrop-blur-xl bg-[#030303]/95" aria-hidden="true"></div>

        <!-- Close Button -->
        <button 
          @click="closeMenu" 
          class="absolute top-8 right-6 p-2 text-white hover:text-purple-400 transition-colors z-10"
          aria-label="Close menu"
        >
          <div class="w-6 h-6 relative">
            <span class="absolute top-1/2 left-0 w-full h-0.5 bg-current rotate-45 -translate-y-1/2"></span>
            <span class="absolute top-1/2 left-0 w-full h-0.5 bg-current -rotate-45 -translate-y-1/2"></span>
          </div>
        </button>

        <div class="relative flex flex-col gap-6 items-center justify-center min-h-full pt-24 pb-32 px-4" @click.stop>
          <a v-for="(item, index) in menuItems" :key="index" :href="item.href" 
             class="text-2xl text-white uppercase tracking-wider hover:text-purple-400 transition-colors font-['Space_Grotesk']"
             @click.prevent="scrollToSection(item.sectionId)">
            {{ item.text }}
          </a>
        </div>
      </div>
    </Teleport>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const menuItems = [
  { text: 'Development', href: '#workflow', sectionId: 'workflow' },
  { text: 'Team', href: '#team', sectionId: 'team' },
  { text: 'Case Studies', href: '#portfolio', sectionId: 'portfolio' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (typeof document !== 'undefined') {
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

function scrollToSection (sectionId) {
  closeMenu()
  if (typeof document === 'undefined') return
  const el = document.getElementById(sectionId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.border-subtle {
  border-color: rgba(255, 255, 255, 0.03);
}

.bg-brand-gradient {
  background: linear-gradient(135deg, #7c3aed, #2563eb);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  nav {
    top: 1rem;
  }
}
</style>