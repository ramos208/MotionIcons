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
      <path d="M14.3332 1.99997L9.66657 1.99997M20.9849 7.49997C21.0021 7.99959 21.0029 8.49988 21.0014 8.99997M3.01506 7.49997C2.99791 7.99959 2.99703 8.49988 2.99852 8.99997M20.4629 4.74529C19.9788 3.78695 19.1975 3.00861 18.2369 2.52815M5.82027 2.49997C4.83351 2.97787 4.03077 3.76798 3.53707 4.74529" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.495 12C20.453 12 20.993 12.6377 20.993 14.5C20.993 17.0317 21.243 19.9536 18.7448 21.3971C17.7013 22 16.3005 22 13.4988 22L10.5011 22C7.69945 22 6.29861 22 5.25519 21.3971C2.757 19.9536 3.00692 17.0316 3.00692 14.5C3.00692 12.5404 3.6442 12 5.50499 12L18.495 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: flip-bottom
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for flip-bottom (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-flip-bottom {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-flip-bottom {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-flip-bottom 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-flip-bottom 2s ease-in-out infinite alternate;
}
</style>