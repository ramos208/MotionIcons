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
      <path d="M9.66676 22L14.3334 22M3.01509 16.5C2.99793 16.0004 2.99705 15.5001 2.99855 15M20.9849 16.5C21.0021 16.0004 21.003 15.5001 21.0015 15M3.53709 19.2547C4.02122 20.213 4.80249 20.9914 5.76305 21.4718M18.1797 21.5C19.1665 21.0221 19.9692 20.232 20.4629 19.2547" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.50502 12C3.64422 12 3.00695 11.4596 3.00695 9.5C3.00695 6.96832 2.75702 4.04633 5.25521 2.60289C6.29863 2 7.69947 2 10.5012 2L13.4988 2C16.3005 2 17.7014 2 18.7448 2.60289C21.243 4.04633 20.9931 6.96832 20.9931 9.5C20.9931 11.3622 20.453 12 18.495 12L5.50502 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: flip-top
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for flip-top (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-flip-top {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-flip-top {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-flip-top 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-flip-top 3s ease-in-out infinite alternate;
}
</style>