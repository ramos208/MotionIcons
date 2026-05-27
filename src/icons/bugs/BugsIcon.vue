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
      <path d="M447.5 174.6c8.8-8.4 22.7-8.9 32.2-.8s11 21.9 4.1 31.9l-1.5 1.9-23 26.7c26.7 13.5 46.3 39.1 51.4 69.6l25.3 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-24 0 0 32 24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-25.3 0c-7.6 45.4-47.1 80-94.7 80s-87-34.6-94.7-80L296 432c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-32-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l25.3 0c5.1-30.5 24.7-56.1 51.4-69.6l-22.9-26.7c-8.6-10.1-7.5-25.2 2.6-33.8s25.2-7.5 33.8 2.6l29.8 34.8 29.8-34.8 1.7-1.8zm-256-192c8.8-8.4 22.7-8.9 32.2-.8s11 21.9 4.1 31.9l-1.5 1.9-23 26.7C230 55.9 249.5 81.5 254.7 112l25.3 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-24 0 0 32 24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-25.3 0c-7.6 45.4-47.1 80-94.7 80s-87-34.6-94.7-80L40 240c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-32-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l25.3 0C70.5 81.5 90 55.9 116.7 42.4L93.8 15.6C85.2 5.6 86.3-9.6 96.4-18.2s25.2-7.5 33.8 2.6l29.8 34.8 29.8-34.8 1.7-1.8z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bugs
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bugs (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bugs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bugs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bugs 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bugs 3s ease-in-out infinite alternate;
}
</style>