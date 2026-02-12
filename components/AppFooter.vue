<template>
  <footer class="border-t border-subtle bg-black pt-12 pb-8 relative z-10">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
        <NuxtLink to="/" class="text-2xl text-white uppercase flex items-center gap-2 tracking-tighter font-['Space_Grotesk'] font-light">
          <div class="w-1.5 h-1.5 bg-purple-500"></div>
          1R_Tech
        </NuxtLink>
        <div class="flex gap-8 text-xs text-neutral-500 uppercase tracking-widest">
          <NuxtLink to="/privacy" class="hover:text-white transition-colors font-['Geist']">
            Privacy Policy
          </NuxtLink>
          <NuxtLink to="/terms" class="hover:text-white transition-colors font-['Geist']">
            Terms of Service
          </NuxtLink>
          <a href="#contact" class="hover:text-white transition-colors font-['Geist']">
            Contact
          </a>
        </div>
      </div>

      <div class="border-t border-subtle pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-neutral-600">
        <p class="font-['Geist']">
          © {{ currentYear }} 1R_Tech Systems. Astana, Kazakhstan. // All Rights Reserved
        </p>
        <div class="flex gap-6 mt-4 md:mt-0">
          <a href="https://wa.me/77008080010" target="_blank" class="hover:text-white transition-colors flex items-center gap-2 font-['Geist']">
            <iconify-icon icon="logos:whatsapp-icon" class="text-sm"></iconify-icon>
            WhatsApp
          </a>
          <a href="https://github.com/Almaz0430" target="_blank" class="hover:text-white transition-colors flex items-center gap-2 font-['Geist']">
            <iconify-icon icon="logos:github-icon" class="text-sm"></iconify-icon>
            GitHub
          </a>
          <a href="mailto:onernurzhanov@gmail.com" class="hover:text-white transition-colors flex items-center gap-2 font-['Geist']">
            <iconify-icon icon="solar:letter-bold-duotone" class="text-sm"></iconify-icon>
            Email
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.border-subtle {
  border-color: rgba(255, 255, 255, 0.03);
}
</style>