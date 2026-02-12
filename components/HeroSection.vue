<template>
  <section id="hero" class="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden z-10">
    <div class="container mx-auto px-4 relative max-w-7xl">
      <div class="flex flex-col text-center mb-24 relative space-y-0 items-center justify-center">
        <!-- Version Tag -->
        <div class="absolute -left-4 md:left-20 top-0 flex-col gap-2 opacity-30 hidden lg:flex [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
          <span class="text-[10px] uppercase tracking-widest text-purple-400 font-['Geist']">
            Astana
          </span>
          <div class="w-px h-12 bg-gradient-to-b to-transparent from-purple-500/50"></div>
        </div>

        <div class="flex flex-col z-10 w-full items-center justify-center">
          <h1 class="uppercase leading-[0.85] flex flex-wrap justify-center gap-x-4 md:text-9xl md:gap-x-8 text-6xl font-semibold text-white tracking-tighter mt-8 mb-0">
            <span class="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll tracking-tighter font-['Space_Grotesk'] font-light">
              Digital
            </span>
            <span class="text-gradient [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll font-light tracking-tighter font-['Space_Grotesk'] text-glow">
              Solutions
            </span>
          </h1>
        </div>

        <div class="flex flex-col md:flex-row md:mt-12 md:mb-12 z-10 w-full mt-10 mb-8 gap-x-6 gap-y-6 items-center justify-center">
          <!-- Status Button with Border Beam -->
          <div class="[animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll group my-8 relative">
            <div class="beam-border"></div>
            <div class="border-subtle flex group-hover:bg-[#0f0716] group-hover:border-purple-500/30 transition-all md:h-16 bg-[#080808] h-12 z-10 border rounded-full mt-[1px] mr-[1px] mb-[1px] ml-[1px] pr-6 pl-3 relative gap-x-4 gap-y-4 items-center">
              <div class="md:w-10 md:h-10 overflow-hidden flex border border-purple-500/30 text-white bg-purple-900/20 w-8 h-8 rounded-full relative items-center justify-center">
                <iconify-icon icon="solar:server-square-bold-duotone" class="text-lg text-purple-300"></iconify-icon>
              </div>
              <div class="flex flex-col text-left">
                <span class="text-[10px] uppercase tracking-widest text-purple-400/80 font-['Geist']">
                  System_Status
                </span>
                <span class="text-xs md:text-sm leading-none text-white font-['Geist']">
                  Operational
                </span>
              </div>
            </div>
          </div>

          <h2 class="[animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll text-lg text-neutral-400 tracking-tight font-['Space_Grotesk'] md:text-3xl">
            Astana's Premier Digital Engineering
          </h2>
        </div>

        <div class="leading-relaxed [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll md:text-2xl text-xs text-neutral-500 font-['Space_Grotesk'] text-center max-w-lg">
          Разрабатываем веб-приложения и IT-решения для бизнеса в Казахстане.
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 max-w-6xl mx-auto counter-trigger [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
        <!-- Card 1 -->
        <div class="bg-[#050505] border border-subtle p-8 flex flex-col justify-between min-h-[220px] relative group hover:glow-purple transition-all duration-300">
          <div class="absolute top-4 right-4 text-xs text-white/20 font-['Geist']">
            01
          </div>
          <div class="flex justify-between items-start">
            <iconify-icon icon="solar:graph-up-bold-duotone" class="text-2xl text-purple-400"></iconify-icon>
            <div class="px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[10px] uppercase tracking-wider font-['Geist'] shadow-[0_0_10px_rgba(168,85,247,0.2)]">
              Live
            </div>
          </div>
          <div>
            <div class="text-4xl text-white mb-1 tracking-tighter font-['Space_Grotesk'] font-light">
              <span data-target="10" data-prefix="+" data-suffix="">
                +10
              </span>
            </div>
            <h3 class="text-xs uppercase tracking-widest text-neutral-500 font-['Geist']">
              Completed Projects
            </h3>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="bg-[#050505] border border-subtle p-8 flex flex-col justify-between min-h-[220px] relative group hover:border-white/10 transition-colors hover:glow-purple transition-all duration-300">
          <div class="absolute top-4 right-4 text-xs text-white/20 font-['Geist']">
            02
          </div>
          <div class="flex justify-between items-start">
            <iconify-icon icon="solar:code-circle-bold-duotone" class="text-2xl text-neutral-300"></iconify-icon>
          </div>
          <div>
            <div class="text-4xl text-white mb-1 tracking-tighter font-['Space_Grotesk'] font-light">
              <span data-target="99" data-suffix="%" class="">99%</span>
            </div>
            <h3 class="text-xs uppercase tracking-widest text-neutral-500 font-['Geist']">
              Performance Score
            </h3>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="bg-[#050505] border border-subtle p-8 flex flex-col justify-between min-h-[220px] relative group hover:border-white/10 transition-colors hover:glow-purple transition-all duration-300">
          <div class="absolute top-4 right-4 text-xs text-white/20 font-['Geist']">
            03
          </div>
          <div class="flex justify-between items-start">
            <iconify-icon icon="solar:rocket-bold-duotone" class="text-2xl text-neutral-300"></iconify-icon>
          </div>
          <div>
            <div class="text-4xl text-white mb-1 tracking-tighter font-['Space_Grotesk'] font-light">
              <span data-target="5" data-suffix="+" class="">5+</span>
            </div>
            <h3 class="text-xs uppercase tracking-widest text-neutral-500 font-['Geist']">
              Years Experience
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Counter animation (simplified version)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('counter-trigger')) {
          observer.unobserve(entry.target)
        }
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.counter-trigger').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
.border-subtle {
  border-color: rgba(255, 255, 255, 0.03);
}

.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #c084fc, #60a5fa, #fff) !important;
}

.selection\:bg-white\/10 {
  background-color: rgba(168, 85, 247, 0.2) !important;
}

.hover\:glow-purple:hover {
  box-shadow: 0 0 30px rgba(168, 85, 247, 0.25);
  border-color: rgba(168, 85, 247, 0.4);
}

.bg-brand-gradient {
  background: linear-gradient(135deg, #7c3aed, #2563eb);
}

.text-glow {
  text-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
}

/* Border Beam Animation */
@keyframes border-beam {
  0% { offset-distance: 0%; }
  100% { offset-distance: 100%; }
}

.beam-border {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  pointer-events: none;
  overflow: hidden;
}

.beam-border::before {
  content: "";
  position: absolute;
  inset: -2px;
  background: conic-gradient(from 0deg, transparent 0 340deg, white 360deg);
  animation: spin 4s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.group:hover .beam-border::before {
  opacity: 1;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>