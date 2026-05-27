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
      <path d="M12 0c5.523 0 10 4.477 10 10v9a3.125 3.125 0 0 1-4.694 2.703A3.126 3.126 0 0 1 12 23a3.126 3.126 0 0 1-5.306-1.297A3.125 3.125 0 0 1 2 19v-9C2 4.477 6.477 0 12 0m-1.25 10.625a.625.625 0 0 0-.625.625 1.875 1.875 0 0 0 3.75 0 .625.625 0 0 0-.625-.625zm-1.875-5c-.69 0-1.25.56-1.25 1.25v1.25a1.25 1.25 0 0 0 2.5 0v-1.25c0-.69-.56-1.25-1.25-1.25m6.25 0c-.69 0-1.25.56-1.25 1.25v1.25a1.25 1.25 0 0 0 2.5 0v-1.25c0-.69-.56-1.25-1.25-1.25"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: await
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for await (simpleicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-await {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-await {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-await 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-await 2s ease-in-out infinite alternate;
}
</style>