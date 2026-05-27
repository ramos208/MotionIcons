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
      <path d="M184,20a12,12,0,1,1,12,12A12,12,0,0,1,184,20ZM164.12,73.23c7.26,44.25,4.35,75.76-8.66,93.66A39.94,39.94,0,0,1,128,183.42V232h16a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h16V183.42a40,40,0,0,1-27.46-16.53c-13-17.9-15.91-49.41-8.65-93.66A451,451,0,0,1,90.1,13.53,8,8,0,0,1,97.71,8H142.3a8,8,0,0,1,7.61,5.53A451,451,0,0,1,164.12,73.23ZM93.8,64h52.4c-3-15.58-6.72-29.81-9.78-40H103.59C100.53,34.19,96.83,48.42,93.8,64ZM149,80H91c-4.49,30-5.14,61.54,6.45,77.49C102.63,164.56,110,168,120,168s17.38-3.44,22.52-10.51C154.1,141.54,153.46,110,149,80Zm71-40a12,12,0,1,0,12,12A12,12,0,0,0,220,40ZM196,88a12,12,0,1,0,12,12A12,12,0,0,0,196,88Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: champagne
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for champagne (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-champagne {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-champagne {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-champagne 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-champagne 3s ease-in-out infinite alternate;
}
</style>