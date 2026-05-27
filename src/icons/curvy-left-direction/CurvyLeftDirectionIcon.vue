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
      <path d="M3.99709 15.0001C3.99709 15.0001 1.99805 13.5271 1.99805 13.0001C1.99805 12.473 3.99711 11.0001 3.99711 11.0001M2.2229 12.8675C3.63456 13.1574 6.28054 13.27 7.59106 10.8163C8.13439 9.95268 8.03253 8.50668 8.03253 6.86106C8.06633 6.19025 8.63778 4.96995 10.0699 5.00057C11.5021 5.03118 11.9723 6.20733 12.0284 6.79158V16.9022C12.0138 17.7539 12.5076 18.9993 14.0239 18.9993C15.5044 18.9993 16.0839 17.6872 15.9562 16.7036C15.6104 14.0396 16.4187 11.2472 19.9189 11.003H22.0029" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: curvy-left-direction
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for curvy-left-direction (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-curvy-left-direction {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(-6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(-4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-curvy-left-direction {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-curvy-left-direction 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-curvy-left-direction 3s ease-in-out infinite alternate;
}
</style>