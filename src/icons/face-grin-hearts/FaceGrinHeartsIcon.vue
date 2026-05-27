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
      <path d="M256 512c141.4 0 256-114.6 256-256 0-23.3-3.1-45.9-8.9-67.3 5.5-13.5 8.9-28.4 8.9-44.7 0-53-43-96-96-96l-2.9 0c-2.5 0-5 .1-7.4 .3-42.1-30.4-93.8-48.3-149.7-48.3S148.4 17.9 106.3 48.3c-2.5-.2-4.9-.3-7.4-.3L96 48c-53 0-96 43-96 96 0 16.3 3.5 31.2 8.9 44.7-5.8 21.4-8.9 44-8.9 67.3 0 141.4 114.6 256 256 256zM386.7 324.9c11.9-3.7 23.9 6.3 19.6 18.1-22.4 61.3-81.3 105.1-150.3 105.1S128.1 404.2 105.7 342.9c-4.3-11.8 7.7-21.8 19.6-18.1 39.2 12.2 83.7 19.1 130.7 19.1s91.5-6.9 130.7-19.1zM322.9 96c13.5 0 26.5 5.4 36 14.9l9.1 9.1 9.1-9.1c9.5-9.5 22.5-14.9 36-14.9l2.9 0c26.5 0 48 21.5 48 48 0 53.4-66.9 95.7-89 108.2-4.4 2.5-9.6 2.5-14 0-22.1-12.5-89-54.8-89-108.2 0-26.5 21.5-48 48-48l2.9 0zm-188 14.9l9.1 9.1 9.1-9.1c9.5-9.5 22.5-14.9 36-14.9l2.9 0c26.5 0 48 21.5 48 48 0 53.4-66.9 95.7-89 108.2-4.4 2.5-9.6 2.5-14 0-22.1-12.5-89-54.8-89-108.2 0-26.5 21.5-48 48-48l2.9 0c13.5 0 26.5 5.4 36 14.9z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: face-grin-hearts
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for face-grin-hearts (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-face-grin-hearts {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-face-grin-hearts {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-face-grin-hearts 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-face-grin-hearts 3s ease-in-out infinite alternate;
}
</style>