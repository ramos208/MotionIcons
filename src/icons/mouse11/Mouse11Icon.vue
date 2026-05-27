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
      <path d="M12.5 5.5V2M12.5 12V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.5 22C18.5 22 20 17.49 20 12C20 6.50998 18.5 2 12.5 2C6.49993 2 5 6.50996 5 12C5 17.49 6.49993 22 12.5 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 7C14 6.53406 14 6.30109 13.9239 6.11732C13.8224 5.87229 13.6277 5.67761 13.3827 5.57612C13.1989 5.5 12.9659 5.5 12.5 5.5C12.0341 5.5 11.8011 5.5 11.6173 5.57612C11.3723 5.67761 11.1776 5.87229 11.0761 6.11732C11 6.30109 11 6.53406 11 7V7.5C11 7.96594 11 8.19891 11.0761 8.38268C11.1776 8.62771 11.3723 8.82239 11.6173 8.92388C11.8011 9 12.0341 9 12.5 9C12.9659 9 13.1989 9 13.3827 8.92388C13.6277 8.82239 13.8224 8.62771 13.9239 8.38268C14 8.19891 14 7.96594 14 7.5V7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.5 12H19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mouse11
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mouse11 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mouse11 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mouse11 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mouse11 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mouse11 3s ease-in-out infinite alternate;
}
</style>