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
      <!--Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)--><path d="M231.39 243.48a285.56 285.56 0 0 0-22.7-105.7c-90.8 42.4-157.5 122.4-180.3 216.8a249 249 0 0 0 56.9 81.1 333.87 333.87 0 0 1 146.1-192.2zm-36.9-134.4a284.23 284.23 0 0 0-57.4-70.7c-91 49.8-144.8 152.9-125 262.2 33.4-83.1 98.4-152 182.4-191.5zm187.6 165.1c8.6-99.8-27.3-197.5-97.5-264.4-14.7-1.7-51.6-5.5-98.9 8.5A333.87 333.87 0 0 1 279.19 241a285 285 0 0 0 102.9 33.18zm-124.7 9.5a286.33 286.33 0 0 0-80.2 72.6c82 57.3 184.5 75.1 277.5 47.8a247.15 247.15 0 0 0 42.2-89.9 336.1 336.1 0 0 1-80.9 10.4c-54.6-.1-108.9-14.1-158.6-40.9zm-98.3 99.7c-15.2 26-25.7 54.4-32.1 84.2a247.07 247.07 0 0 0 289-22.1c-112.9 16.1-203.3-24.8-256.9-62.1zm180.3-360.6c55.3 70.4 82.5 161.2 74.6 253.6a286.59 286.59 0 0 0 89.7-14.2c0-2 .3-4 .3-6 0-107.8-68.7-199.1-164.6-233.4z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: volleyball-ball
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for volleyball-ball (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-volleyball-ball {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-volleyball-ball {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-volleyball-ball 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-volleyball-ball 3s ease-in-out infinite alternate;
}
</style>