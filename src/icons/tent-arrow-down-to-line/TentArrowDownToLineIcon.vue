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
      <path d="M185 121c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-31 31 0-102.1C120 2.7 109.3-8 96-8S72 2.7 72 16l0 102.1-31-31C31.6 77.7 16.4 77.7 7 87S-2.3 111.6 7 121l72 72c9.4 9.4 24.6 9.4 33.9 0l72-72zM155.8 260.6L132.1 448 32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l512 0c17.7 0 32-14.3 32-32 0-2.8-.4-5.5-1-8L548.2 260.7c-1.2-9.7-6.9-18.4-15.3-23.4L367.4 137.9c-10.2-6.1-22.9-6.1-33.1 .1L170.9 237.3c-8.3 5.1-13.9 13.7-15.1 23.3zM448 448l-97.1 0 0-149.4c0-5.9 4.7-10.6 10.6-10.6 4 0 7.7 2.3 9.5 5.9L448 448z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tent-arrow-down-to-line
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for tent-arrow-down-to-line (fontawesome). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tent-arrow-down-to-line {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, 6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, 4px) skew(0deg); }
}

@keyframes motion-ai-idle-tent-arrow-down-to-line {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tent-arrow-down-to-line 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tent-arrow-down-to-line 3s ease-in-out infinite alternate;
}
</style>