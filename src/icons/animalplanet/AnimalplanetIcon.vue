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
      <path d="m18.814 5.94-.494.858c2.605.509 4.118 1.618 4.118 2.917 0 .865-.649 1.696-1.762 1.696-1.699 0-2.949-2.673-2.949-2.673-.356-.011-.993-.026-.993-.026s-1.822-2.342-4.595-3.168v3.798c.244.205.559.499.855.863-1.252-.757-2.552-1.317-4.847-1.317-2.496 0-5.547 1.007-7.242 3.763l.178.322c.773-.873 1.968-1.402 2.006-1.416C1.424 13.012.469 15.427 0 16.998l1.456 1.457a10.687 10.687 0 0 1 8.055-3.588c2.77 0 5.582 1.157 7.534 3.157l1.577-1.579c-1.324-2.263-2.924-3.861-2.972-3.909.068.031 1.487.85 3.975.85 2.312 0 4.375-1.285 4.375-3.203 0-2.292-1.965-3.745-5.186-4.243"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: animalplanet
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for animalplanet (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-animalplanet {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-animalplanet {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-animalplanet 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-animalplanet 3s ease-in-out infinite alternate;
}
</style>