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
      <path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM386.7 308.9c11.9-3.7 23.9 6.3 19.6 18.1-22.4 61.3-81.3 105.1-150.3 105.1S128.1 388.2 105.7 326.9c-4.3-11.8 7.7-21.8 19.6-18.1 39.2 12.2 83.7 19.1 130.7 19.1s91.5-6.9 130.7-19.1zM122.6 143.2c4.5-6.8 13.3-9.2 20.6-5.5l79.6 40c5.4 2.7 8.8 8.2 8.8 14.3s-3.4 11.6-8.8 14.3l-79.6 40c-7.3 3.6-16.1 1.3-20.6-5.5s-3.1-15.9 3.1-21.1L159 192 125.8 164.3c-6.2-5.2-7.6-14.3-3.1-21.1zm263.6 21.1L353 192 386.2 219.7c6.2 5.2 7.6 14.3 3.1 21.1s-13.3 9.2-20.6 5.5l-79.6-40c-5.4-2.7-8.8-8.2-8.8-14.3s3.4-11.6 8.8-14.3l79.6-40c7.3-3.6 16.1-1.3 20.6 5.5s3.1 15.9-3.1 21.1z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: face-grin-squint
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for face-grin-squint (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-face-grin-squint {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-face-grin-squint {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-face-grin-squint 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-face-grin-squint 3s ease-in-out infinite alternate;
}
</style>