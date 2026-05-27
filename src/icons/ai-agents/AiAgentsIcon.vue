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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M6 5a1 1 0 1 0 -2 0a1 1 0 0 0 2 0"/><path d="M18 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M4 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M11 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M18 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M11 19a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ai-agents
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for ai-agents (tabler). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ai-agents {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ai-agents {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ai-agents 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-ai-agents 2s ease-in-out infinite alternate;
}
</style>