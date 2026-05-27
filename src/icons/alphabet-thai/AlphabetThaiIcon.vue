<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M6 21V14C6 13.371 6.24724 12.8125 6.74172 12.248C7.22967 11.671 8.25411 11.2708 9 11.0472C9.04786 11.0329 9.05246 10.9458 9.00628 10.9257C8.3551 10.6418 7.06568 10.2569 6.5674 9.59877C6.55409 9.58118 6.54743 9.57239 6.54632 9.57095C6.54521 9.5695 6.50377 9.5164 6.4209 9.41019C6 8.87077 6 7.80847 6 7.80847C6 5.93718 7.27312 4.43992 8.75497 3.69556C9.65563 3.23185 10.7241 3 11.9603 3C13.0375 3 14.0353 3.20161 14.9536 3.60484C16.9456 4.43574 18 6.43605 18 8.71573V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: alphabet-thai
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for alphabet-thai (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-alphabet-thai {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-alphabet-thai {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-alphabet-thai 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-alphabet-thai 2s ease-in-out infinite alternate;
}
</style>