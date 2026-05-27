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
      <path d="M11.54 14.49c-1.278 0-2.264-.998-2.264-2.276 0-1.252.98-2.27 2.264-2.27 1.232 0 2.238 1.018 2.238 2.27 0 1.278-1.005 2.277-2.239 2.277zm3.074-7.854l-.214.998c-.59-1.18-2.348-1.297-3.295-1.297-2.952 0-5.527 2.841-5.527 6.746 0 3.14 1.875 5.111 4.23 5.111 1.316 0 2.432-.304 3.353-1.4l-.24 1.102h3.711l1.692-11.26c-1.238-.001-2.482.01-3.71 0zM12 0c6.63 0 12 5.37 12 12s-5.37 12-12 12S0 18.63 0 12 5.37 0 12 0Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: airasia
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for airasia (simpleicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-airasia {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-airasia {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-airasia 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-airasia 2s ease-in-out infinite alternate;
}
</style>