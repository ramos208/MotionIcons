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
      <path d="M535-24.9c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L41 537.1c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l25-25 0-447.2c0-15 10.5-28.3 25.4-29.8 7.4-.7 14.9-1.1 22.6-1.1 112.7 0 206 83.3 221.7 191.7 .4 3 1.7 5.9 3.6 8.3l2.2 2.6 227.5-227.5zM133.8 512L288 357.8 288 416c0 53-43 96-96 96l-58.2 0zM176 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm336 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-88 72a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-64 48a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm128 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-88-24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: head-side-cough-slash
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for head-side-cough-slash (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-head-side-cough-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-head-side-cough-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-head-side-cough-slash 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-head-side-cough-slash 3s ease-in-out infinite alternate;
}
</style>