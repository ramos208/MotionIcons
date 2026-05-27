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
      <path d="M531.2-22.4L572 32 616 32c13.3 0 24 10.7 24 24s-10.7 24-24 24l-56 0c-7.6 0-14.7-3.6-19.2-9.6l-24.1-32.1-47 99.9c-3.7 7.8-11.3 13.1-19.9 13.7s-16.9-3.4-21.7-10.6L387.2 80 344 80c-13.3 0-24-10.7-24-24s10.7-24 24-24l56 0c8 0 15.5 4 20 10.7l24.4 36.6 45.9-97.5c3.6-7.6 10.9-12.8 19.3-13.7s16.6 2.7 21.6 9.5zM320 160c0-17.7 14.3-32 32-32l9.5 0 26.6 39.9c14.4 21.6 39.3 33.8 65.2 31.9s48.8-17.6 59.8-41.1L527 129.2c45.9 7.2 81 46.9 81 94.8l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64-448 0 0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32S96 46.3 96 64l0 224 224 0 0-128zM144 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bed-pulse
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bed-pulse (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bed-pulse {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bed-pulse {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bed-pulse 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bed-pulse 3s ease-in-out infinite alternate;
}
</style>