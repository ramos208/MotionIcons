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
      <path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L64.72,70.29C48.32,95,40,119.78,40,144a88,88,0,0,0,149.21,63.22l12.87,14.16a8,8,0,1,0,11.84-10.76ZM128,216a72.08,72.08,0,0,1-72-72c0-19.93,6.68-40.57,19.86-61.46L178.43,195.36A71.84,71.84,0,0,1,128,216ZM90,50.51a8,8,0,0,1-.27-11.31A247.8,247.8,0,0,1,123.41,9.45a8,8,0,0,1,9.18,0C136,11.83,216,68.7,216,144a88.08,88.08,0,0,1-3.15,23.4,8,8,0,0,1-7.71,5.88A7.79,7.79,0,0,1,203,173a8,8,0,0,1-5.59-9.83A72.55,72.55,0,0,0,200,144c0-57.24-55.48-105-72-118a252.23,252.23,0,0,0-26.66,24.23A8,8,0,0,1,90,50.51Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: drop-slash
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for drop-slash (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-drop-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-drop-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-drop-slash 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-drop-slash 3s ease-in-out infinite alternate;
}
</style>