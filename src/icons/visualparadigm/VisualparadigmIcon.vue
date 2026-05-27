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
      <path d="M 1.92 10.08 C 1.92 10.117 11.916 20.132 11.973 20.15 C 11.987 20.154 15.804 16.353 15.804 16.353 C 15.804 16.353 8.138 8.667 8.138 8.642 C 8.138 8.609 11.944 4.803 11.944 4.803 C 11.944 4.803 15.787 8.661 15.787 8.686 C 15.787 8.703 12.98 11.53 12.98 11.53 L 16.804 15.354 L 22.079 10.079 C 22.079 10.079 13.674 1.674 11.981 0 M 3.787 13.036 C 3.764 13.036 2.366 14.424 2.366 14.424 C 2.366 14.424 11.96 24 11.987 24 C 12.013 24 21.601 14.423 21.601 14.423 C 21.601 14.423 20.2 13.036 20.178 13.036 C 20.158 13.036 11.982 21.193 11.982 21.193 C 11.982 21.193 3.805 13.036 3.787 13.036 Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: visualparadigm
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for visualparadigm (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-visualparadigm {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-visualparadigm {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-visualparadigm 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-visualparadigm 3s ease-in-out infinite alternate;
}
</style>