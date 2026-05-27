<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M22 3.6V11H2V3.6C2 3.26863 2.26863 3 2.6 3H21.4C21.7314 3 22 3.26863 22 3.6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 7H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 11L2.78969 13.5844C3.04668 14.4255 3.82294 15 4.70239 15H6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 11L21.2103 13.5844C20.9533 14.4255 20.1771 15 19.2976 15H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 14.5C9.5 14.5 9.5 21.5 6 21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5 14.5C14.5 14.5 14.5 21.5 18 21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 14.5V21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: air-conditioner
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for air-conditioner (iconoir). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-air-conditioner {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-air-conditioner {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-air-conditioner 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-air-conditioner 2s ease-in-out infinite alternate;
}
</style>