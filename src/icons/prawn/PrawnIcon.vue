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
      <path d="M10.5 5C5.80558 5 2 8.80558 2 13.5C2 18.1944 5.80558 22 10.5 22C15.1944 22 19 18.1944 19 13.5C19 13.0306 18.6156 12.6411 18.1554 12.7339C16.2128 13.1256 14.75 14.842 14.75 16.9M10.5 5H17.3C18.2389 5 19.0218 5.77293 18.7902 6.6828C18.0413 9.62441 15.3747 11.8 12.2 11.8H10.5C9.09167 11.8 7.95 12.9417 7.95 14.35C7.95 15.7583 9.09167 16.9 10.5 16.9H14.75M10.5 5V8.4M14.75 16.9V17.75M5.4 20.3L8.8 16.9M3.275 9.25L7.95 13.075" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 2.00012H20.1608C21.321 2.00012 22.1912 3.0512 21.9637 4.17777C21.6689 5.63739 20.3433 6.67844 18.9189 7.00012" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.125 8.00012H14M14.25 8.00012C14.25 8.13819 14.1381 8.25012 14 8.25012C13.8619 8.25012 13.75 8.13819 13.75 8.00012C13.75 7.86205 13.8619 7.75012 14 7.75012C14.1381 7.75012 14.25 7.86205 14.25 8.00012Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: prawn
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for prawn (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-prawn {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-prawn {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-prawn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-prawn 3s ease-in-out infinite alternate;
}
</style>