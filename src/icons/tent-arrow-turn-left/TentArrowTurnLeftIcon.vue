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
      <path d="M-.5 113l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 350.1 0c22.1 0 40 17.9 40 40l0 24c0 13.3 10.7 24 24 24s24-10.7 24-24l0-24c0-48.6-39.4-88-88-88l-350.1 0 31-31c9.4-9.4 9.4-24.6 0-33.9S80.9-2.3 71.5 7L-.5 79c-9.4 9.4-9.4 24.6 0 33.9zM60.3 292.6L37.1 476c-2.4 19.1 12.5 36 31.7 36l154.5 0c17.7 0 32-14.3 32-32l0-117.4c0-5.9 4.7-10.6 10.6-10.6 4 0 7.7 2.3 9.5 5.9l68.2 136.5c5.4 10.8 16.5 17.7 28.6 17.7l71.9 0c19.3 0 34.2-16.9 31.7-36L452.7 292.7c-1.2-9.7-6.9-18.4-15.3-23.4L271.9 169.9c-10.2-6.1-22.9-6.1-33.1 .1L75.4 269.3c-8.3 5.1-13.9 13.7-15.1 23.3z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tent-arrow-turn-left
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for tent-arrow-turn-left (fontawesome). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tent-arrow-turn-left {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(-6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(-4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tent-arrow-turn-left {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tent-arrow-turn-left 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tent-arrow-turn-left 3s ease-in-out infinite alternate;
}
</style>