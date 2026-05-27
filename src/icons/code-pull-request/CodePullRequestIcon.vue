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
      <path d="M328 24c0-9.7-5.8-18.5-14.8-22.2S293.9 .2 287 7L231 63c-9.4 9.4-9.4 24.6 0 33.9l56 56c6.9 6.9 17.2 8.9 26.2 5.2S328 145.7 328 136l0-24 24 0c17.7 0 32 14.3 32 32l0 214.7c-28.3 12.3-48 40.5-48 73.3 0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3L448 144c0-53-43-96-96-96l-24 0 0-24zM72 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm56 73.3c28.3-12.3 48-40.5 48-73.3 0-44.2-35.8-80-80-80S16 35.8 16 80c0 32.8 19.7 61 48 73.3l0 205.3c-28.3 12.3-48 40.5-48 73.3 0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3l0-205.3zM72 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm344-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: code-pull-request
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for code-pull-request (fontawesome). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-code-pull-request {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-code-pull-request {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-code-pull-request 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-code-pull-request 2s ease-in-out infinite alternate;
}
</style>