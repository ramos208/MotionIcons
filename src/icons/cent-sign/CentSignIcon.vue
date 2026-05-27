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
      <path d="M208 0c17.7 0 32 14.3 32 32l0 25.4c43.6 5.2 83 24.5 113.3 53.1 12.9 12.1 13.4 32.4 1.3 45.2s-32.4 13.4-45.2 1.3c-24.4-23-57.2-37.1-93.3-37.1-75.1 0-136 60.9-136 136s60.9 136 136 136c36.2 0 69-14.1 93.3-37.1 12.9-12.1 33.1-11.5 45.2 1.3s11.5 33.1-1.3 45.2C323 430.1 283.6 449.4 240 454.6l0 25.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-28C84.7 433.5 16 352.8 16 256S84.7 78.5 176 60l0-28c0-17.7 14.3-32 32-32z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cent-sign
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cent-sign (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cent-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cent-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cent-sign 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cent-sign 3s ease-in-out infinite alternate;
}
</style>