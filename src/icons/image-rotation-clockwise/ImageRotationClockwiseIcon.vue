<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-radar']"
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
      class="icon-geometry anim-ambient-floating"
    >
      <path d="M14 7H15.6C18.617 7 20.1255 7 21.0627 7.91122C22 8.82245 22 10.289 22 13.2222V14.7778C22 17.711 22 19.1776 21.0627 20.0888C20.1255 21 18.617 21 15.6 21H12.4C9.38301 21 7.87452 21 6.93726 20.0888C6 19.1776 6 17.711 6 14.7778V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.5 17.2857L17.4327 13.2712C17.2576 13.0984 17.0104 13 16.7513 13C16.5061 13 16.271 13.0881 16.0977 13.2449L12.4211 16.5714L10.7152 15.0281C10.5437 14.8729 10.3111 14.7857 10.0686 14.7857C9.80735 14.7857 9.5586 14.8868 9.38506 15.0634L6.5 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.0004 7C10.0882 5.78555 8.63582 5 7 5C4.23858 5 2 7.23858 2 10C2 11.1258 2.37209 12.1647 3 13.0005M11.0004 7L10 3M11.0004 7L7.5 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.625 11.5H11.5M11.75 11.5C11.75 11.6381 11.6381 11.75 11.5 11.75C11.3619 11.75 11.25 11.6381 11.25 11.5C11.25 11.3619 11.3619 11.25 11.5 11.25C11.6381 11.25 11.75 11.3619 11.75 11.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: image-rotation-clockwise
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for image-rotation-clockwise (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-ambient-floating {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-image-rotation-clockwise {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-image-rotation-clockwise {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-image-rotation-clockwise 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-image-rotation-clockwise 3s ease-in-out infinite alternate;
}
</style>