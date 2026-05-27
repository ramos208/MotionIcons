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
      <path d="M131.58,16.85a8,8,0,0,0-7.16,0C120.32,18.9,24,67.84,24,136a56,56,0,0,0,74.15,53L88.34,221.7A8,8,0,0,0,96,232h64a8,8,0,0,0,7.66-10.3L157.85,189A56,56,0,0,0,232,136C232,67.84,135.68,18.9,131.58,16.85ZM176,176a40,40,0,0,1-26.29-9.85,8,8,0,0,0-12.92,8.33L149.25,216h-42.5l12.46-41.52a8,8,0,0,0-12.92-8.33A40,40,0,0,1,40,136c0-29.88,24.41-56.55,44.89-73.66A279.13,279.13,0,0,1,128,33.06a279.13,279.13,0,0,1,43.11,29.28C208.21,93.34,216,119.51,216,136A40,40,0,0,1,176,176Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: spade
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for spade (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-spade {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-spade {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-spade 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-spade 3s ease-in-out infinite alternate;
}
</style>