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
      <path d="m12.736 7.341-.002 2.897c.012 3.953-3.188 7.177-7.098 7.171-1.553-.003-2.967-.48-4.112-1.313 2.056 3.725 5.999 6.24 10.48 6.245 6.511-.003 11.891-5.343 11.992-11.91l-.002-.027c.006-.151 0-2.951.006-3.075-.01-3.116-2.538-5.677-5.63-5.67-3.105-.006-5.645 2.54-5.634 5.683zM5.629 4.573C2.525 4.573 0 7.118 0 10.246s2.525 5.673 5.63 5.673c3.103 0 5.629-2.545 5.629-5.673s-2.526-5.673-5.63-5.673"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ultralytics
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ultralytics (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ultralytics {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ultralytics {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ultralytics 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ultralytics 3s ease-in-out infinite alternate;
}
</style>