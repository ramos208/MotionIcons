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
      <line x1="5" y1="3" x2="19" y2="3"/><line x1="3" y1="5" x2="3" y2="19"/><line x1="21" y1="5" x2="21" y2="19"/><line x1="9" y1="21" x2="10" y2="21"/><line x1="14" y1="21" x2="15" y2="21"/><path d="M 3 5 A2 2 0 0 1 5 3"/><path d="M 19 3 A2 2 0 0 1 21 5"/><path d="M 5 21 A2 2 0 0 1 3 19"/><path d="M 21 19 A2 2 0 0 1 19 21"/><circle cx="8.5" cy="8.5" r="1.5"/><line x1="9.56066" y1="9.56066" x2="12" y2="12"/><line x1="17" y1="17" x2="14.82" y2="14.82"/><circle cx="8.5" cy="15.5" r="1.5"/><line x1="9.56066" y1="14.43934" x2="17" y2="7"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: scissors-square-dashed-bottom
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for scissors-square-dashed-bottom (lucide). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-scissors-square-dashed-bottom {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-scissors-square-dashed-bottom {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-scissors-square-dashed-bottom 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-scissors-square-dashed-bottom 2s ease-in-out infinite alternate;
}
</style>