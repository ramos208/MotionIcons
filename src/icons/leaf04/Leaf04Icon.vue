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
      <path d="M8.15658 15.8434C7.07994 15.8362 5.59735 15.5728 4.43407 14.4096C2.3623 12.3378 3.14497 9.25318 3.14497 9.25318C3.14497 9.25318 4.76016 8.84345 6.43811 9.40194C6.42585 9.31006 6.41557 9.217 6.4075 9.12271C6.39316 8.9551 6.38553 8.78381 6.38559 8.60857C6.38553 5.00308 9.59044 3 9.59044 3C9.59044 3 11.5931 4.25174 12.4323 6.55719C15.2245 4.60372 18.6141 5.38589 18.6141 5.38589C18.6141 5.38589 19.3963 8.77553 17.4428 11.5677C19.7483 12.4069 21 14.4096 21 14.4096C21 14.4096 18.9969 17.6145 15.3914 17.6144C15.1177 17.6144 14.8531 17.596 14.5981 17.5619C15.1565 19.2398 14.7468 20.855 14.7468 20.855C14.7468 20.855 11.6622 21.6377 9.59044 19.5659" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3 21L13 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: leaf04
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for leaf04 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-leaf04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-leaf04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-leaf04 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-leaf04 3s ease-in-out infinite alternate;
}
</style>