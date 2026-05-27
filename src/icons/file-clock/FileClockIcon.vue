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
      <path d="M8 15V17L9.5 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 2.50022V3.00043C14 5.83009 14 7.24492 14.8786 8.12398C15.7573 9.00304 17.1715 9.00304 20 9.00304H20.5M5 9.00304C5.00194 6.05815 5.0424 4.5367 5.88598 3.48998C6.06499 3.26787 6.26722 3.06554 6.48924 2.88646C7.58822 2 9.21075 2 12.4558 2C13.1613 2 13.5141 2 13.8371 2.11406C13.9043 2.13778 13.9702 2.16508 14.0345 2.19583C14.3435 2.3437 14.593 2.59325 15.0918 3.09236L19.8284 7.83096C20.4065 8.40927 20.6955 8.69843 20.8478 9.06613C21 9.43383 21 9.84276 21 10.6606V14.0052C21 17.7781 21 19.6645 19.8284 20.8366C18.8853 21.7801 17.4795 21.9641 15 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: file-clock
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for file-clock (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-file-clock {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-file-clock {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-file-clock 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-file-clock 3s ease-in-out infinite alternate;
}
</style>