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
      <path d="M373.5 27.1c15-17.2 36.7-27.1 59.6-27.1 43.6 0 79 35.4 79 79 0 22.8-9.9 44.6-27.1 59.6L283.7 313.8 273 303 209 239 198.2 228.3 373.5 27.1zM161.1 259C162 260 188 286 239 337l13.9 13.9-17.1 74.2c-3.9 17.1-16.9 30.7-33.8 35.4l-169.8 47.5 92.3-92.3c1.2 .1 2.3 .2 3.5 .2 17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32c0 1.2 .1 2.4 .2 3.5L3.9 479.8 51.5 310c4.7-16.9 18.3-29.9 35.4-33.8L161.1 259z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pen-fancy
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pen-fancy (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pen-fancy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pen-fancy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pen-fancy 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pen-fancy 3s ease-in-out infinite alternate;
}
</style>