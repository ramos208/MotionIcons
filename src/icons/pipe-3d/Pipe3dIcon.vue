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
      <path d="M10 20C6.68629 20 4 17.3137 4 14C4 10.6863 6.68629 8 10 8C13.3137 8 16 10.6863 16 14C16 17.3137 13.3137 20 10 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.773 4.74173C11.8576 3.66513 13.3511 3 15 3C18.3137 3 21 5.68629 21 9C21 10.5367 20.4223 11.9385 19.4722 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 21L9.5 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 3L19.5 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 9.5L10.5 5L10.75 4.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5 18L19.2188 13.2812" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pipe-3d
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pipe-3d (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pipe-3d {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pipe-3d {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pipe-3d 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pipe-3d 3s ease-in-out infinite alternate;
}
</style>