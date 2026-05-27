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
      <path d="M169.47,56.79a8,8,0,0,0-2.94-15.73C150.42,44.08,137,52.18,128,64c-11.26-15-29.36-24-50-24a62.07,62.07,0,0,0-62,62c0,70,103.79,126.67,108.21,129a7.93,7.93,0,0,0,7.58,0h0a332.57,332.57,0,0,0,41.09-27.22,8,8,0,1,0-9.76-12.67c-10.31,7.94-20,14.37-27.12,18.82V81.7C141.84,68.75,153.94,59.7,169.47,56.79ZM120,210C93.58,193.41,32,149.71,32,102A46.06,46.06,0,0,1,78,56c18.91,0,34.86,9.78,42,25.64ZM232.55,104a8.85,8.85,0,0,1-.89,0,8,8,0,0,1-7.94-7.12,45.88,45.88,0,0,0-20.17-33.14,8,8,0,1,1,8.9-13.29,61.83,61.83,0,0,1,27.17,44.67A8,8,0,0,1,232.55,104Zm-2.09,35.62c-5.67,11.37-13.94,23-24.59,34.49a8,8,0,1,1-11.74-10.86c9.61-10.4,17-20.75,22-30.77a8,8,0,1,1,14.31,7.14Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: heart-half
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for heart-half (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-heart-half {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-heart-half {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-heart-half 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-heart-half 3s ease-in-out infinite alternate;
}
</style>