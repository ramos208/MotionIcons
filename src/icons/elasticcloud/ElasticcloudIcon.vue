<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M13.318 0c-6.628 0-12 5.372-12 12 0 2.008.495 3.9 1.368 5.563a14.299 14.299 0 0 1 5.09-3.664c.307-.13.624-.22.948-.28A4.842 4.842 0 0 1 8.443 12a4.875 4.875 0 0 1 7.494-4.11 2.218 2.218 0 0 0 2.055.164 12.047 12.047 0 0 0 4.69-3.554A11.975 11.975 0 0 0 13.318 0zM9.426 15.77c-.266.01-.531.069-.783.175a12.044 12.044 0 0 0-4.69 3.555c2.2 2.742 5.576 4.5 9.365 4.5 3.789 0 7.165-1.758 9.364-4.5a12.048 12.048 0 0 0-4.69-3.555 2.217 2.217 0 0 0-2.055.165 4.845 4.845 0 0 1-2.62.765 4.846 4.846 0 0 1-2.618-.765 2.193 2.193 0 0 0-1.273-.34z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: elasticcloud
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for elasticcloud (simpleicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-elasticcloud {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-elasticcloud {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-elasticcloud 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-elasticcloud 3s ease-in-out infinite alternate;
}
</style>