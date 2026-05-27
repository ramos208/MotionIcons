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
      <path d="M2.327.016A2.325 2.325 0 0 0 0 2.34v19.32a2.325 2.325 0 0 0 2.327 2.323h19.346A2.325 2.325 0 0 0 24 21.66V2.34A2.325 2.325 0 0 0 21.673.016zm10.054 3.496a3.443 3.443 0 0 1 .07 0 4.317 4.317 0 0 1 3.267 1.462 4.447 4.447 0 0 1 .961 2.365 4.157 4.157 0 0 1-.456 2.27 5.024 5.024 0 0 1 2.424 2.008 5.237 5.237 0 0 1 .73 3.374 4.68 4.68 0 0 1-1.15 2.466 4.84 4.84 0 0 1-2.26 1.535l-4.987 1.439a1.494 1.494 0 0 1-.41.058 1.497 1.497 0 0 1-1.432-1.075L5.524 6.909a1.487 1.487 0 0 1 1.018-1.841l4.956-1.429a3.443 3.443 0 0 1 .883-.127zm.248.861a3.091 3.091 0 0 0-.855.122L6.94 5.888a.744.744 0 0 0-.51.922l3.53 12.206a.745.745 0 0 0 .921.509l4.664-1.345a4.085 4.085 0 0 0-.896-8.003 3.297 3.297 0 0 0 1.138-2.272 3.479 3.479 0 0 0-.928-2.549 2.989 2.989 0 0 0-2.23-.983Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: byjus
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for byjus (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-byjus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-byjus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-byjus 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-byjus 3s ease-in-out infinite alternate;
}
</style>