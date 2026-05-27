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
      <path d="M242.7 80L334 80c-10.7-24.6-29.5-44.9-52.9-57.6L242.7 80zm-.9-70.7C236 8.4 230 8 224 8 174.8 8 132.5 37.6 114 80l80.6 0 47.1-70.7zM224 248c66.3 0 120-53.7 120-120l-240 0c0 66.3 53.7 120 120 120zM98.7 341.8C49.3 370.2 16 423.5 16 484.6 16 499.7 28.3 512 43.4 512l151 0-95.8-170.2zm45.1-17.7l42.7 75.9 85.5 0c44.2 0 80 35.8 80 80 0 11.4-2.4 22.2-6.7 32l59.2 0c15.1 0 27.4-12.3 27.4-27.4 0-90.9-73.7-164.6-164.6-164.6l-86.9 0c-12.6 0-24.9 1.4-36.7 4.1zM213.5 448l36 64 22.5 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-58.5 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: user-injured
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for user-injured (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-user-injured {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-user-injured {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-user-injured 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-user-injured 3s ease-in-out infinite alternate;
}
</style>