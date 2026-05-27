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
      <path d="M64 0c23.7 0 44.4 12.9 55.4 32l273.1 0c11.1-19.1 31.7-32 55.4-32 35.3 0 64 28.7 64 64 0 34-26.5 61.8-60 63.9l-2.1 2.9-71.5 99.1c3.6 8 5.6 16.9 5.6 26.2s-2 18.2-5.6 26.2l2.2 3.1 69.3 96 2.1 2.9c33.5 2.1 60 29.9 60 63.9 0 35.3-28.7 64-64 64-23.7 0-44.4-12.9-55.4-32l-273.1 0c-11.1 19.1-31.7 32-55.4 32-35.3 0-64-28.7-64-64 0-23.7 12.9-44.4 32-55.4l0-273.1C12.9 108.4 0 87.7 0 64 0 28.7 28.7 0 64 0zM394.2 413.4l-65.5-90.6-2.2-3.1c-2.1 .2-4.3 .3-6.5 .3-35.3 0-64-28.7-64-64s28.7-64 64-64c2.2 0 4.4 .1 6.5 .3l67.7-93.7c-.6-.9-1.1-1.7-1.6-2.6L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l273.1 0c.5-.9 1.1-1.8 1.6-2.6z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: draw-polygon
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for draw-polygon (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-draw-polygon {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-draw-polygon {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-draw-polygon 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-draw-polygon 3s ease-in-out infinite alternate;
}
</style>