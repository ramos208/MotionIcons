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
      <path d="M248-8c0-13.3-10.7-24-24-24S200-21.3 200-8l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64zM145.3 208l157.5 0c6.7 0 12.6 4.1 15 10.4l26.1 69.6-239.6 0 26.1-69.6c2.3-6.2 8.3-10.4 15-10.4zM34 292.8l-1.3 3.4C13.2 307.1 0 328 0 352L0 480c0 17.7 14.3 32 32 32l16 0c17.7 0 32-14.3 32-32l0-32 288 0 0 32c0 17.7 14.3 32 32 32l16 0c17.7 0 32-14.3 32-32l0-128c0-24-13.2-44.9-32.8-55.9l-1.3-3.4-36.3-96.9c-11.7-31.2-41.6-51.9-74.9-51.9l-157.5 0c-33.3 0-63.2 20.7-74.9 51.9L34 292.8zM96 336a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm224 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM7 7C-2.3 16.4-2.3 31.6 7 41L55 89c9.4 9.4 24.6 9.4 33.9 0S98.3 64.4 89 55L41 7C31.6-2.3 16.4-2.3 7 7zM407 7L359 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9S416.4-2.3 407 7z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: car-on
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for car-on (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-car-on {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-car-on {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-car-on 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-car-on 3s ease-in-out infinite alternate;
}
</style>