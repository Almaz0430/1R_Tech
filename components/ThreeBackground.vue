<template>
  <div ref="canvasContainer" class="three-background"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'

const canvasContainer = ref(null)

let scene, camera, renderer, particles
let mouseX = 0
let mouseY = 0
let windowHalfX = 0
let windowHalfY = 0

// Params
const particleCount = 1000 // Количество частиц
const particleSize = 2
const particleRange = 1000 // Область разлета

const onWindowResize = () => {
  if (!camera || !renderer) return
  windowHalfX = window.innerWidth / 2
  windowHalfY = window.innerHeight / 2
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

const onDocumentMouseMove = (event) => {
  mouseX = event.clientX - windowHalfX
  mouseY = event.clientY - windowHalfY
}

const initThree = () => {
  if (!canvasContainer.value) return

  windowHalfX = window.innerWidth / 2
  windowHalfY = window.innerHeight / 2

  // Scene
  scene = new THREE.Scene()
  // scene.fog = new THREE.FogExp2(0x000000, 0.0008) // Легкий туман для глубины (опционально)

  // Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 3000)
  camera.position.z = 1000

  // Renderer
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  canvasContainer.value.appendChild(renderer.domElement)

  // Particles
  const geometry = new THREE.BufferGeometry()
  const positions = []
  const colors = []

  const color = new THREE.Color()
  // Основной цвет частиц - зеленый (#05ffa1), но с вариациями
  const baseColor = new THREE.Color(0x05ffa1)

  for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() * particleRange * 2) - particleRange
    const y = (Math.random() * particleRange * 2) - particleRange
    const z = (Math.random() * particleRange * 2) - particleRange
    positions.push(x, y, z)

    // Вариативность цвета (от зеленого к синеватому/белому)
    // 70% шанс на основной цвет, 30% на белый/серый
    if (Math.random() > 0.3) {
        color.set(baseColor)
    } else {
        color.setHSL(0.6, 0.5, Math.random() * 0.5 + 0.5) // White/Blueish tint
    }
    
    colors.push(color.r, color.g, color.b)
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

  const material = new THREE.PointsMaterial({
    size: particleSize,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending // Свечение
  })

  particles = new THREE.Points(geometry, material)
  scene.add(particles)

  // Events
  document.addEventListener('mousemove', onDocumentMouseMove)
  window.addEventListener('resize', onWindowResize)
}

const animate = () => {
  if (!scene || !camera) return
  requestAnimationFrame(animate)

  const time = Date.now() * 0.00005

  // Вращение облака частиц
  particles.rotation.x = time * 0.2
  particles.rotation.y = time * 0.4

  // Параллакс эффект от мыши
  camera.position.x += (mouseX - camera.position.x) * 0.05
  camera.position.y += (-mouseY - camera.position.y) * 0.05
  
  camera.lookAt(scene.position)

  renderer.render(scene, camera)
}

onMounted(() => {
  initThree()
  animate()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize)
  document.removeEventListener('mousemove', onDocumentMouseMove)
  
  if (renderer && canvasContainer.value) {
    canvasContainer.value.removeChild(renderer.domElement)
    renderer.dispose()
  }
})
</script>

<style scoped>
.three-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2; /* За глобальным фоном, или вместо него, или перед ним? Поставим глубоко */
  opacity: 0.6; /* Не слишком ярко */
  pointer-events: none;
}
</style>
