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
      <path d="M408.8 0c-27.4 0-53.6 10.9-73 30.2L318.1 48 305 34.9c-28.1-28.1-73.7-28.1-101.8 0L103 135c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L237.1 68.9c9.4-9.4 24.6-9.4 33.9 0L284.1 81.9 184 182.1 329.9 328 481.8 176.2c19.4-19.4 30.2-45.6 30.2-73 0-57-46.2-103.2-103.2-103.2zM102.4 263.7c-49.9 49.9-83.3 114-95.5 183.5L.4 483.8C-1 491.6 1.5 499.4 7 505s13.4 8 21.1 6.7l36.7-6.5c69.5-12.3 133.6-45.6 183.5-95.5L296 361.9 150.1 216 102.4 263.7z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: marker
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for marker (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-marker {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-marker {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-marker 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-marker 3s ease-in-out infinite alternate;
}
</style>