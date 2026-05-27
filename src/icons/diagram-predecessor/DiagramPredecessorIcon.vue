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
      <path d="M289.2 137.9c2.5-6 8.3-9.9 14.8-9.9l40 0 0-24c0-13.3-10.7-24-24-24l-98 0c1.3 5.1 2 10.5 2 16l0 64c0 35.3-28.7 64-64 64l-96 0c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l256 0c39.8 0 72 32.2 72 72l0 24 40 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-64 64c-6.2 6.2-16.4 6.2-22.6 0l-64-64c-4.6-4.6-5.9-11.5-3.5-17.4zM384 352l-320 0 0 64 320 0 0-64zm64 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l320 0c35.3 0 64 28.7 64 64l0 64z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: diagram-predecessor
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for diagram-predecessor (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-diagram-predecessor {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-diagram-predecessor {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-diagram-predecessor 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-diagram-predecessor 3s ease-in-out infinite alternate;
}
</style>