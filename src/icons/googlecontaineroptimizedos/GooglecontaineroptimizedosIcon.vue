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
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.6 9.6 0 0 1-5.016-1.416L11.28 17.7v-5.4L6.612 9.6v5.424l3.3 1.908-4.152 2.4A9.6 9.6 0 0 1 7.296 3.6v4.8L12 11.136 16.68 8.4 12 5.724 8.688 7.632V2.964a9.6 9.6 0 0 1 12.372 5.64A9.72 9.72 0 0 1 21.672 12v.084L17.352 9.6l-4.68 2.712v5.412l4.68-2.7v-3.816l4.14 2.4A9.6 9.6 0 0 1 12 21.6z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: googlecontaineroptimizedos
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for googlecontaineroptimizedos (simpleicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-googlecontaineroptimizedos {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-googlecontaineroptimizedos {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-googlecontaineroptimizedos 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-googlecontaineroptimizedos 2s ease-in-out infinite alternate;
}
</style>