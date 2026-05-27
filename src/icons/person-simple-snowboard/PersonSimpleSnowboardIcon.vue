<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M164,80a28,28,0,1,0-28-28A28,28,0,0,0,164,80Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,40Zm54.25,72.32-136-40a8,8,0,1,0-4.52,15.35l40.85,12L85.07,150,40.34,137a25.18,25.18,0,1,0-14.13,48.34L183.65,231a25.88,25.88,0,0,0,7.14,1,25.17,25.17,0,0,0,7-49.36l-50.89-14.75,19.75-29.44a8,8,0,0,0-4.42-12.14l-35.33-10.23,7.78-11.67,79.07,23.26a8,8,0,0,0,4.51-15.35ZM200,206.81a9.07,9.07,0,0,1-3.67,7.3,9.27,9.27,0,0,1-8.22,1.5L30.67,170a9.24,9.24,0,0,1-6.67-8.8,9.06,9.06,0,0,1,3.66-7.3,9.26,9.26,0,0,1,8.23-1.5L193.33,198A9.23,9.23,0,0,1,200,206.81Zm-52.75-68.18-16.49,24.59-29.58-8.58,16.4-24.6Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: person-simple-snowboard
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for person-simple-snowboard (phosphor). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-person-simple-snowboard {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-person-simple-snowboard {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-person-simple-snowboard 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-person-simple-snowboard 3s ease-in-out infinite alternate;
}
</style>