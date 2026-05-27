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
      <path d="M9.75001 3.10408V8.81802C9.75001 9.41476 9.51295 9.98705 9.091 10.409L5.00001 14.5M9.75001 3.10408C9.49886 3.12743 9.24884 3.15465 9.00001 3.18568M9.75001 3.10408C10.4908 3.03521 11.2413 3 12 3C12.7587 3 13.5093 3.03521 14.25 3.10408M14.25 3.10408V8.81802C14.25 9.41476 14.4871 9.98705 14.909 10.409L19.8 15.3M14.25 3.10408C14.5011 3.12743 14.7512 3.15465 15 3.18568M19.8 15.3L18.2299 15.6925C16.1457 16.2136 13.9216 15.9608 12 15C10.0784 14.0392 7.85435 13.7864 5.7701 14.3075L5.00001 14.5M19.8 15.3L21.2022 16.7022C22.4341 17.9341 21.8527 20.0202 20.1354 20.3134C17.4911 20.7649 14.773 21 12 21C9.227 21 6.50891 20.7649 3.86459 20.3134C2.14728 20.0202 1.56591 17.9341 2.7978 16.7022L5.00001 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: beaker
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for beaker (heroicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-beaker {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-beaker {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-beaker 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-beaker 3s ease-in-out infinite alternate;
}
</style>