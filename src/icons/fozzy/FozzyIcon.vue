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
      <path d="M14.494 20.48l-.998-2.095 5.787-11.273c.897 1.396 1.496 3.092 1.496 4.888 0 3.99-2.594 7.382-6.285 8.48zM12.998.029C5.615-.471-.47 5.615.028 12.998c.5 5.786 5.188 10.475 10.974 10.973 7.383.5 13.468-5.586 12.97-12.969C23.471 5.216 18.783.527 12.997.03zM7.112 4.717c1.297-.897 2.793-1.396 4.39-1.496L8.807 8.409 7.112 4.717zm3.491 7.383l4.19-8.38c.798.3 1.497.598 2.195 1.097L11.9 14.793 10.603 12.1zM3.221 12c0-1.796.599-3.492 1.496-4.888l6.485 13.667C6.712 20.38 3.22 16.589 3.22 12z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: fozzy
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for fozzy (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-fozzy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-fozzy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-fozzy 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-fozzy 3s ease-in-out infinite alternate;
}
</style>