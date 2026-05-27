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
      <path d="M13.717 5.245v6.613a3.309 3.309 0 0 0 3.306-3.307 3.31 3.31 0 0 0-3.306-3.306Zm-4.594 0h-3.45v6.613h3.455a3.309 3.309 0 0 0 3.306-3.307 3.312 3.312 0 0 0-3.311-3.306Zm11.448 9.915v-1.507a8.578 8.578 0 0 1-2.714 2.379l2.714 4.792v-2.878L24 24h-7.574l-2.709-4.789V24h-1.656l-3.907-6.897H5.673V24H0V0h9.123a8.5 8.5 0 0 1 4.589 1.337V0a8.551 8.551 0 0 1 6.859 3.441V1.939a8.527 8.527 0 0 1 3.133 6.612 8.516 8.516 0 0 1-3.133 6.609Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: remedyentertainment
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for remedyentertainment (simpleicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-remedyentertainment {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-remedyentertainment {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-remedyentertainment 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-remedyentertainment 2s ease-in-out infinite alternate;
}
</style>