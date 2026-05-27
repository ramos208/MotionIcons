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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21.648 6.808c-2.468 4.28 -4.937 8.56 -7.408 12.836c-.397 .777 -1.366 1.301 -2.24 1.356c-.962 .102 -1.7 -.402 -2.154 -1.254c-1.563 -2.684 -3.106 -5.374 -4.66 -8.064c-.943 -1.633 -1.891 -3.266 -2.83 -4.905a2.47 2.47 0 0 1 -.06 -2.45a2.493 2.493 0 0 1 2.085 -1.307c.951 -.065 1.85 .438 2.287 1.281c.697 1.19 2.043 3.83 2.55 4.682a3.919 3.919 0 0 0 3.282 2.017c2.126 .133 3.974 -.95 4.21 -3.058c0 -.164 .228 -3.178 .846 -3.962c.619 -.784 1.64 -1.155 2.606 -.893a2.484 2.484 0 0 1 1.814 2.062c.08 .581 -.041 1.171 -.343 1.674"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: brand-vivaldi
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for brand-vivaldi (tabler). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-brand-vivaldi {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-brand-vivaldi {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-brand-vivaldi 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-brand-vivaldi 3s ease-in-out infinite alternate;
}
</style>