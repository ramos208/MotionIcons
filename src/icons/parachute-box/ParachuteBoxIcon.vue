<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-radar']"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      :stroke-width="strokeWidth" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      class="icon-geometry anim-ambient-floating"
    >
      <path d="M128 224C128 152.2 144.3 88.4 169.5 43.4 195.1-2.4 226.6-24 256-24s60.9 21.6 86.5 67.4C367.7 88.4 384 152.2 384 224l-104 0 0 96 8 0c9.3 0 18.1 2 26 5.5l118.4-101.5-.5 0c0-78.4-17.7-150.6-47.6-204-6.1-11-12.9-21.3-20.3-30.9 86.5 35.9 147.8 115.1 147.8 218.9 0 7-3.1 13.7-8.4 18.2L347.4 360.1c3 7.4 4.6 15.4 4.6 23.9l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-64c0-8.4 1.6-16.5 4.6-23.9L8.4 226.2C3.1 221.7 0 215 0 208 0 104.2 61.3 24.9 147.8-10.9 140.5-1.4 133.7 9 127.6 20 97.7 73.4 80 145.6 80 224l-.5 0 118.4 101.5c8-3.5 16.8-5.5 26-5.5l8 0 0-96-104 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: parachute-box
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for parachute-box (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

defineProps({
  size: { type: Number, default: 24 },
  strokeWidth: { type: Number, default: 2 }
});
</script>

<style scoped>
.ai-motion-icon-wrapper {
  position: relative;
  display: inline-flex;
  cursor: pointer;
}

.anim-ambient-floating {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-parachute-box {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-parachute-box {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-parachute-box 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-parachute-box 3s ease-in-out infinite alternate;
}
</style>