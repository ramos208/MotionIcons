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
      <path d="M3 5L3 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 16L21 16" stroke="currentColor" stroke-linejoin="round"/><path d="M3 7L21 7" stroke="currentColor" stroke-linejoin="round"/><path d="M18 16V7" stroke="currentColor" stroke-linejoin="round"/><path d="M14 16V7" stroke="currentColor" stroke-linejoin="round"/><path d="M10 16V7" stroke="currentColor" stroke-linejoin="round"/><path d="M6 16L6 7" stroke="currentColor" stroke-linejoin="round"/><path d="M3 19L21 19" stroke="currentColor" stroke-linejoin="round"/><path d="M21 5L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 5C21.5523 5 22 4.55228 22 4C22 3.44772 21.5523 3 21 3C20.4477 3 20 3.44772 20 4C20 4.55228 20.4477 5 21 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 5C3.55228 5 4 4.55228 4 4C4 3.44772 3.55228 3 3 3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: crib
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for crib (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-crib {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-crib {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-crib 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-crib 3s ease-in-out infinite alternate;
}
</style>