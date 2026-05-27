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
      <path d="M192 56l0 40 128 0 0-40c0-4.4-3.6-8-8-8L200 48c-4.4 0-8 3.6-8 8zm-48 8l0-8c0-30.9 25.1-56 56-56L312 0c30.9 0 56 25.1 56 56l0 424-224 0 0-416zM96 176l0 304-32 0c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l32 0 0 80zM416 480l0-384 32 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-32 0zM244 208c-8.8 0-16 7.2-16 16l0 36-36 0c-8.8 0-16 7.2-16 16l0 24c0 8.8 7.2 16 16 16l36 0 0 36c0 8.8 7.2 16 16 16l24 0c8.8 0 16-7.2 16-16l0-36 36 0c8.8 0 16-7.2 16-16l0-24c0-8.8-7.2-16-16-16l-36 0 0-36c0-8.8-7.2-16-16-16l-24 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: suitcase-medical
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for suitcase-medical (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-suitcase-medical {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-suitcase-medical {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-suitcase-medical 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-suitcase-medical 3s ease-in-out infinite alternate;
}
</style>