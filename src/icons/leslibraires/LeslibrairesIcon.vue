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
      <path d="M11.79.002a10.579 10.579 0 0 0-7.735 3.575C.18 7.958.593 14.647 4.981 18.518a10.557 10.557 0 0 0 5.3 2.51L12.002 24l1.717-2.971a10.56 10.56 0 0 0 6.227-3.437c3.876-4.38 3.461-11.07-.926-14.94a10.567 10.567 0 0 0-7.23-2.65zM11.277 7.5l.613.512-1.862 2.444c-.005.007-.048.06-.048.115 0 .056.045.112.045.113l1.866 2.461-.615.502-2.573-2.403a.883.883 0 0 1-.3-.667c0-.38.22-.596.304-.678zm3.265 0 .613.512-1.863 2.444c-.005.007-.048.06-.048.115 0 .056.045.112.046.113l1.866 2.461-.615.502-2.573-2.403a.883.883 0 0 1-.301-.667c0-.38.222-.596.305-.678z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: leslibraires
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for leslibraires (simpleicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-leslibraires {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-leslibraires {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-leslibraires 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-leslibraires 2s ease-in-out infinite alternate;
}
</style>