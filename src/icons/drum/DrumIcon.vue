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
      <path d="M501.2 76.1c11.1-7.3 14.2-22.1 6.9-33.2s-22.1-14.2-33.2-6.9L370.2 104.5C335.8 98.7 297 96 256 96 114.6 96 0 128 0 208L0 368c0 31.3 27.4 58.8 72 78.7L72 344c0-13.3 10.7-24 24-24s24 10.7 24 24l0 119.4c33 8.9 71.1 14.5 112 16.1L232 376c0-13.3 10.7-24 24-24s24 10.7 24 24l0 103.5c40.9-1.6 79-7.2 112-16.1L392 344c0-13.3 10.7-24 24-24s24 10.7 24 24l0 102.7c44.6-19.9 72-47.4 72-78.7l0-160c0-41.1-30.2-69.5-78.8-87.4l67.9-44.5zM307.4 145.6l-64.6 42.3c-11.1 7.3-14.2 22.1-6.9 33.2s22.1 14.2 33.2 6.9l111.1-72.8c14.7 3.2 27.9 7 39.4 11.5 38.8 15.1 44.4 30.6 44.4 41.3 0 .8-2.7 17.2-46 35.9-38.9 16.8-96 28.1-162 28.1S132.9 260.7 94 243.9c-43.3-18.7-46-35.1-46-35.9 0-10.6 5.6-26.2 44.4-41.3 38.3-14.9 95.4-22.7 163.6-22.7 18 0 35.1 .5 51.4 1.6z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: drum
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for drum (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-drum {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-drum {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-drum 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-drum 3s ease-in-out infinite alternate;
}
</style>