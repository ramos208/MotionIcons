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
      <path d="M16.2758 18C15.2907 19.1016 14.0122 20 12 20C9.98779 20 8.70931 19.1016 7.72419 18M16.2758 18C17.487 16.6456 18.2548 14.9842 19.3976 14.3081M16.2758 18C18.345 18 22 18.5623 22 15.5C22 14.7128 21.3199 14 20.5 14C20.2178 14 19.9595 14.0531 19.7188 14.1493M19.7188 14.1493C19.6082 14.1934 19.5014 14.2467 19.3976 14.3081M19.7188 14.1493C19.6197 14.1986 19.5127 14.2518 19.3976 14.3081M19.3976 14.3081C18.0731 14.9556 15.6802 16 12 16C8.31979 16 5.92692 14.9556 4.6024 14.3081M7.72419 18C6.51296 16.6456 5.7452 14.9842 4.6024 14.3081M7.72419 18C5.65501 18 2 18.5623 2 15.5C2 14.7128 2.68011 14 3.5 14C3.78217 14 4.04046 14.0531 4.28118 14.1493M4.28118 14.1493C4.39175 14.1934 4.49862 14.2467 4.6024 14.3081M4.28118 14.1493C4.38028 14.1986 4.48731 14.2518 4.6024 14.3081" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 12C6 10.495 6.44241 6.63041 8.57569 4.40139C8.83801 4.1273 9.20006 4 9.56726 4C9.83761 4 10.0901 4.14412 10.24 4.38406L10.4453 4.71248C10.7918 5.26695 11.3753 5.6 12 5.6C12.6247 5.6 13.2082 5.26695 13.5547 4.71248L13.76 4.38406C13.9099 4.14412 14.1624 4 14.4327 4C14.7999 4 15.162 4.1273 15.4243 4.40139C17.5576 6.63041 18 10.495 18 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.5 10C7.91553 10.51 9.39052 11 12 11C14.6095 11 16.0845 10.51 17.5 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cowboy-hat
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cowboy-hat (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cowboy-hat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cowboy-hat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cowboy-hat 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cowboy-hat 3s ease-in-out infinite alternate;
}
</style>