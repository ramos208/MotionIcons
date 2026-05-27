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
      <path d="M5 9V15.7407C5 19.1976 8.13401 22 12 22C15.866 22 19 19.1976 19 15.7407V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 9H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 9H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.0741 11.5V15.0606C14.0741 16.1317 13.1455 17 12 17C10.8545 17 9.9259 16.1317 9.9259 15.0606V11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 13L5 13" stroke="currentColor" stroke-linejoin="round"/><path d="M19 13L14 13" stroke="currentColor" stroke-linejoin="round"/><path d="M11.6667 2L10 5H14L12.3333 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: magnet-energy
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for magnet-energy (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-magnet-energy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-magnet-energy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-magnet-energy 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-magnet-energy 3s ease-in-out infinite alternate;
}
</style>