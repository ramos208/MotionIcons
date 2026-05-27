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
      <path d="M7.68924 2.43826L5.3538 4.21913C4.38173 4.96038 3.89569 5.33101 4.01879 5.6655C4.14189 6 4.76432 6 6.00918 6H16C16.3645 6 16.5467 6 16.7153 5.94363C16.8839 5.88726 17.0262 5.77875 17.3108 5.56174L19.6462 3.78087C20.6183 3.03962 21.1043 2.66899 20.9812 2.3345C20.8581 2 20.2357 2 18.9908 2H9C8.63555 2 8.45332 2 8.28472 2.05637C8.11612 2.11274 7.97383 2.22125 7.68924 2.43826Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.01879 21.666C4.14189 22.0005 4.76432 22.0005 6.00918 22.0005H16C16.3645 22.0005 16.5467 22.0005 16.7153 21.9441M4.01879 21.666C3.89569 21.3315 4.38173 20.9608 5.3538 20.2196L7.68924 18.4387C7.97383 18.2217 8.11612 18.1132 8.28472 18.0568M4.01879 21.666V5.66597M8.28472 18.0568C8.45332 18.0005 8.63555 18.0005 9 18.0005H14M8.28472 18.0568V9.00046M16.7153 21.9441C16.8839 21.8877 17.0262 21.7792 17.3108 21.5622L19.6462 19.7813C20.6183 19.0401 21.1043 18.6695 20.9812 18.335V2.33496M16.7153 21.9441V5.94409" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rectangular01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rectangular01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rectangular01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rectangular01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rectangular01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rectangular01 3s ease-in-out infinite alternate;
}
</style>