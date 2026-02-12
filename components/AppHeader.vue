<template>
  <nav class="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
    <div class="border-subtle flex bg-black/90 w-full max-w-4xl border pt-2 pr-2 pb-2 pl-2 shadow-2xl backdrop-blur-xl gap-x-1 gap-y-1 items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="bg-white/5 hover:bg-white/10 px-5 py-2 text-xs tracking-widest uppercase transition-all text-neutral-300 font-['Geist']">
        1R_Tech
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-1">
        <a v-for="(item, index) in menuItems.slice(0, 2)" :key="index" :href="item.href" 
           class="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-['Geist']">
          {{ item.text }}
        </a>
      </div>

      <!-- Brand Name with Pulse -->
      <div class="px-6 text-xl md:text-2xl text-white uppercase flex items-center gap-2 tracking-tighter font-['Space_Grotesk'] font-light">
        <div class="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_12px_rgba(168,85,247,0.8)]"></div>
        1R TECH
      </div>

      <!-- Desktop Menu Right -->
      <div class="hidden md:flex items-center gap-1">
        <a :href="menuItems[2].href" class="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-['Geist']">
          {{ menuItems[2].text }}
        </a>
      </div>

      <!-- CTA Button -->
      <a href="#contact" class="group relative bg-brand-gradient hover:opacity-90 transition-all text-white px-6 py-2 text-xs font-semibold tracking-widest uppercase overflow-hidden rounded-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] font-['Geist']">
        <span class="relative z-10">Book Call</span>
      </a>

      <!-- Mobile Menu Toggle -->
      <button @click="toggleMenu" class="md:hidden p-2" aria-label="Toggle menu">
        <div class="w-6 h-5 flex flex-col justify-between">
          <span class="block h-0.5 w-full bg-white transition-all" :class="{ 'rotate-45 translate-y-2': isMenuOpen }"></span>
          <span class="block h-0.5 w-full bg-white transition-all" :class="{ 'opacity-0': isMenuOpen }"></span>
          <span class="block h-0.5 w-full bg-white transition-all" :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"></span>
        </div>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden pt-24 px-4" @click="closeMenu">
      <div class="flex flex-col gap-6 items-center" @click.stop>
        <a v-for="(item, index) in menuItems" :key="index" :href="item.href" 
           @click="closeMenu"
           class="text-2xl text-white uppercase tracking-wider hover:text-purple-400 transition-colors font-['Space_Grotesk']">
          {{ item.text }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const menuItems = [
  { text: 'Development', href: '#strategy' },
  { text: 'Services', href: '#workflows' },
  { text: 'Case Studies', href: '#results' }
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