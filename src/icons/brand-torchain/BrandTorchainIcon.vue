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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15.588 15.537l-3.553 -3.537l-7.742 8.18c-.791 .85 .153 2.18 1.238 1.73l9.616 -4.096a1.398 1.398 0 0 0 .44 -2.277"/><path d="M8.412 8.464l3.553 3.536l7.742 -8.18c.791 -.85 -.153 -2.18 -1.238 -1.73l-9.616 4.098a1.398 1.398 0 0 0 -.44 2.277l-.001 -.001"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: brand-torchain
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for brand-torchain (tabler). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-brand-torchain {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-brand-torchain {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-brand-torchain 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-brand-torchain 2s ease-in-out infinite alternate;
}
</style>