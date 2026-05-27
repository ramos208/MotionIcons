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
      <path d="M3.99803 12.9996C3.99803 12.9996 1.99805 11.5266 1.99805 10.9996C1.99805 10.4725 3.99805 8.99965 3.99805 8.99965M20.0039 15.0001C20.0039 15.0001 22.0029 13.5271 22.0029 13.0001C22.0029 12.473 20.0039 11.0001 20.0039 11.0001M21.7781 12.8675C20.3664 13.1574 17.7204 13.27 16.4099 10.8163C15.8666 9.95268 15.9684 8.50668 15.9684 6.86106C15.9346 6.19025 15.3632 4.96995 13.931 5.00057C12.4989 5.03118 12.0286 6.20733 11.9725 6.79158V16.9022C11.9871 17.7539 11.4934 18.9993 9.97701 18.9993C8.49653 18.9993 7.91702 17.6872 8.04471 16.7036C8.39056 14.0396 7.5823 11.2472 4.08206 11.003H1.99805" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: curvy-left-right-direction
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for curvy-left-right-direction (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-curvy-left-right-direction {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-curvy-left-right-direction {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-curvy-left-right-direction 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-curvy-left-right-direction 3s ease-in-out infinite alternate;
}
</style>