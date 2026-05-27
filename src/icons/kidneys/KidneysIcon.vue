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
      <path d="M9.98556 6C10.1428 4.59395 9.00449 3 6.57134 3C4.04666 3 1.99999 5.46243 1.99999 8.5C1.99999 11.5376 3.53887 14 6.06355 14C7.67995 14 8.53551 12.7459 8.35578 11.6589" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7 8C8.50006 7.9996 10.4999 8.4957 10.4999 11.64C10.4999 15.8 8.49942 17.36 10.0005 21M17 8C15.4999 7.9996 13.5001 8.4957 13.5001 11.64C13.5001 15.8 15.5006 17.36 13.9995 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.61035 6C6.81406 6.57143 7.16038 7.94286 6.91592 8.85714C6.81407 9.2381 6.48829 10 6 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.0144 6C13.8572 4.59395 14.9955 3 17.4287 3C19.9533 3 22 5.46243 22 8.5C22 11.5376 20.4611 14 17.9364 14C16.2406 14 15.3822 12.6196 15.6783 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.3897 6C17.1859 6.57143 16.8396 7.94286 17.0841 8.85714C17.1859 9.2381 17.5117 10 18 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: kidneys
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for kidneys (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-kidneys {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-kidneys {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-kidneys 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-kidneys 3s ease-in-out infinite alternate;
}
</style>