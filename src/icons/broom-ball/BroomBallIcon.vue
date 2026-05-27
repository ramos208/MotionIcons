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
      <path d="M496 544a80 80 0 1 1 0-160 80 80 0 1 1 0 160zM106.8 277.2c30.6-30.6 73.1-45.9 115.8-42.2L341 353.3c3.7 42.8-11.6 85.2-42.2 115.9-27.4 27.4-64.6 42.8-103.3 42.8L22.1 512c-12.2 0-22.1-9.9-22.1-22.1 0-6.3 2.7-12.3 7.3-16.5L133.7 359.7c4.2-3.7-.4-10.4-5.4-7.9L77.2 377.4c-6.1 3-13.2-1.4-13.2-8.2 0-31.5 12.5-61.8 34.8-84l8-8zm417-270c12.6-10.3 31.1-9.5 42.8 2.2s12.4 30.2 2.2 42.8l-2.2 2.4-192 192 34.8 34.7c4.2 4.2 6.6 10 6.6 16 0 12.5-10.1 22.6-22.6 22.6l-29.1 0-108.3-108.3 0-29.1c0-12.5 10.1-22.6 22.6-22.6 6 0 11.8 2.4 16 6.6l34.8 34.7 192-192 2.4-2.2z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: broom-ball
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for broom-ball (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-broom-ball {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-broom-ball {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-broom-ball 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-broom-ball 3s ease-in-out infinite alternate;
}
</style>