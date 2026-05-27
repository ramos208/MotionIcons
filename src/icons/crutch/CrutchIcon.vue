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
      <path d="M297.4 9.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-1.4-1.4-158.6 158.6c-18 18-42.4 28.1-67.9 28.1l-59 0c-8.5 0-16.6 3.4-22.6 9.4-61.7 61.7-92.8 92.8-93.3 93.3-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l16-16 0 0 77.3-77.3c6-6 9.4-14.1 9.4-22.6l0-59c0-25.5 10.1-49.9 28.1-67.9L298.7 56 297.4 54.6c-12.5-12.5-12.5-32.8 0-45.3zM344 101.3L261.3 184 328 250.7 410.7 168 344 101.3zm-128 128l-30.6 30.6c-6 6-9.4 14.1-9.4 22.6l0 53.5 53.5 0c8.5 0 16.6-3.4 22.6-9.4L282.7 296 216 229.3z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: crutch
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for crutch (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-crutch {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-crutch {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-crutch 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-crutch 3s ease-in-out infinite alternate;
}
</style>