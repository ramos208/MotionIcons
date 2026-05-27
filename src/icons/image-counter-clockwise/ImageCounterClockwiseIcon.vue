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
      <path d="M10 7H8.4C5.38301 7 3.87452 7 2.93726 7.91122C2 8.82245 2 10.289 2 13.2222V14.7778C2 17.711 2 19.1776 2.93726 20.0888C3.87452 21 5.38301 21 8.4 21H11.6C14.617 21 16.1255 21 17.0627 20.0888C18 19.1776 18 17.711 18 14.7778V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.5 17.2857L13.4327 13.2712C13.2576 13.0984 13.0104 13 12.7513 13C12.5061 13 12.271 13.0881 12.0977 13.2449L8.42105 16.5714L6.71522 15.0281C6.54372 14.8729 6.31111 14.7857 6.06857 14.7857C5.80735 14.7857 5.5586 14.8868 5.38506 15.0634L2.5 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 7C13.9122 5.78555 15.3645 5 17.0004 5C19.7618 5 22.0004 7.23858 22.0004 10C22.0004 11.1258 21.6283 12.1647 21.0004 13.0005M13 7L14.0004 3M13 7L16.5004 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.625 11.5H7.5M7.75 11.5C7.75 11.6381 7.63807 11.75 7.5 11.75C7.36193 11.75 7.25 11.6381 7.25 11.5C7.25 11.3619 7.36193 11.25 7.5 11.25C7.63807 11.25 7.75 11.3619 7.75 11.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: image-counter-clockwise
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for image-counter-clockwise (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-image-counter-clockwise {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-image-counter-clockwise {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-image-counter-clockwise 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-image-counter-clockwise 3s ease-in-out infinite alternate;
}
</style>