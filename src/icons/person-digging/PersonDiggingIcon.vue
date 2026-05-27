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
      <path d="M208 40a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zM10.5 181.3c5.9-11.9 20.3-16.7 32.2-10.7l24.6 12.3 12.2-20.4c18.9-31.5 53.2-50.5 89.6-50.5 46.2 0 87.7 30.5 100.5 75.4l32.2 112.7 92.9 46.4 25.8-43c5.8-9.6 16.2-15.5 27.4-15.5s21.7 5.9 27.4 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2S555.5 512 544 512l-192 0c-11.5 0-22.2-6.2-27.8-16.2s-5.5-22.3 .4-32.2L370 387.8 21.3 213.5c-11.9-5.9-16.7-20.3-10.7-32.2zM94.3 307.4l112 56c10.8 5.4 17.7 16.5 17.7 28.6l0 88c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-68.2-61.3-30.7-36.3 109c-5.6 16.8-23.7 25.8-40.5 20.2S-3.9 486.6 1.7 469.9l48-144c2.9-8.8 9.5-15.9 18.1-19.4s18.3-3.2 26.6 .9z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: person-digging
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for person-digging (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-person-digging {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-person-digging {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-person-digging 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-person-digging 3s ease-in-out infinite alternate;
}
</style>