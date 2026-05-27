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
      <path d="M12 4.5C15.0776 4.5 17.8526 3.77588 19.8097 2.61579C19.9349 2.54155 20.0772 2.5 20.2228 2.5C20.652 2.5 21 2.84797 21 3.27722V9.5C21 16.5 16.5 21.5 12 21.5C7.5 21.5 3 16.5 3 9.5V3.27722C3 2.84797 3.34797 2.5 3.77722 2.5C3.92281 2.5 4.06506 2.54155 4.1903 2.61579C6.14736 3.77588 8.92241 4.5 12 4.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.5 9.5C6.86849 9.19313 7.40399 9 8 9C8.59601 9 9.13151 9.19313 9.5 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 15.2C13.192 15.2 14.263 14.9296 15 14.5C15 14.5 14.5 17.5 12 17.5C9.5 17.5 9 14.5 9 14.5C9.73698 14.9296 10.808 15.2 12 15.2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.5 9.5C14.8685 9.19313 15.404 9 16 9C16.596 9 17.1315 9.19313 17.5 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mask-theater01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mask-theater01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mask-theater01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mask-theater01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mask-theater01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mask-theater01 3s ease-in-out infinite alternate;
}
</style>