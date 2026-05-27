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
      <path d="M6.99639 9.5013C6.99639 10.3272 6.32519 10.9967 5.49722 10.9967C4.66925 10.9967 3.99805 10.3272 3.99805 9.5013C3.99805 8.67539 4.66925 8.00586 5.49722 8.00586C6.32519 8.00586 6.99639 8.67539 6.99639 9.5013Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.96586 3L9.82439 8.77139C9.85322 8.96518 9.86769 9.16082 9.86769 9.35673V9.4375C9.86769 9.64662 9.84571 9.85516 9.80209 10.0597L9.75228 10.2933C9.73524 10.3732 9.70843 10.4507 9.67245 10.5241L6.99197 15.989M10.4242 8.75435L15.9422 11.0591L16.5007 11.3014C16.8389 11.4481 17.0967 11.7338 17.2076 12.0846L20.002 20.999M9.5094 11.9597L14.6342 13.9708M14.6342 13.9708L12.0185 20.8732M14.6342 13.9708L16.8165 11.806" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: workout-gymnastics
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for workout-gymnastics (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-workout-gymnastics {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-workout-gymnastics {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-workout-gymnastics 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-workout-gymnastics 3s ease-in-out infinite alternate;
}
</style>