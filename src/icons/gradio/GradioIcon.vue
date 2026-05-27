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
      <path d="M 12 1.527 A 1.532 1.532 0 0 0 11.24 1.73 L 0.7695 7.732 A 1.532 1.532 0 0 0 0 9.021 L 0 9.109 A 1.532 1.532 0 0 0 0.7695 10.4 L 3.57 12 L 0.7695 13.61 C 0.256 13.9 0 14.42 0 14.94 C 0 15.45 0.256 15.97 0.7695 16.26 L 11.24 22.27 C 11.71 22.54 12.29 22.54 12.76 22.27 L 23.23 16.26 C 23.73 15.98 23.99 15.48 24 14.97 L 24 14.9 C 23.99 14.4 23.73 13.89 23.23 13.61 L 20.42 12 L 23.23 10.4 A 1.532 1.532 0 0 0 24 9.223 L 24 8.91 A 1.532 1.532 0 0 0 23.23 7.732 L 12.76 1.73 A 1.532 1.532 0 0 0 12 1.527 z M 12 4.826 L 19.39 9.061 L 17.34 10.24 L 12.76 7.602 C 12.53 7.47 12.27 7.398 12 7.398 C 11.73 7.398 11.47 7.469 11.24 7.602 L 6.652 10.24 L 4.613 9.061 L 12 4.826 z M 12 10.7 L 14.27 12 L 12 13.3 L 9.734 12 L 12 10.7 z M 6.652 13.77 L 11.24 16.39 A 1.532 1.532 0 0 0 12.76 16.39 L 17.34 13.77 L 19.39 14.94 L 12 19.17 L 4.613 14.94 L 6.652 13.77 z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gradio
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for gradio (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gradio {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gradio {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gradio 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gradio 3s ease-in-out infinite alternate;
}
</style>