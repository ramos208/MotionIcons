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
      <path d="M31 105c-9.4-9.4-9.4-24.6 0-33.9L103-1c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-31 31 67.7 0 0 0 338.3 0c35.3 0 64 28.7 64 64l0 178.2-5.1-5.1c-28.1-28.1-73.7-28.1-101.8 0-27.2 27.2-28.1 70.6-2.8 98.9l67.7 0-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-406.1 0c-35.3 0-64-28.7-64-64l0-178.2 5.1 5.1c28.1 28.1 73.7 28.1 101.8 0 27.2-27.2 28.1-70.6 2.8-98.9l-67.7 0 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L31 105zM416 256a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm88-64.5c4.4 .5 8-3.1 8-7.5l0-48c0-4.4-3.6-8-8-8l-48 0c-4.4 0-8.1 3.6-7.5 8 3.6 29 26.6 51.9 55.5 55.5zm-368 129c-4.4-.5-8 3.1-8 7.5l0 48c0 4.4 3.6 8 8 8l48 0c4.4 0 8.1-3.6 7.5-8-3.6-29-26.6-51.9-55.5-55.5z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: money-bill-transfer
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for money-bill-transfer (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-money-bill-transfer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-money-bill-transfer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-money-bill-transfer 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-money-bill-transfer 3s ease-in-out infinite alternate;
}
</style>