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
      <path d="M112-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0C94.3 32 80 17.7 80 0s14.3-32 32-32zM16 144c0-35.3 28.7-64 64-64l160 0c35.3 0 64 28.7 64 64 0 24.1-13.3 45.1-33 56 19.7 10.9 33 31.9 33 56s-13.3 45.1-33 56c19.7 10.9 33 31.9 33 56s-13.3 45.1-33 56c19.7 10.9 33 31.9 33 56 0 35.3-28.7 64-64 64L80 544c-35.3 0-64-28.7-64-64 0-24.1 13.3-45.1 33-56-19.7-10.9-33-31.9-33-56s13.3-45.1 33-56c-19.7-10.9-33-31.9-33-56s13.3-45.1 33-56c-19.7-10.9-33-31.9-33-56z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bottle-water
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for bottle-water (fontawesome). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bottle-water {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bottle-water {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bottle-water 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-bottle-water 2s ease-in-out infinite alternate;
}
</style>