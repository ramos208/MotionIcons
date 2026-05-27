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
      <path d="m5.99,1.62a8.54,8.54 0 0 0 -2.54,6.83c0.35,4.4 4.51,7.99 8.28,7.99c3.5,0 4.88,-3.06 4.54,-5.14a4.32,4.32 0 0 0 -0.95,-2.07c0.63,0.34 1.24,0.77 1.81,1.3c1.52,1.41 2.44,3.23 2.58,5.1c0.33,4.13 -2.73,8.37 -7.85,8.37c-1.69,0 -3.48,-0.43 -4.98,-1.14c-4.06,-1.92 -6.88,-6.06 -6.88,-10.86c0,-4.43 2.41,-8.3 5.99,-10.38zm6.15,-1.62c1.69,0 3.48,0.43 4.98,1.14a12,12 0 0 1 6.88,10.86c0,4.43 -2.41,8.3 -5.99,10.38a8.54,8.54 0 0 0 2.54,-6.83c-0.35,-4.4 -4.51,-7.99 -8.28,-7.99c-3.5,0 -4.88,3.06 -4.54,5.14a4.3,4.3 0 0 0 0.96,2.07a8.72,8.72 0 0 1 -1.81,-1.3c-1.52,-1.41 -2.44,-3.23 -2.59,-5.1c-0.33,-4.13 2.73,-8.37 7.85,-8.37z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: deepmind
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for deepmind (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-deepmind {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-deepmind {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-deepmind 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-deepmind 3s ease-in-out infinite alternate;
}
</style>