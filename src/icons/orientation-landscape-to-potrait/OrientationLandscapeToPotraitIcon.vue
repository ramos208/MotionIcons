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
      <path d="M12 9C12 6.64298 12 5.46447 11.2678 4.73223C10.5355 4 9.35702 4 7 4C4.64298 4 3.46447 4 2.73223 4.73223C2 5.46447 2 6.64298 2 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7 22H15C17.357 22 18.5355 22 19.2678 21.2678C20 20.5355 20 19.357 20 17C20 14.643 20 13.4645 19.2678 12.7322C18.5355 12 17.357 12 15 12L7 12C4.64298 12 3.46446 12 2.73223 12.7322C2 13.4645 2 14.643 2 17C2 19.357 2 20.5355 2.73223 21.2678C3.46446 22 4.64298 22 7 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.5 2L16 4.5L18.5 7M17 4.5C19.357 4.5 20.5355 4.5 21.2678 5.23223C22 5.96447 22 7.14298 22 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: orientation-landscape-to-potrait
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for orientation-landscape-to-potrait (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-orientation-landscape-to-potrait {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-orientation-landscape-to-potrait {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-orientation-landscape-to-potrait 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-orientation-landscape-to-potrait 2s ease-in-out infinite alternate;
}
</style>