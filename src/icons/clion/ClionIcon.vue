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
      <path d="M0 0v24h24V0H0zm7.041 3a5.049 5.049 0 0 1 .219 0c1.86 0 3 .6 3.9 1.56L9.78 6.18C9 5.46 8.22 5.04 7.26 5.04c-1.68 0-2.88 1.38-2.88 3.12 0 1.68 1.2 3.12 2.88 3.12 1.14 0 1.86-.48 2.64-1.14l1.38 1.38c-1.02 1.08-2.16 1.8-4.08 1.8a5.1 5.1 0 0 1-5.1-5.16A5.049 5.049 0 0 1 7.04 3zm5.738.12H15v8.1h4.32v1.86h-6.54V3.12zM2.28 19.5h9V21h-9v-1.5Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: clion
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for clion (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-clion {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-clion {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-clion 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-clion 3s ease-in-out infinite alternate;
}
</style>