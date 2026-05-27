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
      <path d="M14.9998 22H6.40743C5.07774 22 3.99982 20.9221 3.99982 19.5924C3.99982 19.2033 4.09413 18.8199 4.27469 18.4752L9.49982 8.5V2H14.4998V8.5L16.4998 12.3181" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.99991 2H15.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.99991 11.5H15.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.4999 15L18.242 15.697C17.9038 16.611 17.7347 17.068 17.4013 17.4014C17.0679 17.7348 16.6109 17.9039 15.6969 18.2421L14.9999 18.5L15.6969 18.7579C16.6109 19.0961 17.0679 19.2652 17.4013 19.5986C17.7347 19.932 17.9038 20.389 18.242 21.303L18.4999 22L18.7578 21.303C19.096 20.389 19.2651 19.932 19.5985 19.5986C19.9319 19.2652 20.3889 19.0961 21.3029 18.7579L21.9999 18.5L21.3029 18.2421C20.3889 17.9039 19.9319 17.7348 19.5985 17.4014C19.2651 17.068 19.096 16.611 18.7578 15.697L18.4999 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ai-chemistry02
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for ai-chemistry02 (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ai-chemistry02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ai-chemistry02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ai-chemistry02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-ai-chemistry02 2s ease-in-out infinite alternate;
}
</style>