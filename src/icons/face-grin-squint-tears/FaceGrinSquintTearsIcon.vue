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
      <path d="M560 35.4c0 25.6-18.8 47.3-44.1 50.9L469.1 93c-10.6 1.5-19.6-7.5-18.1-18.1l6.7-46.7C461.3 2.8 483-16 508.6-16 537-16 560 7 560 35.4zM403.5 68.1c-6 42.2 30.2 78.4 72.4 72.4l37.8-5.4C565.7 232 550.8 355.3 469 437s-205 96.6-301.9 44.7l5.4-37.8c6-42.2-30.2-78.4-72.4-72.4l-37.8 5.4C10.3 280 25.2 156.7 107 75S312-21.7 408.9 30.3l-5.4 37.8zM417.8 201c-19.1 36.4-45.6 72.7-78.9 106s-69.6 59.8-106 78.9c-11.1 5.8-12.4 21.4-1.1 26.6 59.2 27.5 131.8 16.8 180.6-32s59.5-121.4 32-180.6c-5.3-11.3-20.8-10-26.6 1.1zM113.9 270.6c1.7 8 9 13.4 17.1 12.7l43.1-3.9-3.9 43.1c-.7 8.1 4.7 15.5 12.7 17.1s15.9-2.9 18.4-10.6l28-84.6c1.9-5.7 .4-12.1-3.9-16.3s-10.6-5.8-16.3-3.9l-84.6 28c-7.7 2.6-12.3 10.5-10.6 18.5zM315.2 99.1c.7-8.1-4.7-15.5-12.7-17.1s-15.9 2.9-18.5 10.6l-28 84.6c-1.9 5.7-.4 12.1 3.9 16.3s10.6 5.8 16.3 3.9l84.6-28c7.7-2.6 12.3-10.5 10.6-18.4s-9-13.4-17.1-12.7l-43.1 3.9 3.9-43.1zM60.1 425.7l46.7-6.7c10.6-1.5 19.6 7.5 18.1 18.1l-6.7 46.7C114.7 509.2 93 528 67.4 528 39 528 16 505 16 476.6 16 451 34.8 429.3 60.1 425.7z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: face-grin-squint-tears
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for face-grin-squint-tears (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-face-grin-squint-tears {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-face-grin-squint-tears {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-face-grin-squint-tears 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-face-grin-squint-tears 3s ease-in-out infinite alternate;
}
</style>