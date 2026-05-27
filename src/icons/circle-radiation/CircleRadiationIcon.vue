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
      <path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm80 0l64.3 0c8.7 0 15.7-7.1 17.3-15.6 4.4-24.4 18.1-45.5 37.2-59.7 7.4-5.5 10.6-15.6 6-23.6l-32.5-56.3c-4.3-7.5-13.9-10.3-21.2-5.5-48.2 31.5-81.3 84.2-86.3 144.8-.7 8.8 6.5 16 15.3 16zm137.9 89.8c-8.5-3.7-18.8-1.4-23.5 6.6l-31 53.8c-4.3 7.5-1.9 17.2 5.8 21.1 26.1 13.2 55.5 20.7 86.8 20.7s60.7-7.5 86.8-20.7c7.7-3.9 10.1-13.6 5.8-21.1l-31-53.8c-4.6-8-15-10.3-23.5-6.6-11.7 5-24.5 7.8-38.1 7.8s-26.4-2.8-38.1-7.8zM350.4 240.4c1.6 8.6 8.5 15.6 17.3 15.6l64.3 0c8.8 0 16.1-7.2 15.3-16-5-60.6-38.1-113.2-86.3-144.8-7.3-4.8-16.8-2-21.2 5.5L307.3 157c-4.6 8-1.4 18.1 6 23.6 19.1 14.2 32.7 35.4 37.2 59.7zM256 305.7a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: circle-radiation
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for circle-radiation (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-circle-radiation {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-circle-radiation {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-circle-radiation 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-circle-radiation 3s ease-in-out infinite alternate;
}
</style>