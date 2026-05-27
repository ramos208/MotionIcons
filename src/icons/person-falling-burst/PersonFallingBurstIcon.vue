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
      <path d="M256 0c17.7 0 32 14.3 32 32l0 5.4c0 55.2-23.7 107-63.9 143.1l62.9 75.5 89 0c15.1 0 29.3 7.1 38.4 19.2l43.2 57.6c10.6 14.1 7.7 34.2-6.4 44.8s-34.2 7.7-44.8-6.4L368 320 263.2 320 376.8 459.8c11.1 13.7 9.1 33.9-4.7 45s-33.9 9.1-45-4.7L137.4 266.6c-6.1 15-9.4 31.3-9.4 48l0 69.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-69.4c0-67.4 35.4-129.9 93.2-164.6l4.6-2.8C200.4 124 224 82.4 224 37.4l0-5.4c0-17.7 14.3-32 32-32zM16 88A56 56 0 1 1 128 88 56 56 0 1 1 16 88zm376-7.9c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24s24 10.7 24 24l0 48zm104 152c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0zm-54.5-97.5c-9.4-9.4-9.4-24.6 0-33.9l33.9-33.9c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-33.9 33.9c-9.4 9.4-24.6 9.4-33.9 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: person-falling-burst
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for person-falling-burst (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-person-falling-burst {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-person-falling-burst {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-person-falling-burst 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-person-falling-burst 3s ease-in-out infinite alternate;
}
</style>