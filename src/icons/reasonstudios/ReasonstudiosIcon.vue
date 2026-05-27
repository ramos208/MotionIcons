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
      <path d="M2.49 5.114l8.3-4.79a2.421 2.421 0 012.39-.017l.03.017 8.299 4.79c.74.427 1.2 1.212 1.211 2.065V16.79c0 .854-.451 1.645-1.184 2.08l-.027.016-8.299 4.79a2.42 2.42 0 01-2.39.017l-.03-.017-8.3-4.79a2.421 2.421 0 01-1.21-2.065V7.21c0-.855.45-1.645 1.184-2.08l.026-.016 8.3-4.79zM12 4.026L5.092 8.013v7.974L12 19.974V12l6.908-3.987z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: reasonstudios
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for reasonstudios (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-reasonstudios {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-reasonstudios {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-reasonstudios 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-reasonstudios 3s ease-in-out infinite alternate;
}
</style>