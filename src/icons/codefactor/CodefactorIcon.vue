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
      <path d="M5.375 2.65a2.64 2.64 0 01-2.62 2.65 2.64 2.64 0 01-2.63-2.65A2.64 2.64 0 012.755 0a2.64 2.64 0 012.62 2.65zm0 9.35a2.64 2.64 0 01-2.62 2.65A2.64 2.64 0 01.125 12a2.64 2.64 0 012.63-2.65A2.64 2.64 0 015.375 12zm0 9.35A2.64 2.64 0 012.755 24a2.64 2.64 0 01-2.63-2.65 2.64 2.64 0 012.63-2.65 2.64 2.64 0 012.62 2.65zM11.315 0a2.64 2.64 0 00-2.61 2.65 2.64 2.64 0 002.6 2.65h9.94a2.64 2.64 0 002.63-2.65A2.64 2.64 0 0021.255 0zm-2.61 12a2.64 2.64 0 012.62-2.65h5.68a2.64 2.64 0 012.6 2.65 2.64 2.64 0 01-2.6 2.65h-5.7a2.64 2.64 0 01-2.6-2.65z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: codefactor
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for codefactor (simpleicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-codefactor {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-codefactor {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-codefactor 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-codefactor 2s ease-in-out infinite alternate;
}
</style>