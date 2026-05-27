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
      <path d="M8.5 17H4C2.34533 17 2 17.3453 2 19V20C2 21.6547 2.34533 22 4 22H20C21.6547 22 22 21.6547 22 20V19C22 17.3453 21.6547 17 20 17H15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 12H6C4.34533 12 4 12.3453 4 14V17M15 12H18C19.6547 12 20 12.3453 20 14V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 12V9C6 7.34533 6.34533 7 8 7H16C17.6547 7 18 7.34533 18 9V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 7V4C9 2.34533 9.34533 2 11 2H13C14.6547 2 15 2.34533 15 4V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.5 7L16 22M10.5 7L8 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mayan-pyramid
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mayan-pyramid (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mayan-pyramid {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mayan-pyramid {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mayan-pyramid 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mayan-pyramid 3s ease-in-out infinite alternate;
}
</style>