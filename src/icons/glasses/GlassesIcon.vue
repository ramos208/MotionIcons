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
      <path d="M143.3 96c-14 0-26.5 9.2-30.6 22.6L70.4 256 224 256c17.7 0 32 14.3 32 32l64 0c0-17.7 14.3-32 32-32l153.6 0-42.3-137.4C459.2 105.2 446.8 96 432.7 96L400 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l32.7 0c42.1 0 79.4 27.5 91.8 67.8l45.4 147.5c4.1 13.2 6.1 26.9 6.1 40.7l0 96c0 53-43 96-96 96l-64 0c-53 0-96-43-96-96l0-32-64 0 0 32c0 53-43 96-96 96l-64 0c-53 0-96-43-96-96l0-96c0-13.8 2.1-27.5 6.1-40.7L51.5 99.8C63.9 59.5 101.1 32 143.3 32L176 32c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32.7 0zM64 320l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64-128 0zm416 96c17.7 0 32-14.3 32-32l0-64-128 0 0 64c0 17.7 14.3 32 32 32l64 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: glasses
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for glasses (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-glasses {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-glasses {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-glasses 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-glasses 3s ease-in-out infinite alternate;
}
</style>