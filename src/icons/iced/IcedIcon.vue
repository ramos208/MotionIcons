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
      <path d="m22.605 0-6.023 6.123 1.313 1.291 6.023-6.123L22.605 0zm-5.638.047L7.932 9.232l1.312 1.29 9.035-9.184L16.967.047zM9.699 1.775c-2.337 2.377-3.477 3.528-4.617 4.68a1972.17 1972.17 0 0 0-4.621 4.686l-.379.384 2.867 9.772L12.762 24l10.511-10.5-1.3-1.3-9.02 9.007-1.908-6.83 5.559-5.65-1.311-1.291-5.559 5.65-6.845-1.79C4.506 9.655 5.449 8.703 6.39 7.75c1.14-1.153 2.282-2.305 4.62-4.684L9.7 1.776zM21.605 6.73l-1.53 1.53-6.458 6.565 1.313 1.291 6.45-6.558 1.528-1.528-1.303-1.3zM2.46 13.088l6.812 1.781 1.895 6.783-6.738-1.857-1.969-6.707z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: iced
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for iced (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-iced {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-iced {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-iced 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-iced 3s ease-in-out infinite alternate;
}
</style>