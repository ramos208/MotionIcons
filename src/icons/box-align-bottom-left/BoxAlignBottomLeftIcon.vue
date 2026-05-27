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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 13h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1"/><path d="M4 9v.01"/><path d="M4 4v.01"/><path d="M9 4v.01"/><path d="M15 4v.01"/><path d="M15 20v.01"/><path d="M20 4v.01"/><path d="M20 9v.01"/><path d="M20 15v.01"/><path d="M20 20v.01"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: box-align-bottom-left
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for box-align-bottom-left (tabler). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-box-align-bottom-left {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(-6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(-4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-box-align-bottom-left {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-box-align-bottom-left 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-box-align-bottom-left 2s ease-in-out infinite alternate;
}
</style>