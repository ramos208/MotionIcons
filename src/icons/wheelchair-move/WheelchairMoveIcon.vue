<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-kinetic-trail']"
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
      <path d="M312 56a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zM205.4 124.1c-6.4-5.2-15.6-4.7-21.4 1.1l-33.4 33.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L138.8 80c29-29 75.2-31.4 107-5.5l81.3 66c21.4 17.4 23.8 49.2 5.2 69.5l-41.8 46 98 0c30.3 0 53 27.7 47.1 57.4L407.4 454.3c-3.5 17.3-20.3 28.6-37.7 25.1s-28.6-20.3-25.1-37.7L369 320 316.8 320c2.1 10.3 3.2 21 3.2 32 0 88.4-71.6 160-160 160S0 440.4 0 352 71.6 192 160 192c6 0 11.9 .3 17.8 1l50.4-50.4-22.7-18.5zM160 448a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: wheelchair-move
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for wheelchair-move (fontawesome). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-wheelchair-move {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(4.5px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(3px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-wheelchair-move {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-wheelchair-move 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-wheelchair-move 3s ease-in-out infinite alternate;
}
</style>