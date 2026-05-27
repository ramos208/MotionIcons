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
      <path d="M320 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 141.9-32 19.2 0-116.7c0-24.5-19.9-44.4-44.4-44.4-12.5 0-24.4 5.3-32.8 14.5l-26.4 29C42.9 160.8 0 271.8 0 387l0 30.5c0 52.2 42.3 94.5 94.5 94.5 22 0 43.7-5.1 63.4-15l5-2.5c37.4-18.7 61-56.9 61-98.8l0-128 64-38.4 64 38.4 0 128c0 41.8 23.6 80.1 61 98.8l5 2.5c19.7 9.8 41.4 15 63.4 15 52.2 0 94.5-42.3 94.5-94.5l0-6.2c0-111.1-36.7-219-104.4-307L428.9 48.7c-8.1-10.6-20.7-16.7-34-16.7-23.7 0-42.9 19.2-42.9 42.9l0 118.2-32-19.2 0-141.9z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: lungs
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for lungs (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-lungs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-lungs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-lungs 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-lungs 3s ease-in-out infinite alternate;
}
</style>