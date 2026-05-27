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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.375 0 .711 .231 .846 .581l1.65 4.29a2.85 2.85 0 0 0 1.632 1.633l4.291 1.65a.906 .906 0 0 1 0 1.692l-4.29 1.65a2.84 2.84 0 0 0 -1.633 1.632l-1.65 4.291a.906 .906 0 0 1 -1.692 0l-1.65 -4.29a2.84 2.84 0 0 0 -1.632 -1.633l-4.291 -1.65a.906 .906 0 0 1 0 -1.692l4.29 -1.65a2.84 2.84 0 0 0 1.633 -1.632l1.65 -4.291a.91 .91 0 0 1 .846 -.581"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: sparkle-2
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for sparkle-2 (tabler). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-sparkle-2 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-sparkle-2 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-sparkle-2 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-sparkle-2 2s ease-in-out infinite alternate;
}
</style>