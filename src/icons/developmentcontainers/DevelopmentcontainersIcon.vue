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
      <path d="M10.31.615a4.5 4.5 0 0 1 3.382 0l8.998 3.648A2.1 2.1 0 0 1 24 6.208v11.584a2.1 2.1 0 0 1-1.311 1.946l-8.998 3.648a4.5 4.5 0 0 1-3.382 0l-8.998-3.648A2.1 2.1 0 0 1 0 17.792V6.208a2.1 2.1 0 0 1 1.311-1.946Zm2.705 1.668a2.7 2.7 0 0 0-2.028 0l-9 3.647a.3.3 0 0 0-.187.278v11.584a.3.3 0 0 0 .187.278l8.999 3.648a2.7 2.7 0 0 0 2.028 0l8.999-3.648a.3.3 0 0 0 .187-.278V6.208a.3.3 0 0 0-.187-.278ZM6.019 6.658 12 8.928l5.98-2.27c1.122-.427 1.762 1.256.64 1.683l-5.72 2.17V17.1c0 1.2-1.8 1.2-1.8 0v-6.59L5.38 8.34c-1.122-.426-.482-2.109.64-1.683"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: developmentcontainers
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for developmentcontainers (simpleicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-developmentcontainers {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-developmentcontainers {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-developmentcontainers 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-developmentcontainers 2s ease-in-out infinite alternate;
}
</style>