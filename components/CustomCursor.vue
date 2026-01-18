<template>
  <div v-if="!isMobile" class="custom-cursor-container">
    <div 
      class="cursor-dot" 
      :style="{ left: `${dotX}px`, top: `${dotY}px` }"
    ></div>
    <div 
      class="cursor-ring" 
      :class="{ 'hovering': isHovering }"
      :style="{ left: `${ringX}px`, top: `${ringY}px` }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const dotX = ref(-100)
const dotY = ref(-100)
const ringX = ref(-100)
const ringY = ref(-100)
const isHovering = ref(false)
const isMobile = ref(false)

let mouseX = -100
let mouseY = -100

const updatePosition = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
  
  // Dot follows instantly
  dotX.value = mouseX
  dotY.value = mouseY
}

const animate = () => {
  // Ring follows with easing
  const dx = mouseX - ringX.value
  const dy = mouseY - ringY.value
  
  ringX.value += dx * 0.15
  ringY.value += dy * 0.15
  
  requestAnimationFrame(animate)
}

const handleHover = (e) => {
  const target = e.target.closest('a, button, .clickable, .core-reactor, .node-content, .diag-module, .skill-chip, .view-source-btn')
  isHovering.value = !!target
}

onMounted(() => {
  isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  
  if (!isMobile.value) {
    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mouseover', handleHover)
    animate()
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', updatePosition)
  window.removeEventListener('mouseover', handleHover)
})
</script>

<style scoped>
.custom-cursor-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
}

.cursor-dot {
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 10001;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

.cursor-ring {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;
  z-index: 10000;
  backdrop-filter: blur(1px);
}

.cursor-ring.hovering {
  width: 50px;
  height: 50px;
  border-color: rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 2px;
}

@media (pointer: coarse) {
  .custom-cursor-container {
    display: none;
  }
}
</style>
