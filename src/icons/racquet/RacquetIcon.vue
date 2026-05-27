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
      <path d="M230,26.05C202-1.88,151.53,3.16,117.4,37.3c-31.79,31.79-38.33,77.77-16.51,106.49L71.33,173.35l-.68-.68a16,16,0,0,0-22.64,0L20.69,200a16,16,0,0,0,0,22.64l12.69,12.69a16,16,0,0,0,22.63,0h0L83.34,208a16,16,0,0,0,0-22.63l-.69-.69,29.56-29.56c11.29,8.58,25.24,12.79,40,12.79,22.72,0,47.25-10,66.54-29.3C252.83,104.47,257.88,54,230,26.05ZM44.7,224,32,211.31,59.33,184l6.33,6.34h0L72,196.67ZM224.23,104H200.06v-32h32A72.45,72.45,0,0,1,224.23,104ZM136,149.61A44.15,44.15,0,0,1,106.39,120H136ZM104,104a72.24,72.24,0,0,1,7.86-32H136v32Zm48-32h32v32h-32Zm77.67-16H200.06V26.28a44.23,44.23,0,0,1,29.66,29.66Zm-45.82-32h.16v32h-32V31.76A72.47,72.47,0,0,1,183.9,23.9ZM136,42.06V55.94H122.16a89.72,89.72,0,0,1,6.56-7.32A93.17,93.17,0,0,1,136,42.06Zm16,109.92V120h32v24.16A72.24,72.24,0,0,1,152.05,152Zm48-18.14V120H214a91.62,91.62,0,0,1-6.56,7.32A89.64,89.64,0,0,1,200.06,133.84Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: racquet
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for racquet (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-racquet {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-racquet {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-racquet 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-racquet 3s ease-in-out infinite alternate;
}
</style>