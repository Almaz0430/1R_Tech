<template>
  <section id="contact" class="py-24 relative z-10 border-t border-subtle bg-black">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        <!-- Left: Info -->
        <div class="">
          <h3 class="text-3xl uppercase text-white mb-6 tracking-tighter font-['Space_Grotesk'] font-light">
            Initialise Contact
          </h3>
          <p class="text-sm text-neutral-400 mb-8 leading-relaxed font-['Geist']">
            Обсудим ваш проект? Оставьте заявку или свяжитесь с нами напрямую.
          </p>
          <div class="space-y-4 text-sm">
            <div class="flex items-center gap-4 text-neutral-300">
              <iconify-icon icon="solar:letter-bold-duotone" class="text-lg"></iconify-icon>
              <span class="font-['Geist']">onernurzhanov@gmail.com</span>
            </div>
            <div class="flex items-center gap-4 text-neutral-300">
              <iconify-icon icon="solar:map-point-bold-duotone" class="text-lg"></iconify-icon>
              <span class="font-['Geist']">Astana, Kazakhstan</span>
            </div>
            <div class="flex items-center gap-4 text-neutral-300">
              <iconify-icon icon="solar:phone-bold-duotone" class="text-lg"></iconify-icon>
              <span class="font-['Geist']">+7 (700) 808 00-10</span>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="">
          <form class="space-y-8" @submit.prevent="handleSubmit">
            <div class="group relative">
              <input 
                type="text" 
                id="name"
                v-model="formData.name"
                required 
                placeholder=" "
                class="outline-none focus:border-white transition-colors peer placeholder-transparent text-white font-['Geist'] bg-transparent w-full border-neutral-800 border-b pt-3 pb-3"
              >
              <label 
                for="name" 
                class="absolute left-0 -top-3 text-[10px] text-neutral-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-600 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white font-['Geist']"
              >
                Name
              </label>
            </div>

            <div class="group relative">
              <input 
                type="email" 
                id="email" 
                v-model="formData.email"
                required 
                placeholder=" "
                class="w-full bg-transparent border-b border-neutral-800 py-3 text-white outline-none focus:border-white transition-colors font-['Geist'] peer placeholder-transparent"
              >
              <label 
                for="email" 
                class="absolute left-0 -top-3 text-[10px] text-neutral-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-600 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white font-['Geist']"
              >
                Email Address
              </label>
            </div>

            <div class="group relative">
              <textarea 
                id="message" 
                v-model="formData.message"
                rows="3" 
                placeholder=" "
                class="w-full bg-transparent border-b border-neutral-800 py-3 text-white outline-none focus:border-white transition-colors font-['Geist'] peer placeholder-transparent resize-none"
              ></textarea>
              <label 
                for="message" 
                class="absolute left-0 -top-3 text-[10px] text-neutral-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-600 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white font-['Geist']"
              >
                Project Details
              </label>
            </div>

            <button 
              type="submit" 
              class="group flex items-center gap-4 text-white uppercase tracking-widest text-xs font-bold hover:text-neutral-300 transition-colors pt-4"
            >
              <span class="font-['Geist']">Transmit</span>
              <iconify-icon icon="solar:arrow-right-bold-duotone" class="transform group-hover:translate-x-1 transition-transform"></iconify-icon>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  // Add your form submission logic here
}
</script>

<style scoped>
.border-subtle {
  border-color: rgba(255, 255, 255, 0.03);
}
</style>